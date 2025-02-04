import styled from 'styled-components';

export const RulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: auto;
  background-color: ${({ theme }) => theme.colors.purple}; 
  padding: 4rem 1.25rem; 

`;

export const RulesBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.black};
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black}; 
  border-radius: 2.5rem;
  padding: 1.875rem 1.25rem 3.75rem;
  position: relative; 
  
  @media (min-width: 760px) {
    width: 30rem; 
    padding: 1.875rem 2.125rem 3.75rem;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  text-transform:uppercase;
  margin-bottom: -1rem;
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.purple};
  padding: 2rem 0 1rem;
  text-transform:uppercase;
`;

export const Rule = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.1875rem; 
`;

export const RuleNumber = styled.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const RuleText = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.9;
`;

interface ButtonProps {
  $bgColor: 'yellow' | 'red' | 'white';
  $hoverColor: 'darkPurple';
  $textColor?: string;
}

export const CheckButton = styled.button<ButtonProps>`
  position: absolute;
  bottom: -45px; 
  left: 50%;
  transform: translateX(-50%); 

  svg circle:nth-of-type(2) {
    transition: all 0.6s ease;
  }

  @media(hover: hover) and (pointer: fine) {
    &:hover {
    svg circle:first-of-type,
    svg circle:nth-of-type(2) {
      fill: ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
    }
  }


  }
`;
