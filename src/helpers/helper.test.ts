import { createGrid } from "./helper";

describe("createSolvableLightsOut", () => {
  it("should create a grid of the given size", () => {
    const size = 5;
    const grid = createGrid(size);
    expect(grid.length).toBe(size);
    expect(grid.every((row) => row.length === size)).toBe(true);
  });

  it("should contain only 0s and 1s", () => {
    const grid = createGrid(5);
    const isValid = grid.every((row) =>
      row.every((cell) => cell === 0 || cell === 1)
    );
    expect(isValid).toBe(true);
  });

  it("should create a grid that is not all zeros", () => {
    const grid = createGrid(5);
    const allZeros = grid.every((row) => row.every((cell) => cell === 0));
    expect(allZeros).toBe(false);
  });
});
