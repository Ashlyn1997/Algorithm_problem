/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 暴力法
var minSubArrayLen = function(target, nums) {
    let min = Infinity
    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i]
        if (sum >= target) return 1
        for (let j = i+1; j < nums.length; j++) {
            sum += nums[j]
            if (sum >= target) {
                min = Math.min(min, j - i + 1)
                break
            }
        }
    }
    return min === Infinity ? 0 : minLen
};

// 滑动窗口
var minSubArrayLen2 = function(target, nums) {
    let minLen = Infinity
    let i = 0, j = 0, sum = 0
    while(j < nums.length) {
        sum += nums[j]
        while(sum >= target) {
            minLen = Math.min(minLen, j - i + 1)
            sum -= nums[i]
            i++
        }
        j++
    }
    return minLen === Infinity ? 0 : minLen
}; 