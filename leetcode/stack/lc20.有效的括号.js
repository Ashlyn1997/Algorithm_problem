/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {'{': '}', '(': ')', '[': ']'}
    let stack = []
    for (const ch of s) {
        if(ch === '(' || ch === '{' || ch === '['){
            stack.push(ch)
        } else {
            let pop = stack.pop()
            if (ch !== obj[pop]) return false
        }
    }
    return stack.length > 0 ? false : true
};