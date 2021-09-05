/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 单调队列：用户维护区间内最大值或最小值
// 删头操作（判断队头元素是否在待求解的区间之内，如果不在，就将其删除）
// 去尾操作（保证队列的单调性，当队列有新元素待入队，需要从队尾开始，删除影响队列单调性的元素）
var maxSlidingWindow = function(nums, k) {
    const res = []
    const deque = []
    for (let j = 0, i = 1-k; j < nums.length; j++, i++) {
        if (i > 0 && deque[0] == nums[i-1]) deque.shift()
        while (deque.length != 0 && deque[deque.length - 1] < nums[j]) deque.pop()
        deque.push(nums[j])
        if (i >= 0) res.push(deque[0])
    }
    return res
};