import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { updateBoard } from '../store';
import Tile from './Tile';
import { createBoard } from '../utils/createBoard';
const Board = () => {
  const board: string[] = useAppSelector(({ candyCrush: { board } }) => board);
  const boardSize: number = useAppSelector(
    ({ candyCrush: { boardSize } }) => boardSize
  );
  return (
    <>
      <div
        className="flex flex-wrap rounded-lg"
        style={{
          width: `38rem`,
        }}
      >
        {board.map((candy: string, index: number) => (
          <Tile candy={candy} key={index} candyId={index} />
        ))}
      </div>
    </>
  );
};

export default Board;