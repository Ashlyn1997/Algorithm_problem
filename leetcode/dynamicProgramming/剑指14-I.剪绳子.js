/**
 * @param {number} n
 * @return {number}
 */
// 长度为n的绳子剪掉后的最大乘积，可以从前面比n小的绳子转移而来
// 用一个dp数组记录从0到n长度的绳子剪掉后的最大乘积，也就是dp[i]表示长度为i的绳子剪成m段后的最大乘积，初始化dp[2]=1
// 剪了第一段后，剩下(i-j)长度可以剪也可以不剪，如果不剪得话长度乘积为i*(i-j)；如果剪的话长度为i*dp[i - j]
var cuttingRope = function(n) {
    let dp = new Array(n+1).fill(1)
    dp[2] = 1
    for (let i = 3; i < n + 1; i++) {
        for (let j = 2; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
        }
    }
    return dp[n]
};