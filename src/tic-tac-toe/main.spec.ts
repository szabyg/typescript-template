import { Board, getWinner, isGameOver } from "./main";

describe("game-over", () => {
  it("should detect a board with a horizontal line set by the same player", () => {
    const board: Board = [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(isGameOver(board)).toBe(1);
  });

  it("should detect a board with a horizontal line in the middle set by the same player", () => {
    const board: Board = [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ];
    expect(isGameOver(board)).toBe(1);
  });

  it("should detect a board with a horizontal line in the last row set by the same player", () => {
    const board: Board = [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ];
    expect(isGameOver(board)).toBe(1);
  });

  it("should detect a board with a vertical line in the first column set by the same player", () => {
    const board: Board = [
      [2, 0, 0],
      [2, 0, 0],
      [2, 0, 0],
    ];
    expect(isGameOver(board)).toBe(2);
  });

  it("should detect a board with a diagonal line set by the same player", () => {
    let board: Board = [
      [2, 0, 0],
      [0, 2, 0],
      [0, 0, 2],
    ];
    expect(isGameOver(board)).toBe(2);
    board = [
      [0, 0, 2],
      [0, 2, 0],
      [2, 0, 0],
    ];
    expect(isGameOver(board)).toBe(2);
  });
});

describe("getWinner", () => {
  it("should determine if the given row has a winner", () => {
    expect(getWinner([0, 1, 2])).toBe(false);
    expect(getWinner([1, 1, 1])).toBe(1);
    expect(getWinner([2, 2, 2])).toBe(2);
    expect(getWinner([0, 0, 0])).toBe(false);
  });
});
