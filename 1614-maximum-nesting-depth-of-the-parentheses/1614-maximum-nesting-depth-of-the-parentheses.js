/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let maxdepth = 0;

    for(let i =0; i<s.length; i++){
        if(s[i]==="("){
            stack.push(s[i]);
            maxdepth = Math.max(maxdepth,stack.length);
        }else if(s[i]===")"){
            stack.pop()
        }
    }
    return maxdepth;
};