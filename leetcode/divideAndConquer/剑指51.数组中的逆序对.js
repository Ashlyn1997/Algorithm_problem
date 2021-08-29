/**
* @param {number[]} nums
* @return {number}
*/
var reversePairs = function(nums) {
    let sum = 0
    mergeSort(nums)
    return sum
    function mergeSort (nums) {
        if (nums.length <=1 ) return nums
        const length = nums.length
        const mid = parseInt(length / 2)
        let left = mergeSort(nums.slice(0,mid))
        let right = mergeSort(nums.slice(mid,length))
        return merge(left,right)
    }
    function merge(left, right) {
        let res = []
        let leftLen = left.length
        let rightLen = right.length
        let len = leftLen + rightLen
        for (let index = 0, i = 0, j = 0; index < len; index++) {
            if (i >= leftLen) res[index] = right[j++] //左数组已添加到res中
            else if (j >= rightLen) res[index] = left[i++]
            else if (left[i] <= right[j]) res[index] = left[i++]
            else {
                res[index] = right[j++]
                sum += leftLen - i
            }
        }
        return res
    }
};