import styled from 'styled-components';


interface PlayerBoxProps {
    $isPlayer1Turn: boolean;
    $gameOver: boolean;
    $winner: string | null; // If it's a string like 'Player 1' or 'Player 2'
  }

export const CurrentPlayerBox = styled.div<PlayerBoxProps>`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5C2DD5;
  border-radius: 60px 60px 0 0;
  padding: 10px;
  width: 100%;
  height: 191px;
  position: relative;
  height: 100vh;
  margin-top: -10px; /* Slightly overlap the gameboard */
   /* Ensure it is on top of the board */
   background-color: ${({ $gameOver, $winner, theme }) => 
    $gameOver 
      ? $winner === 'Player 1' 
        ? theme.colors.red 
        : $winner === 'Player 2' 
        ? theme.colors.yellow 
        : '#5C2DD5'
      : '#5C2DD5'
  };

@media (min-width: 768px) {
      margin-top: -30px;
    }
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
  width: 197px;
  z-index: 10;
  position: absolute;
  top:-20px;
  background-image: ${({ $gameOver, $isPlayer1Turn }) => 
    !$gameOver 
      ? `url(${$isPlayer1Turn ? '/assets/images/turn-background-red.svg' : '/assets/images/turn-background-yellow.svg'})`
      : 'none'
  };
  @media (min-width: 768px) {
      top: 0px;
    }
`;

export const CurrentPlayerText = styled.p<BoxContentProps>`
  margin: 0;
  font-weight: 700;
  font-size: 16px; /* Font size for current player */
  color: ${({ $isPlayer1Turn, theme }) =>
    $isPlayer1Turn ? theme.colors.white : theme.colors.black};
  text-transform: uppercase;
  text-align: center;
  padding-top: 20px;
`;

export const TimeLeftText = styled.p<BoxContentProps>`
  margin: 0;
  font-weight: 700;
  font-size: 56px; /* Font size for time left */
  color: ${({ $isPlayer1Turn, theme }) =>
    $isPlayer1Turn ? theme.colors.white : theme.colors.black};
  text-align: center;
`;

export const EndGameBox = styled.div`
  width: 285px;
  height: 160px;
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
  top: -20px;
  padding: 10px 0;
  @media (min-width: 768px) {
      top: 0;
    }
`;

// Styled component for winner text
export const WinnerText = styled.p`
  margin: 1px 0;
  font-weight: 700;
  font-size: 16px; /* Font size for Player 1 or Player 2 */
  text-align: center;
  text-transform: uppercase;
`;

// Styled component for status text
export const StatusText = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 56px; /* Font size for Wins or Tied */
  text-align: center;
  text-transform: uppercase;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 20px;
  width: 130px;
  height: 39px;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
`;
