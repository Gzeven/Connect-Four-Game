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

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  width: 100vw; 
  background-color: ${({ theme }) => theme.colors.darkPurple}; 
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  padding-inline: 1.25rem;  
  
  @media (min-width: 768px) {
    margin: 0 auto;
    height: 33.5625rem;
    width: 30rem;
    border: 3px solid ${({ theme }) => theme.colors.black};
    box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
   border-radius: 2.5rem;
   padding-inline: 1.875rem;
}
`;


export const Logo = styled.div`
  margin-bottom: 5rem; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ButtonProps {
  $bgColor: 'yellow' | 'red' | 'white';
  $hoverColor: 'darkPurple';
  $textColor?: string;
}


export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.375rem;
`

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-inline: 1.25rem;
  font-weight: 700;
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor]};
  color: ${({ theme, $textColor }) => $textColor ? theme.colors[$textColor] : theme.colors.black};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 1.25rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.6s ease;
  height: 4.5rem;

  @media(hover: hover) and (pointer: fine) {
    &:hover {
    border-color: ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
    box-shadow: 0px 10px 0px ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
  }
  }


  span {
    flex: 1; 
    text-align: left; 
  }
`;

export const DifficultyOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); 
  z-index: 99;
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

export const DifficultyModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 2.5rem);
  max-width: 28rem; 
  padding: 2.5rem 1.25rem;
  background: ${({ theme }) => theme.colors.darkPurple};
  background: ${({ theme }) => theme.colors.purple};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  z-index: 100;
  text-align: center;
  opacity: 0;
  animation: ${popupAnimation} 0.4s ease forwards; 

  p {
    font-weight: bold;
    margin-bottom: 0.625rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
  }
`;


export const DifficultyButton = styled.button<{ $bgColor: string; $hoverColor: string }>`
  width: 100%; 
  height: 4.5rem; 
  padding: 0.625rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor]}; 
  color: ${({ theme }) => theme.colors.black};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: all 0.6s ease;

  @media(hover: hover) and (pointer: fine) {
    &:hover {
    border-color: ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
    box-shadow: 0px 10px 0px ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
  }
  }

`;

export const CancelButton = styled.button<{ $bgColor: string; $hoverColor: string }>`
  width: 50%; 
  height: 2.5rem; 
  padding: 0.625rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center; 
  border-radius: 1.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor]}; 
  color: ${({ theme }) => theme.colors.black};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: all 0.6s ease;

  @media(hover: hover) and (pointer: fine) {
    &:hover {
    border-color: ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
    box-shadow: 0px 10px 0px ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
  }
  }


`;