/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1
    while(left <= right) {
        let m = Math.floor((left + right) / 2)
        if (nums[m] === target) return m
        else if (nums[m] < target) left = m + 1
        else right = m - 1 
    }
    return left
};