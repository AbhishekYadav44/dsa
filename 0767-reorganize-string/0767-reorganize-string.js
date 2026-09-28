/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let map = {};

    for(let i=0; i<s.length;i++){
        if(!map[s[i]]){
            map[s[i]] = 0
        }
        map[s[i]]++;
    }

    let maxfreq = Math.max(...Object.values(map));
    let n = s.length;
    if(maxfreq>Math.ceil(n/2)){
        return "";
    }
    let res  = "";
    while(true){
        let chars = Object.keys(map);
        if(chars.length===0){
            break;
        }
        chars.sort((a,b)=> map[b]-map[a]);
       let first = chars[0];
       let second = chars[1];
       res += first;
       map[first]--;
       if(map[first] === 0){
        delete map[first]
       }

       if(second){
        res += second;
        map[second]--;
          if(map[second] === 0){
        delete map[second]
       }
       }
    };
    return res;

};