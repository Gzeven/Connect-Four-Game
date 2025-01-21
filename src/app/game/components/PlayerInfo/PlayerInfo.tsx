import Image from 'next/image';
import player1Icon from '../../../../../public/assets/images/player-one.svg';
import player2Icon from '../../../../../public/assets/images/player-two.svg';
import cpuIcon from '../../../../../public/assets/images/cpu.svg';
import { PlayerContainer, PlayerBox, PlayerBoxInfoContainer } from "./PlayerInfo.styles";

interface PlayerInfoProps {
    player1Score: number;
    player2Score: number;
    isCPU: boolean;
  }

  const PlayerInfo: React.FC<PlayerInfoProps> = ({ player1Score, player2Score, isCPU }) => (
    <PlayerContainer>
    <PlayerBox className="player1">
      <Image className="player-image" src={player1Icon} alt="Player 1 Icon" />
      <PlayerBoxInfoContainer>
      <p>{isCPU ? "You" : "Player 1"}</p>
        <span>{player1Score}</span>
      </PlayerBoxInfoContainer>
    </PlayerBox>

    <PlayerBox className="player2">
      <Image className="player-image" src={isCPU ? cpuIcon : player2Icon}  alt={isCPU ? "CPU Icon" : "Player 2 Icon"} />
      <PlayerBoxInfoContainer>
        <p>{isCPU ? "CPU" : "Player 2"}</p>
        <span>{player2Score}</span>
        </PlayerBoxInfoContainer>
    </PlayerBox>
  </PlayerContainer>

);

export default PlayerInfo;