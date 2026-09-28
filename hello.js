
function revrsearr(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let temp = arr[low];
        arr[low] = arr[high];
        arr[high] = temp;
        low++;
        high--;
    }
   
     for(let i=0;i<arr.length-1;i++){
        arr[i] = arr[i] + arr[i+1]
     }
     arr.length = arr.length-1
    
     return arr
}

let arr = [1,2,3,4,5];
let res = revrsearr(arr);
console.log(res)
