/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let n = bloomDay.length;

    if(m*k > n) return -1
    
     let min = Math.min(...bloomDay)
     let max = Math.max(...bloomDay)

     let low = min;
     let high = max;

     while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(isPossible(bloomDay,mid , m ,k)){
            high  = mid-1; // try more smaller
        }else{
            low = mid+1;
        }
     }
     return low > -1 ? low: -1;
};

var isPossible = function(arr ,day , m , k){
    let noofB = 0;
    let count  =0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] <= day){
            count++;
            if(count == k){
                noofB++;
                count =0;
            }
        }else{
            count = 0
        }
    }

    return noofB >= m
}