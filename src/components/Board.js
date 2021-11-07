import React from 'react';
import { useSelector } from 'react-redux';
import { Square } from 'components/Square';

export const Board = () => {
  // TODO - use the 'squares' state from the game reducer
  // Store innuto useSelector tar hela store och seden väljer vi vad vi skall använda av store i det som kommer efter där.
  const squares = useSelector((store) => store.game.squares);

  return (
    <div className='board'>
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  );
};
