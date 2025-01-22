import styled from 'styled-components';
import Link from 'next/link';

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 30px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.purple};

  @media (min-width: 760px) {
    border: 3px solid ${({ theme }) => theme.colors.black};
    box-shadow: 0px 3px 0px ${({ theme }) => theme.colors.black};
    border-radius: 20px;
    width: 480px; 
    height: 530px; 
    /* padding: 65px 40px; */
    /* height: auto; */
  
  }

`;

export const Logo = styled.div`
  margin-bottom: 40px;
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
  /* gap: 30px; */
  padding: 10px 20px;
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor]};
  color: ${({ theme, $textColor }) => $textColor ? theme.colors[$textColor] : theme.colors.black};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};
  border-radius: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  width: 100%;
  height: 72px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
    box-shadow: 0px 10px 0px ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
  }

  img {
    width: 64px;
    height: 64px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none; // Ensure no link styling interferes
  width: 100%;
`;