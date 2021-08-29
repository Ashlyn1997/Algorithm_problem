/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一：动态规划
 var maxSubArray = function(nums) {
    let maxSum = nums[0]
    let curMaxSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        curMaxSum = Math.max(curMaxSum + nums[i], nums[i])
        maxSum = Math.max(curMaxSum, maxSum)
    }
    return maxSum
};

// 方法二：分治
// 把数组以中间位置(m)分为左(left)和右(right)两部分，left = nums.slice(0,m)，right = slice(m+1, nums.length)
// 最大子序和的位置有以下三种情况：
// 1、考虑中间元素nums[m]，跨越左右两部分，这里从中间元素开始，往左求出后缀最大，往右求出前缀最大, 保持连续性。
// 2、不考虑中间元素，最大子序列和出现在左半部分，递归求解左边部分最大子序列和
// 3、不考虑中间元素，最大子序列和出现在右半部分，递归求解右边部分最大子序列和
var maxSubArray2 = function(nums) {
    if (nums == null || nums.length == 0) return 0
    return helper(nums, 0, nums.length - 1)
    function helper (nums, l, r) {
        if (l > r) return -Infinity
        let mid = l + Math.floor((r - l) >> 1)
        // 分
        let left = helper(nums, l, mid - 1)
        let right = helper(nums, mid + 1, r)
        // left surfix maxSum start from index mid-1 to l
        let leftMaxSum = 0
        let sum = 0
        for (let i = mid - 1; i >= l; i--) {
            sum += nums[i]
            leftMaxSum = Math.max(leftMaxSum, sum)
        }
        // right prefix maxSum start from index mid+1 to r
        let rightMaxSum = 0
        sum = 0
        for (let i = mid + 1; i <= r; i++) {
            sum += nums[i]
            rightMaxSum = Math.max(sum, rightMaxSum)
        }
        // 治
        // max(left,right,crossSum)
        return Math.max(leftMaxSum + rightMaxSum + nums[mid], Math.max(left, right))
    }
};