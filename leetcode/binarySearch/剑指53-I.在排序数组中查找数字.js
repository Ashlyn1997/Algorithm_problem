/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var search = function(nums, target) {
    // 搜索右边界
    let i = 0, j = nums.length
    while (i <= j) {
        let m = Math.floor((i + j) / 2)
        if (nums[m] <= target) i = m + 1
        else j = m - 1
    }
    let right = i
    // 若数组中无target，则提前返回
    if (j >= 0 && nums[j] != target) return 0
    // 搜索左边界
    i = 0, j = nums.length - 1
    while (i <= j) {
        let m = Math.floor((i + j) / 2)
        if (nums[m] < target) i = m + 1
        else j = m - 1
    }
    let left = j
    return right - left - 1
};

// 优化：将二分查找右边界right的代码封装成函数helper，
var search2 = function(nums, target) {
    return helper(nums, target) - helper(nums, target - 1)
    // 本质上看，helper函数旨在查找数字tar在nums中的插入点，且若数组中存在值相同的元素，则插入到这些元素的右边
    // 若数组中不存在tar这个数，也会返回tar应该插入的位置
    function helper (nums, target) {
        let i = 0, j = nums.length - 1
        while (i <= j) {
            let m = Math.floor((i + j) / 2)
            if (nums[m] <= target) i = m + 1
            else j = m - 1
        }
        return i
    }
};

