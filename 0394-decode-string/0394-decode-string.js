/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    let num=0;
    let str = "";

    for(let ch of s){
        if(ch >= '0' && ch<='9'){
            num = num*10 + (ch-0);
        }

        else if(ch=='['){
            stack.push(str);
            stack.push(num);
            num=0;
            str="";
        }
        else if(ch==']'){
            let rep = stack.pop();
            let prevstr = stack.pop();

            str = prevstr + str.repeat(rep);
        }else {
            str += ch;
        }
    }
    return str;
};