import { players } from "../../data/players"
import { useViewport } from "../../hooks";
import { getResponsiveTexts } from "../../utils/tableTexts";
import './players-list.scss';


export const PlayerList = () => {

  const sortedPlayers = players.sort((a, b) => b.points - a.points);
  const { isMobile } = useViewport();
  const texts = getResponsiveTexts(isMobile);

  return (
      <div className="players-list">
        <ul className="players-list__header">
          <li className="players-list__header-item name">{texts.name}</li>
          <li className="players-list__header-item wins">{texts.wins}</li>
          <li className="players-list__header-item losses">{texts.losses}</li>
          <li className="players-list__header-item goals">{texts.goals}</li>
          <li className="players-list__header-item points">{texts.points}</li>
        </ul>

      {sortedPlayers.map((player) => (
        <ul key={player.id} className="players-list__player">
          <li className="players-list__player-item name">{player.name}</li>
          <li className="players-list__player-item wins">{player.wins}</li>
          <li className="players-list__player-item losses">{player.losses}</li>
          <li className="players-list__player-item goals">{player.goals}</li>
          <li className="players-list__player-item points">{player.points}</li>
        </ul>
      ))}
    </div>
  )
}
