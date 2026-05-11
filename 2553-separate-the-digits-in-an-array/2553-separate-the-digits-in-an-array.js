/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let str = nums.join("");
    let ans = [];

    for(let i=0; i<str.length; i++){
        let char = str[i];
        ans.push(+char)
    }
    return ans;
};