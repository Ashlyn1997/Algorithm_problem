/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
    let preNum = {}
    for (let  i = 0; i < nums.length; i++) {
        const curNum = nums[i]
        const targetNum = target - curNum
        const targetNumIndex = preNum[targetNum]
        if (targetNumIndex !== undefined) {
            return [targetNumIndex, i]
        } else {
            preNum[curNum] = i
        }
    }
};