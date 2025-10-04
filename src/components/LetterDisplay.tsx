import React from 'react';

function getRandomSpeed() {
  // [0.8, 1.5) - lower = bigger drift
  return 0.8 + Math.random() * 0.7;
}

interface LetterDisplayProps {
  word: string;
  className?: string; // e.g., "title-alt-1"
}

export function LetterDisplay({ word, className = ''}: LetterDisplayProps) {
  // Split into letters (for other words if needed)
  return (
    <>
      {word.split("").map((char, i) => (
        <span key={i} className={`letter inline-block ${className}`} data-speed={(Math.random() * 1.5).toFixed(2)}>
          {char}
        </span>
      ))}
    </>
  );
}



