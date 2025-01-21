import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 150vh;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 999; 
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
  z-index: 1000; /* Ensure it's above the overlay */
  width: 90%;
  max-width: 480px;
 
`;

export const MenuTitle = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 3.5rem;
  text-align: center;
  text-transform: uppercase;
  margin: 1.875rem 0;
`;

export const MenuButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.875rem;

  @media (min-width: 768px) {
      margin-bottom: 3.125rem;
    }
  
`;

export const MenuButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  width: 88%;
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 1.25rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  height: 4.5rem;
  cursor: pointer;

  &.continue, &.restart {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }

  &.quit {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.darkPurple};
    box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.darkPurple};
  }
`;
