export const createGrid = (size: number) => {
  const grid: number[][] = Array.from({ length: size }, () =>
    Array(size).fill(0)
  );

  const toggle = (x: number, y: number) => {
    const directions = [
      [0, 0], // Toggle itself
      [-1, 0], // Toggle above
      [1, 0], // Toggle below
      [0, -1], // Toggle left
      [0, 1], // Toggle right
    ];

    directions.forEach(([dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < size && ny < size) {
        grid[nx][ny] = grid[nx][ny] === 0 ? 1 : 0;
      }
    });
  };

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      //grid[i][j] = 0;
      if (Math.random() < 0.5) {
        toggle(i, j);
      }
    }
  }
  // grid[0][0] = 1;
  // grid[0][1] = 1;
  // grid[1][0] = 1;

  return grid;
};
