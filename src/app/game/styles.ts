import styled from 'styled-components';


export const GameContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100%;
  min-height: 100vh; 
`;

export const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

