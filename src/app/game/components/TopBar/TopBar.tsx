import React from 'react';
import { TopBarContainer, Logo, Button } from './TopBar.styles';
import Image from 'next/image'; // Assuming you're using next/image for the logo
import PopUpMenu from '../PopUpMenu/PopUpMenu';
import logo from '../../../../../public/assets/images/logo.svg'; // Adjust this path based on your folder structure

type TopBarProps = {
  handleMenuToggle: () => void;
  handleRestart: () => void;
  handleContinue: () => void;
  handleQuit: () => void;
  isMenuOpen: boolean;
};

const TopBar: React.FC<TopBarProps> = ({
  handleMenuToggle,
  handleRestart,
  handleContinue,
  handleQuit,
  isMenuOpen,
}) => {
  return (
    <TopBarContainer>
      <Button onClick={handleMenuToggle}>Menu</Button>

      {isMenuOpen && (
        <PopUpMenu
          onContinue={handleContinue}
          onRestart={handleRestart}
          onQuit={handleQuit}
          onClose={handleMenuToggle}
        />
      )}

      <Logo>
        <Image src={logo} alt="Game Logo" />
      </Logo>

      <Button onClick={handleRestart}>Restart</Button>
    </TopBarContainer>
  );
};

export default TopBar;