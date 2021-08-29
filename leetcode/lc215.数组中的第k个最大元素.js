/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let findKthLargest = function (nums, k) {
    let len = nums.length;
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let p = partition(nums, l, r);
        //p是索引，所以要和k-1比
        if (p === k - 1) return nums[p];
        else if (p > k - 1) {
            r = p - 1;
        }
        else l = p + 1;
    }
}
function partition(nums, begin, end) {
    let l = begin;
    let r = end;
    let temp = nums[begin];
    while (l < r) {
        while (l < r && nums[r] <= temp) r--;
        while (l < r && nums[l] >= temp) l++;
        if (l < r) {
            let t = nums[r];
            nums[r] = nums[l];
            nums[l] = t;
        }
    }
    //此时指针指向同一个数，该数与temp交换
    nums[begin] = nums[l];
    nums[l] = temp;
    return r;
}