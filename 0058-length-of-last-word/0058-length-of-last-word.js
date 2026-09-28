/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   
 
  let n = s.length-1;
   let len = 0;
  while(n>=0 && s[n] === ' ') n--;  // skip white spaece
  while(n>=0 && s[n] !== ' '){  // count charecters when u hit spaces it sopes and return lst wird len
    len++;
    n--;
  }
  return len;
   
};