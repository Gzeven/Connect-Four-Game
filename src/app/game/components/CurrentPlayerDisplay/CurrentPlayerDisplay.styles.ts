import styled from 'styled-components';


interface PlayerBoxProps {
    $isPlayer1Turn: boolean;
    $gameOver: boolean;
    $winner: string | null; 
  }

export const CurrentPlayerBox = styled.div<PlayerBoxProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkPurple};;
  border-radius: 60px 60px 0 0;
  height: 50vh;
  position: relative;
  background-color: ${({ $gameOver, $winner, theme }) => 
    $gameOver 
      ? $winner === 'Player 1' 
        ? theme.colors.red 
        : $winner === 'Player 2' 
        ? theme.colors.yellow 
        : theme.colors.darkPurple
      : theme.colors.darkPurple
  };
`;

interface BoxContentProps {
  $isPlayer1Turn: boolean;
  $gameOver: boolean;
}

export const CurrentPlayerBoxContent = styled.div<BoxContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 165px;
  width: 12.3125rem;
  z-index: 10;
  position: absolute;
  top:-10px;
  background-image: ${({ $gameOver, $isPlayer1Turn }) => 
    !$gameOver 
      ? `url(${$isPlayer1Turn ? '/assets/images/turn-background-red.svg' : '/assets/images/turn-background-yellow.svg'})`
      : 'none'
  };
  background-repeat: no-repeat;
  @media (min-width: 768px) {
      top: -20px;
    }
`;

export const CurrentPlayerText = styled.p<BoxContentProps>`
  font-weight: 700;
  font-size: 1rem; 
  color: ${({ $isPlayer1Turn, theme }) =>
    $isPlayer1Turn ? theme.colors.white : theme.colors.black};
  text-transform: uppercase;
  text-align: center;
`;

export const TimeLeftText = styled.p<BoxContentProps>`
  font-weight: 700;
  font-size: 3.5rem; 
  color: ${({ $isPlayer1Turn, theme }) =>
    $isPlayer1Turn ? theme.colors.white : theme.colors.black};
`;

export const EndGameBox = styled.div`
  width: 17.8125rem;
  height: 10rem;
  background: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: absolute;
  top: -10px;
  @media (min-width: 768px) {
      top: -20px;
    }
`;


export const WinnerText = styled.p`
  font-weight: 700;
  font-size: 1rem; 
  text-transform: uppercase;
`;

export const StatusText = styled.p`
  font-weight: 700;
  line-height:1;
  font-size: 3.5rem; 
  text-transform: uppercase;
  padding-bottom: 0.25rem;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.white};

  border-radius: 1.25rem;
  width: 8.125rem;
  height: 2.4375rem;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
`;
