/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
     s = s.split("");

    for(let i=0;i<s.length;i = i+(2*k)){
        // reverse first k elemeent;

        let mid = Math.floor(k/2);
        for(let j=0;j<mid;j++){
            let temp = s[i+j];
            s[i+j] = s[i+k-1-j];
            s[i+k-1-j] = temp;
        }
    }
    return s.join("")
};