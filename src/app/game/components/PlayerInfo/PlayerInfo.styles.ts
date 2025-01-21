import styled from 'styled-components';

export const PlayerBoxInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    margin: 0;
  }

  span {
    font-weight: 700;
    font-size: 32px;
  }

  @media (min-width: 768px) {
    flex-direction: row; /* Arrange content horizontally */
    justify-content: space-between;

    p {
      font-size: 20px;
      margin: 0 8px; /* Add some spacing */
    }
    span {
      font-size: 56px;
      margin: 0 8px;
    }
  }
`;

export const PlayerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 142px;
  height: 81px;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  background-color: white;
  text-align: center;

  p {
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    margin: 0;
  }

  span {
    font-weight: 700;
    font-size: 32px;
  }

  .player-image {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &.player1 .player-image {
    left: -32px;
  }

  &.player2 .player-image {
    right: -32px;
  }

  @media (min-width: 768px) {
    width: 272px;
    height: 100px;
    flex-direction: row; /* Arrange content horizontally */
    justify-content: center;

    p {
    
    font-size: 20px;
   
  }

  span {
    font-size: 56px;
  }

    &.player1 ${PlayerBoxInfoContainer} {
      flex-direction: row; /* Name first, then score */
      gap: 3rem;
    
    }

    &.player2 ${PlayerBoxInfoContainer} {
      flex-direction: row;
      gap: 3rem;
   
    }

    &.player2 p {
      order: 2; /* Place name after score */
    }

    &.player2 span {
      order: 1; /* Place score before name */
    }
  }

    @media (min-width: 1200px) {
    width: 141px;
    height: 160px;


    .player-image {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &.player1 .player-image {
    left: 42px;
    top: -0px;
  }

  &.player2 .player-image {
    right: 42px;
    top: 0px;
  }

  &.player1 ${PlayerBoxInfoContainer} {
      flex-direction: column; 
      align-items: center;
      justify-content: center;
      gap: 0rem;
    
    }

    &.player2 ${PlayerBoxInfoContainer} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0rem;
   
    }

    p {
      padding-top: 2rem;
    }

    &.player2 p {
      order: 1; 
    }

    &.player2 span {
      order: 2; 
    }
  }
`;

export const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 80.8%;
  width: 310px;

  @media (min-width: 768px) {
    width: 585px;
  }

  @media (min-width: 1200px) {
      display: flex;
  justify-content: space-between; 
  position: absolute; 
  top: 50%; 
  transform: translateY(-50%); 
  width: 1034px; 
  gap: 40px; 
  }
`;
