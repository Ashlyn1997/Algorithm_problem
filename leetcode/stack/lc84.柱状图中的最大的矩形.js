/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let res = 0
    let stack = []
    // 给新数组左右两边添加0
    let _heights = [...heights]
    _heights.push(0)
    _heights.unshift(0)
    for (let i = 0; i < _heights.length; i++) {
        // 如果栈不为空并且当前元素小于栈顶元素，那么以栈顶元素为高的矩形面积可以确定
        while (stack.length > 0 && _heights[i] < _heights[stack[stack.length - 1]]) {
            // 弹出栈顶
            let cur = stack.pop()
            // 获取栈顶对应高
            let curHeight = _heights[cur]
            // 栈顶元素弹出后，新的栈顶元素就是其左侧边界
            let left = stack[stack.length-1]
            // 右侧边界是当前考察的索引
            let right = i
            // 计算矩形宽度
            let curWidth = right - left - 1
            // 计算面积
            res = Math.max(res, curWidth * curHeight)
        }
        // 当前考察索引入栈
        stack.push(i)
    }
    return res
};