import { useState } from "react";
import { createGrid } from "../../helpers/helper";
import "./Board.css";
import Cell from "../Cell/Cell";

const Board = () => {
  const [board, setBoard] = useState(createGrid(5));

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
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
