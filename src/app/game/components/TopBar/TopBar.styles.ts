import styled from 'styled-components';

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 89.33%;
  width: calc(100% - 2.5rem); 
  padding: 3.125rem 0;
  max-width: 632px;
  @media (min-width: 768px) {
    width: calc(100% - 8.375rem); 
    padding: 2rem 0;  
  }
  @media (min-width: 1200px) {
    padding: 3.5rem 0; 
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 20px;
  width: 108px;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
 
`;