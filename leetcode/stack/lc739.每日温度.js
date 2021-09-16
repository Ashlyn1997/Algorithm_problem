/**
* @param {number[]} temperatures
* @return {number[]}
*/
var dailyTemperatures = function(temperatures) {
    let stack = []
    let cur = 0
    let res = new Array(temperatures.length).fill(0)
    while (cur < temperatures.length) {
        while (stack.length != 0 && temperatures[cur] > temperatures[stack[stack.length - 1]]) {
            let left = stack.pop()
            let day = cur - left
            res[left] = day
        }
        stack.push(cur)
        cur++
    }
    return res
};