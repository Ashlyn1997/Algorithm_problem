/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0
    // 前i日的最大利润
    let dp = new Array(prices.length)
    dp[0] = 0
    let cost = prices[0]
    for (let i = 1; i < prices.length; i++) {
        dp[i] = Math.max(dp[i-1], prices[i] - cost)
        cost = Math.min(cost, prices[i])
    }
    return dp[dp.length-1]
};