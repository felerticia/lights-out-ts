import "./Cell.css";

type CellProps = {
  rowIndex: number;
  colIndex: number;
  status: boolean;
  toggle: (row: number, col: number) => void;
};

const Cell = ({ rowIndex, colIndex, status, toggle }: CellProps) => {
  const handleClick = () => toggle(rowIndex, colIndex);

  return (
    <button
      onClick={handleClick}
      key={`${rowIndex}-${colIndex}`}
      className={status ? "on" : "off"}
    ></button>
  );
};

export default Cell;
