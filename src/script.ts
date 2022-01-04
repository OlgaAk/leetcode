import { numIslands } from "./numIslands";

const input = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

const input2 = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "0"],
];

const input3 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(input3));
console.log(numIslands(input2));
console.log(numIslands(input));
