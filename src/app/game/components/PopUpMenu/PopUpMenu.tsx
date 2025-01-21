import React from 'react';
import { Overlay, MenuContainer, MenuTitle, MenuButtonContainer, MenuButton } from './PopUpMenu.styles';

interface MenuProps {
  onContinue: () => void;
  onRestart: () => void;
  onQuit: () => void;
}

const PopUpMenu: React.FC<MenuProps> = ({ onContinue, onRestart, onQuit }) => {
  return (
    <Overlay>
      <MenuContainer>
        <MenuTitle>Pause</MenuTitle>
        <MenuButtonContainer>
          <MenuButton className="continue" onClick={onContinue}>Continue Game</MenuButton>
          <MenuButton className="restart" onClick={onRestart}>Restart</MenuButton>
          <MenuButton className="quit" onClick={onQuit}>Quit Game</MenuButton>
        </MenuButtonContainer>
      </MenuContainer>
    </Overlay>
  );
};

export default PopUpMenu;

