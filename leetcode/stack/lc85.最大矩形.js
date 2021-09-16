/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length == 0) return 0
    let res = 0
    let heights =  new Array(matrix[0].length + 1).fill(0) // 开辟空间多添一项0 避免原高度最后一只递增，无法有机会计算
    for (let row = 0; row < matrix.length; row++) {
        // 每一层高度会有变化，可能递增1，可能直接归零
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] == '1') heights[col] += 1
            else heights[col] = 0
        }
        // 求出每一层的heights[] 然后传给84题的函数
        res = Math.max(res, largestRectangleArea(heights))
    }
    return res
};
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