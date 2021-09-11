/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const m = grid.length
    const n = grid[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                return dfs(grid, i, j)
            }
        }
    }
    return 0
};
function dfs (grid, r, c) {
    // 函数因为坐标(r, c)超出网格范围返回，对应一条黄色的边
    if (!inArea(grid, r, c)) return 1
    // 函数因为当前格子是海洋格子返回，对应一条蓝色的边
    if (grid[r][c] == 0) return 1
    // 函数因为当前格子是已遍历的陆地格子返回，和周长没关系
    if (grid[r][c] != 1) return 0
    grid[r][c] = 2
    return dfs(grid, r - 1, c) + dfs(grid, r + 1, c) + dfs(grid, r, c - 1) + dfs(grid, r, c + 1)
}
// 判断坐标(r, c)是否在网格中
function inArea(grid, r, c) {
    return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length
}