/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let ans = 0
    for(let i=0; i<s.length; i++){
        let map = {};
        for(let j  = i; j<s.length; j++){
            
            let ch = s[j];
            if(!map[ch])map[ch] = 0;
            map[ch]++;
            let max = 0;
            let min = Infinity
            for(let key in map){
                let val = map[key];
                 max = Math.max(max,val);
                min  = Math.min(min,val)
            }
            ans += max-min;

         
        }
    }
    return ans;

};

