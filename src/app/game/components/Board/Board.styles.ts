import styled, { keyframes } from 'styled-components';

const dropAnimationSmall = keyframes`
  0% {
    transform: translateY(calc(var(--drop-distance, 0) * -1.2));
  }
  60% {
    transform: translateY(10%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  } 
`;

const dropAnimationLarge = keyframes`
  0% {
    transform: translateY(calc(var(--drop-distance, 0) * -2.2)); /* Adjusted multiplier for larger screens */
  }
  60% {
    transform: translateY(10%);
  }
  80% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  } 
`;

export const BoardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 335px;
  height: 310px;

  @media (min-width: 768px) {
    width: 632px;
    height: 584px;
    margin: 0;
  }

  .board-row {
    display: flex;
  }

  .board-cell {
    width: 44px;
    aspect-ratio: 1 / 1.06;
    margin: 0 1.25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: transparent;

    &.dropping {
      animation: ${dropAnimationSmall} 0.7s ease-out forwards;

      @media (min-width: 768px) {
        animation: ${dropAnimationLarge} 0.7s ease-out forwards;
      }
    }

    @media (min-width: 768px) {
      width: 88px;
      aspect-ratio: 1 / 1;
      margin: 0;
    }
  }

  .board-cell .winning-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 6px solid white;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: transparent;
    z-index: 1;
    pointer-events: none;

    @media (min-width: 768px) {
      border: 6px solid white;
      width: 20px;
      height: 20px;
    }
  }

  .black-board {
    position: absolute;
    top: 10px;
    z-index: 1;
  }

  .white-board {
    position: absolute;
    top: 10px;
    z-index: 3;
    pointer-events: none;
  }

  .game-grid {
    position: relative;
    position: absolute;

    z-index: 2;
    @media (min-width: 768px) {
      top: 16px;
    }
  }

  .marker-container {
    @media (min-width: 1200px) {
    position: absolute;
    top: -25px; /* Position above the board */
    height: 40px;
    width: auto;
    pointer-events: none;
    z-index: 5;
    }
  }


  .marker {
 

    @media (min-width: 1200px) {
      pointer-events: none;
      position: absolute;
      transition: left 0.2s ease-in-out;
    }
  }

`;
