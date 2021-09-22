/**
 * @param {string[]} strs
 * @return {string}
 */

// 暴力解
var longestCommonPrefix1 = function(strs) {
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
let longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) return "";
    return lCPrefixRec(strs)
}
function lCPrefixRec(arr) {
    let length = arr.length
    if (length === 1) return arr[0]
    let mid = Math.floor(length / 2)
    let left = lCPrefixRec(arr.slice(0, mid))
    let right = lCPrefixRec(arr.slice(mid, length))
    return lCPrefixTwo(left, right)
}

function lCPrefixTwo(str1, str2) {
    let j = 0
    for (; j < str1.length && j < str2.length; j++) {
        if (str1[j] != str2[j]) {
            break
        }
    }
    return str1.substring(0, j)
}
