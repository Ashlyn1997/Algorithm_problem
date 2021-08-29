/**
* @param {number[]} candidates
* @param {number} target
* @return {number[][]}
*/
var combinationSum = function(candidates, target) {
    let res = []
    const dfs = (start, path, sum) => {
        if (sum >= target) {
            res.push([...path])
            return
        }
        for(let i = start; i < candidates.length; i++) {
            path.push(candidates[i])
            dfs(i, path, sum + candidates[i])
            path.pop() 
        }
    }
    dfs(0, [], 0)
    return res
};