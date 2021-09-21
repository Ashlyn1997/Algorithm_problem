/**
 * @param {string[]} strs
 * @return {string}
 */

// 暴力解
var longestCommonPrefix = function(strs) {
    let res = ''
    if (!strs.length) return res
    for (let j=0; j < strs[0].length; j++) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[0][j] != strs[i][j]) return res
        }
        res += strs[0][j]
    }
    return res
}

// 分治
