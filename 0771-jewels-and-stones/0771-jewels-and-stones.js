/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let map = new Set();
    let count = 0;

    for(let i = 0; i<jewels.length; i++){
        map.add(jewels[i]);
    }

    for(let i =0; i<stones.length;i++){
        if(map.has(stones[i])){
           count++;
        }
    }

    return count;
};