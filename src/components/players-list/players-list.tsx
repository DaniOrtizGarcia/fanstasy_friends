import { useViewport, usePlayers } from "../../hooks";
import { getResponsiveTexts } from "../../utils/table-texts";
import './players-list.scss';


export const PlayerList = () => {
  const { players, loading, error } = usePlayers();
  const { isMobile } = useViewport();
  const texts = getResponsiveTexts(isMobile);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <div className="players-list">
        <ul className="players-list__header">
          <li className="players-list__header-item name">{texts.name}</li>
          <li className="players-list__header-item wins">{texts.wins}</li>
          <li className="players-list__header-item losses">{texts.losses}</li>
          <li className="players-list__header-item goals">{texts.goals}</li>
          <li className="players-list__header-item points">{texts.points}</li>
        </ul>

      {players.map((player) => (
        <ul key={player.id} className="players-list__player">
          <li className="players-list__player-item name">{player.name}</li>
          <li className="players-list__player-item wins">{player.wins}</li>
          <li className="players-list__player-item losses">{player.losses}</li>
          <li className="players-list__player-item goals">{player.goals}</li>
          <li className="players-list__player-item points">{player.points}</li>
        </ul>
      ))}

      <div className="players-list__info">
        * Las victorias cuentan 2 puntos, los goles 0,5 puntos.
      </div>
    </div>
  );
};
