import React from 'react';

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
