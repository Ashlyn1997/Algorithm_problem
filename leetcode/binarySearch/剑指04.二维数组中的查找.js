/**
* @param {number[][]} matrix
* @param {number} target
* @return {boolean}
*/
var findNumberIn2DArray = function(matrix, target) {
    //从左下角开始搜索
    let i = matrix.length - 1
    let j = 0
    while (i >= 0 && j < matrix[0].length) {
        if (matrix[i][j] > target) i--
        else if (matrix[i][j] < target) j++
        else return true
    }
};