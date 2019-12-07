function cavityMap(grid) {
  grid.forEach(function (x) {
    x = parseInt(x)
  })

  for (let i = 0; i < grid.length; i++) {
    grid[i] = grid[i].split('')
  }
  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[i].length; j++) {
      if (grid[i][j - 1] < grid[i][j] && grid[i][j] > grid[i][j + 1] && grid[i][j] > grid[i + 1][j] && grid[i][j] > grid[i - 1][j]) {
        grid[i][j] = 'X'
      }
    }

    grid[i] = grid[i].join('')
  }
  grid[0] = grid[0].join('')
  console.log(grid);
  return grid
}


grid = ['1112', '1912', '1892', '1234']
cavityMap(grid)