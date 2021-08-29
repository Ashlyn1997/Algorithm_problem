/**
* @param {number[]} nums
* @return {number[][]}
*/
var permuteUnique = function(nums) {
    let res = []
    let used = new Array(nums.length).fill(0)
    let arr = nums.sort((a,b) => a - b)
    backtrack([],used)
    return res
    function backtrack (path, used) {
        if (path.length === arr.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < arr.length; i++) {
            if (used[i]) {                      // 这个数使用过了，跳过。
                continue;
            }
            if (i - 1 >= 0 && nums[i - 1] == nums[i] && !used[i - 1]) { // 避免产生重复的排列
                continue;
            }
            path.push(arr[i])
            used[i] = 1
            backtrack(path, used)
            path.pop()
            used[i] = 0
        }
    }
};