/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length
    const n = grid[0].length
    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(grid[i][j] == 1){
                dfs(grid, i, j);
                count++;
            }
        }
    }
    return count
};
function dfs(grid, r, c) {
    // 判断base case
    if (!inArea(grid, r, c)) return
    // 如果这个格子不是岛屿，直接返回
    if (grid[r][c] != 1) return
    // 将格子标记为已遍历过
    grid[r][c] = 2
    // 访问上、下、左、右四个相邻节点
    dfs(grid, r - 1, c)
    dfs(grid, r + 1, c)
    dfs(grid, r, c - 1)
    dfs(grid, r, c + 1)
}
// 判断坐标(r, c)是否在网格中
function inArea(grid, r, c) {
    return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length
}