/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
    let m = b.length 
    let lps =  [0];
    let i=0; 
    let j = 1;
    while(j<m){
        if(b[i] == b[j]){
            lps[j] = i+1;
            i++;
            j++;
        }else{
            if(i==0){
                lps[j] = 0
                j++;
            }else{
                i = lps[i-1]
            }
        }
    }
    
  let limit = Math.ceil(b.length / a.length) + 2;

    for(let k=1; k<=limit;k++){
       let rep =  a.repeat(k);
        i = j = 0;
        while(i<rep.length){
            if(rep[i] === b[j]){
                i++;
                j++;
            }else{
                if(j==0){
                    i++
                }else{
                    j = lps[j-1];
                }
            }
            if(j==m){
                return k
                break;
            }
        }
    }
    return -1;

};