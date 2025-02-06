'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MenuWrapper, MenuContainer, Logo,ButtonContainer, Button,DifficultyOverlay, DifficultyModal, DifficultyButton, CancelButton } from './styles';
import playerVsPlayerIcon from '../../../public/assets/images/player-vs-player.svg';
import playerVsCpuIcon from '../../../public/assets/images/player-vs-cpu.svg';
import logo from '../../../public/assets/images/logo.svg';

export default function MainMenu() {
  const router = useRouter();
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);

  // Function to handle navigation to the game with difficulty
  const handlePlayVsCpu = (difficulty: 'easy' | 'medium' | 'hard') => {
    // Hide the modal
    setShowDifficultyModal(false);
    // Navigate to game page with selected difficulty
    router.push(`/game?mode=vsCPU&difficulty=${difficulty}`);
  };

  return (
    <MenuWrapper>
    <MenuContainer>
    
      <Logo>
        <Image src={logo} alt="Connect Four Logo" priority />
      </Logo>
      <ButtonContainer>
      <Button
        $bgColor="red"
        $hoverColor="darkPurple"
        $textColor="white"
        onClick={() => setShowDifficultyModal(true)} // Show the difficulty modal instead of navigating
      >
        <span>PLAY VS CPU</span>
        <Image src={playerVsCpuIcon} alt="Player vs CPU Icon" />
      </Button>

      <Button $bgColor="yellow" $hoverColor="darkPurple" onClick={() => router.push('/game?mode=vsPlayer')}>
        <span>PLAY VS PLAYER</span>
        <Image src={playerVsPlayerIcon} alt="Player vs Player Icon" />
      </Button>

      <Button $bgColor="white" $hoverColor="darkPurple" onClick={() => router.push('/rules')}>
        <span>GAME RULES</span>
      </Button>
      </ButtonContainer>
   
{showDifficultyModal && (
        <>
          <DifficultyOverlay onClick={() => setShowDifficultyModal(false)} />
          <DifficultyModal>
            <p>Select CPU Difficulty</p>
            <DifficultyButton $bgColor="white" $hoverColor="darkPurple" onClick={() => handlePlayVsCpu('easy')}>
              Easy
            </DifficultyButton>
            <DifficultyButton $bgColor="yellow" $hoverColor="darkPurple" onClick={() => handlePlayVsCpu('medium')}>
              Medium
            </DifficultyButton>
            <DifficultyButton $bgColor="red" $hoverColor="darkPurple" onClick={() => handlePlayVsCpu('hard')}>
              Hard
            </DifficultyButton>
            <CancelButton $bgColor="white" $hoverColor="darkPurple" onClick={() => setShowDifficultyModal(false)}>
              Cancel
            </CancelButton>
          </DifficultyModal>
        </>
      )}
     
    </MenuContainer>
    </MenuWrapper>
  );
}
