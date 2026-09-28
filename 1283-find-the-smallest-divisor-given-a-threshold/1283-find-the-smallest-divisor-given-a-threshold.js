/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    
    let low = 1;
    let high = Math.max(...nums);
  
    
    while(low<=high){
        let mid =  Math.floor((low+high)/2);
        let currsum  = calcSum(nums,mid);
        if(currsum <= threshold){
            high = mid-1;

        }else{
            low = mid+1;
        }
    }
        return low;
   
};

var calcSum = function(nums,divisor){
    let sum = 0
    for(let i  = 0; i<nums.length; i++){
       sum += Math.ceil(nums[i]/divisor)
    }

    return sum;
}