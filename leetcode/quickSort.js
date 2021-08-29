// 标准快速排序
function quickSort (arr) {
    quick(arr, 0, arr.length - 1)
}
function quick (arr, left, right) {
    let index
    if (left < right) {
        // 划分数组
        index = partition(arr, left, right)
        if (left < index - 1) {
            quick(arr, left, index - 1)
        }
        if (right > index) {
            quick(arr, index, right)
        }
    }
}
function partition (arr, left, right) {
    // 取中间项为基准项
    let datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
        i = left,
        j = right
    while (i <= j) {
        //左指针右移
        while(arr[i] < datum) i++
        //右指针左移
        while(arr[j] > datum) j++
        //交换
        if(i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i +=1
            j -=1
        } 
    }
    return i
}