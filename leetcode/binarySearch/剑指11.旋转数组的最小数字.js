/**
* @param {number[]} numbers
* @return {number}
*/
var minArray = function(numbers) {
    let left = 0, right = numbers.length - 1
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (numbers[mid] > numbers[right]) left = mid + 1
        else if (numbers[mid < numbers[right]]) right = mid
        else right--    
    }
    return numbers[left]
};