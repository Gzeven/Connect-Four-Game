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
  /* margin: 20px 0; */
  width: 330px;
  height: 310px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 632px;
    height: 584px;
    /* margin: 0; */
  }

  .board-row {
    display: flex;
    justify-content: center;
  }

  .board-cell {
    width: 46px;
    /* height: 47px; */
    aspect-ratio: 1 / 1;
    /* margin: 0 1.25px; */
    cursor: pointer;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    position: relative;
    /* background-color: transparent; */
    /* margin: 0 auto; */
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
      /* aspect-ratio: 1 / 1; */
      /* margin: 0; */
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
    /* display: none; */
    position: absolute;
    top: 12px;
    z-index: 1;
    @media (min-width: 768px) {
   
  top: 20px;

  }
  }

  .white-board {
    /* display: none; */
    position: absolute;
    top: 12px;
    z-index: 3;
    pointer-events: none;
    @media (min-width: 768px) {
   
  top: 20px;

  }
  }

  .game-grid {
    /* position: relative; */
    /* position: absolute; */

    z-index: 2;
    @media (min-width: 768px) {
   
  

    }
  }

  .marker-container {
    @media (min-width: 1200px) {
    /* position: absolute; */
    /* top: -25px;  */
    /* height: 40px; */
    /* width: auto; */
    /* pointer-events: none; */
    /* z-index: 5; */
    }
  }


  .marker {
 

    @media (min-width: 1200px) {
      /* pointer-events: none; */
      /* position: absolute; */
      /* transition: left 0.2s ease-in-out; */
    }
  }

`;
