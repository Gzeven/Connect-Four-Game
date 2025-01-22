import styled from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  overflow-y: auto;
  /* gap: 1.25rem; */
  gap: 1.5rem;
  width: 100vw;
  
  background-color: ${({ theme }) => theme.colors.purple};
  @media (min-width: 768px) {
    max-height: 33.5625rem;
    max-width: 30rem;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.colors.black};
    box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
   border-radius: 2.5rem;
   padding: 3.75rem 0;
}
`;

export const Logo = styled.div`
  margin-bottom: 2.5rem;
`;

interface ButtonProps {
  $bgColor: 'yellow' | 'red' | 'white';
  $hoverColor: 'darkPurple';
  $textColor?: string;
}


export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 10px; */
  padding: 0.625rem 1.25rem;
  /* margin: 0 20px; */
  font-weight: 700;
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor]};
  color: ${({ theme, $textColor }) => $textColor ? theme.colors[$textColor] : theme.colors.black};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 1.25rem;
  font-size: 1.25rem;
  width: calc(100% - 2.5rem); 
  cursor: pointer;
  transition: all 0.3s ease;
  height: 4.5rem;

  &:hover {
    border-color: ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
    box-shadow: 0px 10px 0px ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
  }

  img {
    /* width: 40px;
    height: 40px; */
  }
  @media (min-width: 768px) {
    width: calc(100% - 5rem);  
}
`;

export const DifficultyOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  z-index: 99; /* Below the modal but above everything else */
`;

export const DifficultyModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 5rem);
  max-width: 480px; 
  padding: 2.5rem 1.25rem;
  background: ${({ theme }) => theme.colors.darkPurple};
  background: ${({ theme }) => theme.colors.purple};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  z-index: 100;
  text-align: center;

  p {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.white};
  }

  @media (min-width: 768px) {
    padding: 4rem;
}
`;


export const DifficultyButton = styled.button<{ $bgColor: string; $hoverColor: string }>`
  width: 100%; /* Full width */
  height: 4.5rem; /* Consistent height */
  padding: 0.625rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center; /* Center-align the text */
  border-radius: 1.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor]}; /* Dynamic background */
  color: ${({ theme }) => theme.colors.black};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    /* background-color: ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};  */
    /* color: ${({ theme }) => theme.colors.white}; */
  
    border-color: ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
    box-shadow: 0px 10px 0px ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
  }
`;

export const CancelButton = styled.button<{ $bgColor: string; $hoverColor: string }>`
  width: 50%; /* Full width */
  height: 2.5rem; /* Consistent height */
  padding: 0.625rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center; /* Center-align the text */
  border-radius: 1.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor]}; /* Dynamic background */
  color: ${({ theme }) => theme.colors.black};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    border-color: ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
    box-shadow: 0px 10px 0px ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
  }
`;