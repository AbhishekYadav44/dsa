/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let map = {};
    let maxEle = -Infinity;
    for(let i=0; i<nums.length;i++){
        maxEle = Math.max(maxEle, nums[i]);
    }

    for(let i=0; i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]] = 0;
        }
        ++map[nums[i]]
    }
    
    for(let i=1; i<=maxEle; i++){
        
        if(((i == maxEle) && ( map[maxEle] != 2)) || ((i<maxEle) && (map[i] !==1)) ){
           return false;
        }
    }
    return true;
    
};