/**
* @param {number[]} nums
* @return {number[][]}
*/
var permute = function(nums) {
    let res = []
    let used = new Array(nums.length).fill(0)
    backtrack([], used)
    return res
    function backtrack (path, used) {
        if (path.length === nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            path.push(nums[i])
            used[i] = 1
            backtrack(path, used)
            path.pop()
            used[i] = 0
        }
    }
};