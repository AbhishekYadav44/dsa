/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.trim().split(/\s+/)
    let low = 0;
    let high =  arr.length-1;
    while(low<high){
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++;
        high--;
    }
    return arr.join(' ')
};