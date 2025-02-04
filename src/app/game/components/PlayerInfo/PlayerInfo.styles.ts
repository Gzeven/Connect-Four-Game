import styled from 'styled-components';

export const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 2rem;
  padding-bottom: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 40.625rem;
    margin: 0 auto;
    padding-bottom: 1rem;
  }

  @media (min-width: 1200px) {
      display: flex;
  justify-content: space-between; 
  position: absolute; 
  top: 26.25rem; 
  transform: translateY(-50%); 
  width: 68.75rem;
  }
`;


export const PlayerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 8.875rem;
  height: 5.0625rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 1.25rem;

  p {
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
  }

  span {
    font-weight: 700;
    font-size: 2rem;
    line-height: 1;
  }

  .player-image {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &.player1 .player-image {
    left: -28px;
  }

  &.player2 .player-image {
    right: -28px;
  }

  @media (min-width: 768px) {
    width: 17rem;
    gap: 3rem;
    height: 6.25rem;
    flex-direction: row; 
  
    p {
    font-size: 1.25rem;
  }

  span {
    font-size: 3.5rem;
  }

    &.player2 p {
      order: 2; 
    }

    &.player2 span {
      order: 1; 
    }
  }

    @media (min-width: 1200px) {
    width: 8.8125rem;
    height: 10rem;
    flex-direction: column; 
    gap: 0.5rem;
    padding-top: 2rem;

  &.player1 .player-image {
    left: 42px;
    top: -0px;
  }

  &.player2 .player-image {
    right: 42px;
    top: 0px;
  }

    &.player2 p {
      order: 1; 
    }

    &.player2 span {
      order: 2; 
    }
  }
`;





