'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-void text-matrix font-mono uppercase">
      <div className="glass-panel p-8 border-cyber shadow-glow-cyber max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4 animate-pulse text-cyber">System Failure</h1>
        <p className="text-sm mb-6 opacity-80">
          Critical error detected in the ledger stream. The void is unstable.
        </p>
        <div className="bg-black/50 p-4 mb-6 rounded border border-matrix/30 text-left text-xs overflow-auto max-h-32">
          <code>{error.message || 'Unknown protocol error'}</code>
        </div>
        <button
          onClick={() => reset()}
          className="px-6 py-2 border border-matrix hover:bg-matrix hover:text-void transition-all duration-300 shadow-glow-matrix"
        >
          Reboot System
        </button>
      </div>
      <div className="scanline" />
    </main>
  );
}