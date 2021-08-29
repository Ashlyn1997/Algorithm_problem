/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 0) dp[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] === 0) dp[0][j] = 1
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};