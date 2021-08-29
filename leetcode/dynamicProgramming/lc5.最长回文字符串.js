/**
 * @param {string} s
 * @return {string}
 */
// 方法一：暴力
var longestPalindrome = function(s) {
    
};
function isPalindrome (str) {
    let i = 0, j = str.length - 1
    while (i <= j) {
        if (str.chat(i) === str.chat(j)) {
            i--
            j++
        } else {
            return false
        }
    }
    return true
}