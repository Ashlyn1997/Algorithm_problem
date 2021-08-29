/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length == 0) return []
    const res = []
    const map = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }
    const dfs = (curStr, i) => {
        if( i > digits.length - 1) {
            res.push(curStr)
            return
        }
        const letters = map[digits[i]]
        for (const letter of letters) { //一个字母是一个选择，对应一个递归分支
            dfs(curStr + letter, i + 1) //选择翻译成letter，生成新字符串，i指针右移继续翻译（递归）
        }
    }
    dfs('', 0) // 递归的入口，初始字符串为''，从下标0开始翻译
    return res 
};