Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
/*
Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/
var numIslands = function(grid) {
    let islands = 0;
    
    const mark = (r = 0, c = 0) => {
        if (grid[r] && grid[r][c] === '1') {
            grid[r][c] = -1;
            mark(r + 1, c);
            mark(r - 1, c);
            mark(r, c + 1);
            mark(r, c - 1);
        }
    };
    
    grid.forEach((row, r) => {
        row.forEach((col, c) => {
            if (grid[r][c] === '1') {
                islands++;
                mark(r, c);
            }
        });
    });
    
    return islands;
};
