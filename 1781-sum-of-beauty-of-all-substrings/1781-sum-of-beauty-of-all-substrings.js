/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let ans = 0
    for(let i=0; i<s.length; i++){
       let freq = new Array(26).fill(0)
        for(let j  = i; j<s.length; j++){
            
           
           let idx = s.charCodeAt(j) - 97;
           freq[idx]++;
            let max = 0;
            let min = Infinity;
           for(let k=0; k<26;k++){
            if(freq[k]>0){
              max = Math.max(max,freq[k]);
              min = Math.min(min,freq[k])
            }
           }
           ans += max-min

         
        }
    }
    return ans;

};

