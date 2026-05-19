/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const MOD = 1000000007n;
    function pow(base,exp){
       base = BigInt(base);
       exp = BigInt(exp);
    let res = 1n;
    while(exp>0){
        if(exp%2n == 1n){
            res = (res*base)%MOD;
        }

        base = (base*base)%MOD;
        exp = exp/2n;
    }
    return res;

    }

    let evencount = Math.ceil(n/2)
    let oddcount = Math.floor(n/2);

    let evenways = pow(5,evencount);
    let oddways = pow(4,oddcount);
    return Number((evenways*oddways)%MOD);
    
};