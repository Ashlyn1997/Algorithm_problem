/**
 * @param {number} num
 * @return {number}
 */
// dfs
var translateNum = function(num) {
    let str = num.toString()
    function dfs (str, pointer) { // 随着dfs向下，pointer右移
        if (pointer >= str.length - 1) return 1  // 指针抵达边界和超出边界都返回1
        const temp = Number(str[pointer] + str[pointer + 1])
        if (temp >= 10 && temp <= 25) {
            return dfs(str, pointer + 1) + dfs(str, pointer + 2) // 2个分支的结果相加
        } else {
            return dfs(str, pointer + 1)
        }
    }
    return dfs(str, 0)
};

// 动态规划
var translateNum2 = function(num) {
    const str = num.toString()
    const n = str.length
    const dp = new Array(n + 1)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i < n + 1; i++) {
        const temp = Number(str[i-2] + str[i - 1])
        if (temp >= 10 && temp <= 25) {
            dp[i] = dp[i-1] + dp[i-2]
        } else {
            dp[i] = dp[i-1]
        }
    }
    return dp[n]
};
