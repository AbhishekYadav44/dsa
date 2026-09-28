/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length==1){
        return s;
    }
    let i = 0;
    let j = 0;
    let maxlen = 0;
    let ans = ""
    while(j<s.length){
       let substr = s.substring(i,j+1);
       
       if(isPalindrome(substr)){
            if(substr.length > maxlen){
                maxlen = substr.length;
                ans=  substr;
            }
        j++;
       }else{
        if(j == s.length-1){
            i++;
            j = i+1;
        }else{
            j++;
        }
        
       }
    }
    return ans

};

var isPalindrome = function(s){
    let i = 0; 
    let j = s.length-1;
    while(i<j){
        if(s[i]!==s[j])return false;
        i++;
        j--;
    }
    return true;
}