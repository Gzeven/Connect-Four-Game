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
    transform: translateY(calc(var(--drop-distance, 0) * -2.2)); 
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
  width: 335px;
  height: 310px;

  @media (min-width: 768px) {
    width: 632px;
    height: 584px;
  }

  .board-row {
    display: flex;
    justify-content: center;
  }

  .board-cell {
    width: 46.6px;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    position: relative;
    background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

    &.dropping {
      animation: ${dropAnimationSmall} 0.7s ease-out forwards;

      @media (min-width: 768px) {
        animation: ${dropAnimationLarge} 0.7s ease-out forwards;
      }
    }

    @media (min-width: 768px) {   
      width: 88px;
    }
  }

  .board-cell .winning-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 6px solid white;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    z-index: 1;
    pointer-events: none;

    @media (min-width: 768px) {
      border: 6px solid white;
      width: 36px;
      height: 36px;
    }
  }

  .black-board {
    position: absolute;
    top: 10px;
    z-index: 1;
    @media (min-width: 768px) {
   
  top: 18px;

  }
  }

  .white-board {
    position: absolute;
    top: 10px;
    z-index: 3;
    pointer-events: none;
    @media (min-width: 768px) {
   
  top: 18px;

  }
  }

  .game-grid {
    z-index: 2;
  }

  .marker-container {
    @media (min-width: 1200px) {
      width: 100px;
      height: 40px;
    position: absolute;
    top: -20px; 
    z-index: 5;
    left: 50%;
    }
  }


  .marker {
    @media (min-width: 1200px) {
      position: absolute;
      transition: left 0.2s ease-in-out;
      height: 100%; 
    }
  }

`;
