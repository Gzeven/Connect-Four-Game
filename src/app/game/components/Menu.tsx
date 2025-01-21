import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.purple};;
  border: 3px solid ${({ theme }) => theme.colors.black};;
  box-shadow: 0px 10px 0px ${({ theme }) => theme.colors.black};;
  border-radius: 40px;
  padding: 20px;
  width: 90%;
  z-index: 1000; /* Ensure it appears above other content */
  
`;

const MenuTitle = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 56px;
  text-align: center;
`;

const MenuButton = styled.button`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 3px solid #000000;
  box-shadow: 0px 10px 0px #000000;
  border-radius: 20px;
  font-size: 24px;
  cursor: pointer;

  &.continue {
    background-color: white;
    color: black;
  }

  &.restart {
    background-color: white;
    color: black;
  }

  &.quit {
    background-color: pink;
    color: black;
  }
`;

interface MenuProps {
  onContinue: () => void;
  onRestart: () => void;
  onQuit: () => void;
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ onContinue, onRestart, onQuit }) => {
  return (
    <MenuContainer>
      <MenuTitle>Pause</MenuTitle>
      <MenuButton className="continue" onClick={onContinue}>Continue Game</MenuButton>
      <MenuButton className="restart" onClick={onRestart}>Restart</MenuButton>
      <MenuButton className="quit" onClick={onQuit}>Quit Game</MenuButton>
    </MenuContainer>
  );
};

export default Menu;
