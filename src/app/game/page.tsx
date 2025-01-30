'use client';

import { Suspense } from 'react';
import GameClient from './GameClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GameClient />
    </Suspense>
  );
}