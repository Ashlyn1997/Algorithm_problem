/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 若 k < i ，代表第 k + 1 小的数字在 左子数组 中，则递归左子数组；
// 若 k > i ，代表第 k + 1 小的数字在 右子数组 中，则递归右子数组；
// 若 k = i ，代表此时 arr[k] 即为第 k + 1 小的数字，则直接返回数组前 k 个数字即可；
var getLeastNumbers = function(arr, k) {
    if (k >= arr.length) return arr
    return quickSort(arr, k, 0, arr.length - 1)
};

function quickSort (arr, k, left, right) {
    // 子长度为1时终止递归
    // if (l >= r) return
    let i = left, j = right
    // 以arr[left]作为基准数
    while (i < j) {
        while (i < j && arr[j] >= arr[left]) j--
        while (i < j && arr[i] <= arr[left]) i++
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[left], arr[i]] = [arr[i], arr[left]]
    if (i > k) return quickSort(arr, k, left, i-1)
    if (i < k) return quickSort(arr, k, i+1, right)
    return arr.slice(0, k)
}