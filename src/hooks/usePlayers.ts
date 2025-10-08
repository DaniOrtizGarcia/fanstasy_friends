import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { type PlayerData } from '../utils/excel-parser';

export const usePlayers = () => {
  const [players, setPlayers] = useState<PlayerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        setLoading(true);
        const playersCollection = collection(db, 'cojos-fantasy');
        const snapshot = await getDocs(playersCollection);
        
        const playersData: PlayerData[] = [];
        snapshot.forEach((doc) => {
          playersData.push(doc.data() as PlayerData);
        });
        
        setPlayers(playersData);
        setError(null);
      } catch (err) {
        setError('Error al cargar los datos');
        console.error('Error fetching players:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  const calculatePoints = (wins: number, goals: number) => {
    return (wins * 2) + (goals * 0.5);
  }

  const formattedPlayers = players.map((player, index) => ({
    id: index + 1,
    name: player.Nombre,
    wins: player.Victorias,
    losses: player.Derrotas,
    goals: player.Goles,
    points: calculatePoints(player.Victorias, player.Goles)
  })).sort((a, b) => b.points - a.points);

  return { players: formattedPlayers, loading, error };
};
