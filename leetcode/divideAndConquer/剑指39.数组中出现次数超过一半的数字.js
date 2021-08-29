/**
* @param {number[]} nums
* @return {number}
*/
// 方法一：分治
var majorityElement = function(nums) {
    return findMajorElement(nums, 0, nums.length - 1)
    function findMajorElement (arr, low, high) {
        // base
        if (low === high) {
            return arr[low]
        }
        // divide
        let mid = low + Math.floor((high - low) >> 1)
        let leftMajorNum = findMajorElement(arr, low, mid)
        let rightMajorNum = findMajorElement(arr, mid + 1, high)
        // conquer
        let leftMajorNumCount = countNum(arr, low, high, leftMajorNum)
        let rightMajorNumCount = countNum(arr, low, high, rightMajorNum)
        return leftMajorNumCount > rightMajorNumCount ? leftMajorNum : rightMajorNum
    }
    function countNum(arr, low, high, target) {
        let count = 0
        for (let i = low; i <= high; i++) {
            if (arr[i] === target) count++
        }
        return count
    }
};

// 方法二：摩根投票
var majorityElement2 = function(nums) {
    let major = nums[0]
    var count = 1;
    for (var i = 1; i < nums.length; i++) {
        if (count === 0) {
            major = nums[i];
            count = 1;
        } else {
            if (nums[i] === major) count++;
            else count--;
        }
    }
    return major;
}