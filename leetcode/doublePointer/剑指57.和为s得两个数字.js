/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
    let i = 0, j = nums.length - 1
    let res = []
    while (i < j) {
        if (nums[i] + nums[j] == target) {
            res = [nums[i], nums[j]]
            return res
        } else if (nums[i] + nums[j] > target) {
            j--
        } else {
            i++
        }
    }
    return res
};