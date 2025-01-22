import styled from 'styled-components';

export const RulesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.purple}; 
  padding: 0 1.25rem; 
  width: 100%;
  @media (min-width: 760px) {
   
  }
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
  margin: 0;

`;

export const SectionTitle = styled.h2`
margin: 0;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.purple};
  margin: 2rem 0 1rem;
  text-transform:uppercase;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

export const Rule = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 17px; 
  margin-bottom: 0.625rem; 
`;

export const RuleNumber = styled.span`
  font-weight: 700;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const RuleText = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.black};
  opacity: 0.66;
`;

interface ButtonProps {
  $bgColor: 'yellow' | 'red' | 'white';
  $hoverColor: 'darkPurple';
  $textColor?: string;
}

// Check Button Styles
export const CheckButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -40px; 
  left: 50%;
  transform: translateX(-50%); 
  cursor: pointer;
  border: none;
  background-color: transparent;

 

  svg circle:first-of-type {
    fill: ${({ theme }) => theme.colors.black};
  }

  svg circle:nth-of-type(2) {
    fill: ${({ theme }) => theme.colors.black};
  }

  &:hover {
    svg circle:first-of-type,
    svg circle:nth-of-type(2) {
      fill: ${({ theme, $hoverColor }) => theme.colors[$hoverColor]};
    }
  }
`;
