/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let count = 0
    // 代表矩阵中对应的格子机器人是否走过
    let arr = new Array(m).fill(0).map(item => new Array(n).fill(0))
    run(0, 0)
    return count
    function run (i, j) {
        if (i >= m || j >= n || arr[i][j] || digitSum(i) + digitSum(j) > k) return 
        arr[i][j] = 1
        if (digitSum(i) + digitSum(j) <= k) {
            count++
            run(i+1, j)
            run(i, j+1)
        }
    }
};
function digitSum (num) {
    let sum = 0
    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum 
}
