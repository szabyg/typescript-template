export type Board = number[][];

export function getWinner(row: number[]) {
  const same = row.filter((x: number) => x === row[0] && x !== 0);
  return same.length === 3 && row[0];
}

function getRow<T>(row: number) {
  return (data: T[]): T => data[row];
}

function getColumn<T = number>(column: number) {
  return (data: T[][]): T[] => [
    data[0][column],
    data[1][column],
    data[2][column],
  ];
}

function diagonalGetter1(board: Board) {
  return [board[0][0], board[1][1], board[2][2]];
}

function diagonalGetter2(board: Board) {
  return [board[0][2], board[1][1], board[2][0]];
}

function checkRows(board: Board) {
  const rowGetter0 = getRow(0);
  const rowGetter1 = getRow(1);
  const rowGetter2 = getRow(2);
  const row0: number[] = rowGetter0(board) as number[];
  const row1: number[] = rowGetter1(board) as number[];
  const row2: number[] = rowGetter2(board) as number[];

  return getWinner(row0) || getWinner(row1) || getWinner(row2);
}

function checkColumns(board: Board) {
  const columnGetter0 = getColumn(0);
  const columnGetter1 = getColumn(1);
  const columnGetter2 = getColumn(2);
  const column0: number[] = columnGetter0(board);
  const column1: number[] = columnGetter1(board);
  const column2: number[] = columnGetter2(board);
  return getWinner(column0) || getWinner(column1) || getWinner(column2);
}

export function isGameOver(board: Board): number {
  const diagonal1: number[] = diagonalGetter1(board);
  const diagonal2: number[] = diagonalGetter2(board);

  const winner =
    checkRows(board) ||
    checkColumns(board) ||
    getWinner(diagonal1) ||
    getWinner(diagonal2);

  return winner || 0;
}

export function transpose(board: number[][]): number[][] {
  let newBoard: number[][] = [];
  board.forEach((row) => {
    row.forEach((columnValue, indexColumn) => {
      newBoard.push([]);
      newBoard[indexColumn].push(columnValue);
    });
  });
  return newBoard;
}
