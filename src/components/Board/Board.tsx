import { useState } from "react";
import { createGrid } from "../../helpers/helper";
import "./Board.css";
import Cell from "../Cell/Cell";

const size = 5;

const Board = () => {
  const [board, setBoard] = useState(createGrid(size));

  const toggle = (row: number, col: number) => {
    const opposite = (x: number) => (x === 0 ? 1 : 0);

    const copy = [...board.map((r) => [...r])];

    copy[row][col] = opposite(copy[row][col]);
    if (row < size - 1) copy[row + 1][col] = opposite(copy[row + 1][col]);
    if (row > 0) copy[row - 1][col] = opposite(copy[row - 1][col]);
    if (col < size - 1) copy[row][col + 1] = opposite(copy[row][col + 1]);
    if (col > 0) copy[row][col - 1] = opposite(copy[row][col - 1]);

    setBoard(copy);
  };

  return (
    <div className="Board">
      {board.map((row, rowIndex) => (
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
      ))}
    </div>
  );
};

export default Board;
