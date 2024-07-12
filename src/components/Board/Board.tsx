import { useState } from "react";
import { createGrid } from "../../helpers/helper";
import "./Board.css";
import Cell from "../Cell/Cell";

const size = 5;

const Board = () => {
  const [board, setBoard] = useState(createGrid(size));
  const [gameOver, setGameOver] = useState(false);

  const toggle = (row: number, col: number) => {
    const opposite = (x: number) => (x === 0 ? 1 : 0);

    const copy = [...board.map((r) => [...r])];

    copy[row][col] = opposite(copy[row][col]);
    if (row < size - 1) copy[row + 1][col] = opposite(copy[row + 1][col]);
    if (row > 0) copy[row - 1][col] = opposite(copy[row - 1][col]);
    if (col < size - 1) copy[row][col + 1] = opposite(copy[row][col + 1]);
    if (col > 0) copy[row][col - 1] = opposite(copy[row][col - 1]);

    if (copy.every((row) => row.every((c) => c === 1))) {
      setGameOver(true);
    }

    setBoard(copy);
  };

  return (
    <div className="Board">
      {gameOver ? (
        <div className="won">You won!</div>
      ) : (
        board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((_, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                rowIndex={rowIndex}
                colIndex={colIndex}
                status={!!board[rowIndex][colIndex]}
                toggle={toggle}
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Board;
