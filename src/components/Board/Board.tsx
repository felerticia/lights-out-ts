import { useState } from "react";
import { createGrid } from "../../helpers/helper";
import "./Board.css";

const Board = () => {
  const [board, setBoard] = useState(createGrid(5));

  return (
    <div className="Board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((_, colIndex) => (
            <button key={`${rowIndex}-${colIndex}`}>
              {rowIndex}-{colIndex}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
