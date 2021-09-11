/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length
    const n = grid[0].length
    let max = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(grid[i][j] == 1){
                let size = dfs(grid, i, j)
                max = Math.max(max, size)
            }
        }
    }
    return max
};
// 对每个岛屿做 DFS 遍历，求出每个岛屿的面积就可以了。
// 求岛屿面积的方法也很简单，代码如下，每遍历到一个格子，就把面积加一
function dfs(grid, r, c) {
    let size = 0
    // 判断base case
    if (!inArea(grid, r, c)) return size
    // 如果这个格子不是岛屿，直接返回
    if (grid[r][c] != 1) return size
    // 将格子标记为已遍历过
    grid[r][c] = 2
    // 访问上、下、左、右四个相邻节点
    return 1 + dfs(grid, r - 1, c) + dfs(grid, r + 1, c) + dfs(grid, r, c - 1) + dfs(grid, r, c + 1)
}
// 判断坐标(r, c)是否在网格中
function inArea(grid, r, c) {
    return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length
}