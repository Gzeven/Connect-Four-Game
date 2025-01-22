'use client';

import { useSearchParams } from 'next/navigation';
import GamePage from './GamePage'; // Import your GamePage component

const GameClient = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode') as 'vsCPU' | 'vsPlayer' | null;
  const difficulty = searchParams.get('difficulty') as 'easy' | 'medium' | 'hard';

  return <GamePage mode={mode} difficulty={difficulty} />;
};

export default GameClient;
