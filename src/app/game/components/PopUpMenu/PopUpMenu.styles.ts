import styled, { keyframes } from "styled-components";

const popupAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8); 
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1); 
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; 
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 999;
  opacity: 0;
  animation: fadeIn 0.4s ease forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.purple};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 2.5rem;
  z-index: 1000;
  width: 89.33%;
  max-width: 27.25rem;
  opacity: 0;
  animation: ${popupAnimation} 0.4s ease forwards; 
`;

export const MenuTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 3.5rem;
  text-align: center;
  text-transform: uppercase;
  padding: 1.875rem 0;

  @media (min-width: 768px) {
      padding: 3.125rem 0;
    }

`;

export const MenuButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 1.25rem;
  gap: 1.875rem;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  

  @media (min-width: 768px) {
      margin-bottom: 3.125rem;
      padding-inline: 2.5rem;
    }
  
`;

export const MenuButton = styled.button`
  width: 100%;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 1.25rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  height: 4.5rem;
  transition: all 0.6s ease;

  &.continue, &.restart {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  &.quit {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }

  @media(hover: hover) and (pointer: fine) {
    &:hover {
    border-color: ${({ theme }) => theme.colors.darkPurple};
    box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.darkPurple};
  }
  }


`;
