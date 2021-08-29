// 对比39题，
// 给定的数组可能有重复的元素，先排序，使得重复的数字相邻，方便去重。
// for 枚举出选项时，加入下面判断，从而忽略掉同一层重复的选项，避免产生重复的组合。
// 比如[1,2,2,2,5]，选了第一个 2，变成 [1,2]，它的下一选项也是 2，跳过它，因为如果选它，就还是 [1,2]。
// 当前选择的数字不能和下一个选择的数字重复，给子递归传i+1，避免与当前选的i重复。
const combinationSum2 = (candidates, target) => {
    candidates.sort((a, b) => a - b) //升序排序
    let res = []
    const dfs = (start, path, sum) => {
        if(sum >= target) {
            if(sum == target) {
                res.push([...path])
            }
            return
        }
        for(let i = start; i < candidates.length; i++) {
            if(i > start && candidates[i] == candidates[i-1]) continue
            path.push(candidates[i])
            dfs(i+1, path, sum + candidates[i])
            path.pop()
        }
    }
    dfs(0, [], 0)
    return res
}