/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    if (grid == null || grid.length == 0) return 1
    let res = 0
    let index = 2 // index表示岛屿的编号，0是海洋，1是陆地，从2开始遍历
    let indexAndAreas = new Map() //岛屿编号：岛屿面积
    // 计算每个岛屿的面积，并标记是第几个岛屿
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 1) { //遍历没有访问过的岛屿格子
                let area = Area(grid, r, c, index) // 返回每个岛屿的面积，dfs
                indexAndAreas.set(index, area) // 存入岛屿编号、岛屿面积
                index++
                res = Math.max(res, area) // 记录最大的岛屿面积
            }
        }
    }
    if (res === 0) return 1 // res=0表示没有陆地，那么造一块，则返回1即可
    // 遍历海洋格子，假设这个格子填充，那么就把上下左右是陆地的格子所在的岛屿连接起来
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] == 0) { //遍历海洋格子
                let set = findNeighbour(grid, r, c) //把上下左右邻居放入set去重
                if (set.size < 1) continue // 如果海洋格子周围没有格子不必计算
                let twoIsland = 1 // 填充这个格子，初始值为1，这个变量记录合并岛屿后的面积
                set.forEach((i) => {
                    twoIsland += indexAndAreas.get(i) //该格子填充，则上下左右的陆地的都联通了，通过序号获得面积，加上面积
                })
                res = Math.max(res, twoIsland) // 比较得到最大面积
            }
        }
    }
    return res
};

// 对于海洋格子，找到上下左右
// 每个方向，都要确保有效inArea以及是陆地格子，则表示该海洋格子的陆地邻居
function findNeighbour (grid, r, c) {
    let set = new Set()
    if (inArea(grid, r-1, c) && grid[r-1][c] != 0) {
        set.add(grid[r-1][c])
    }
    if (inArea(grid, r+1, c) && grid[r+1][c] != 0) {
        set.add(grid[r+1][c])
    }
    if (inArea(grid, r, c-1) && grid[r][c-1] != 0) {
        set.add(grid[r][c-1])
    }
    if (inArea(grid, r, c+1) && grid[r][c+1] != 0) {
        set.add(grid[r][c+1])
    }
    return set
}

// dfs方法，将格子填充为index，即表示这个格子属于哪个岛的
// 计算岛屿面积，上下左右
function Area (grid, r, c, index) {
    if (!inArea(grid, r, c)) return 0
    // 不为1，表示为海洋格子或者已经遍历过了
    if (grid[r][c] != 1) return 0
    grid[r][c] = index //设置当前格子为某个岛屿编号
    return 1 + Area(grid, r - 1, c, index) + Area(grid, r + 1, c, index) + Area(grid, r, c - 1, index) + Area(grid, r, c + 1, index)
}

// 判断坐标(r, c)是否在网格中
function inArea(grid, r, c) {
    return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length
}