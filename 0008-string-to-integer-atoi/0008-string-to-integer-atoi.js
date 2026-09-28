/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let i = 0;

      while (i < s.length && s[i] === ' ') {
        i++;
    }
    let sign = 1;
    if (i < s.length && (s[i] == '+' || s[i] == '-')) {

        sign = (s[i] == '-') ? -1 : 1;
        i++;
    }
    return helper(s, i, 0, sign)
};

let helper = (s, i, num, sign) => {
    let INT_MIN_VAL = -2147483648
    let INT_MAX_VAL = 2147483647
  
    if (i >= s.length || !/[0-9]/.test(s[i])) {
        return (sign * num);
    }
    num = num * 10 + (s[i] - '0');
    if (sign * num <= INT_MIN_VAL) return INT_MIN_VAL
    if (sign * num >= INT_MAX_VAL) return INT_MAX_VAL
    return helper(s, i + 1, num, sign)
}