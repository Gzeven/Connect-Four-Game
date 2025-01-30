import styled from 'styled-components';


export const GameContainer = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  background-color: ${({ theme }) => theme.colors.purple};
  width: 100%;
  width: 100vw;
  min-height: 100vh; 
  /* overflow-y: auto; */
`;

export const TopBar = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* width: 89.33%; */
  /* padding: 51px 0; */
`;

export const Logo = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* height: 40px; */
  /* width: 40px; */
`;

export const GameContent = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* width: 100%; */
  /* margin-bottom: 40px;  */
  /* flex-grow: 1;  */
`;

