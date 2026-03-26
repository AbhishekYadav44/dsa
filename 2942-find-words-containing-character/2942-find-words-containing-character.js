/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let ans = [];

    for(let i= 0; i<words.length; i++){
        let currstr = words[i];

        for(let j = 0; j<currstr.length; j++){
           if(currstr[j] === x){
            ans.push(i);
            break;
           }
        }
    }
    return ans
};