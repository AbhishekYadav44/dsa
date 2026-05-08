/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let ans = "1";

    for (let j = 2; j <= n; j++) {
    let count = 1;
        let temp = ""
        for (let i = 0; i < ans.length; i++) {
            
            if (ans[i + 1] == ans[i]) {
                count++;
            } else {
                temp = temp + count + ans[i];
                count = 1
            }
            
        }
        ans = temp;
    }
    return ans;

};