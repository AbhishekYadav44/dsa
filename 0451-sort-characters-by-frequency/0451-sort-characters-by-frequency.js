/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {}
    let ans = "";
    for(let i =0; i<s.length;i++){
        if(!map[s[i]]) {
            map[s[i]] = 0;
        }
        map[s[i]]++;
    }

  const arr =   Object.entries(map)
  arr.sort((a,b) => b[1]-a[1])
   for(let i =0; i<arr.length; i++){
    ans += arr[i][0].repeat(arr[i][1])
   } 
  return ans;
};