export function numIslands(grid: string[][]): number {
  if (!grid || grid.length == 0) {
    return 0;
  }
  const islands = [];
  const gridCopy = grid.slice();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "1") {
        const island = findIsland(gridCopy, i, j, [[i, j]]);
        islands.push(island);
      }
    }
  }
  return islands.length;
}

function findIsland(
  grid: string[][],
  i: number,
  j: number,
  island: number[][]
) {
  grid[i][j] = "0";
  const neibours = [
    [i, j + 1],
    [i, j - 1],
    [i + 1, j],
    [i - 1, j],
  ];
  for (let coords of neibours) {
    try {
      if (grid[coords[0]][coords[1]] == "1") {
        island.push([coords[0], coords[1]]);
        findIsland(grid, coords[0], coords[1], island);
      }
    } catch {
      console.log("out of bounds");
    }
  }
  return island;
}
