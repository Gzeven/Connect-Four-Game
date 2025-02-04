import styled from 'styled-components';

export const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.125rem 1.25rem;
  max-width: 39.5rem;
  margin: 0 auto;
  position: relative;

  & > img {
    position: absolute; 
    left: 50%; 
    transform: translateX(-50%); 
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 2rem 0;

  }
  @media (min-width: 1200px) {
    padding: 3.25rem 0;
  }
`;


export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 1.25rem;
  width: 6.75rem;
  height: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.6s ease;

  @media(hover: hover) and (pointer: fine) {
    &:hover { 
   background-color: ${({ theme }) => theme.colors.red};
}
  }


@media (min-width: 768px) {
  width: auto;
  padding-inline: 1.28125rem
  }

`;