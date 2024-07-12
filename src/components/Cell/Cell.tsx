import "./Cell.css";

type CellProps = {
  rowIndex: number;
  colIndex: number;
  status: boolean;
};

const Cell = ({ rowIndex, colIndex, status }: CellProps) => (
  <button
    key={`${rowIndex}-${colIndex}`}
    className={status ? "on" : "off"}
  ></button>
);

export default Cell;
