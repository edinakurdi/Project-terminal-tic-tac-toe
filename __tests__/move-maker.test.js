import { makeMove } from "../move-maker";

test("validateMove should return true if the move is valid", () => {
  const board = [
    ["X", "_", "X"],
    ["_", "_", "_"],
    ["O", "O", "X"],
  ];
  expect(makeMove(board, "1,2", "X")).toBe(true);
});

test("validateMove should return false if the move is invalid", () => {
  const board = [
    ["X", "_", "X"],
    ["_", "O", "_"],
    ["O", "O", "X"],
  ];
  expect(makeMove(board, "0,1", "X")).toBe(false);
  expect(makeMove(board, "1,1", "O")).toBe(false);
});
