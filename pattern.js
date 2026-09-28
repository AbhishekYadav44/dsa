// // let n = 5;

// // for (let i = 0; i < n; i++) {

// //     let row = "";

// //     for (let j = 0; j < n - i -1  ; j++) {
// //         row += " ";
// //     }
// //     for (let k = 0; k <= i; k++) {
// //         row += "*";
// //     }

// //     console.log(row)

// // }

// let n = 5;

// for (let i = 0; i < n; i++) {
//     let flag = 1;
//     let row = "";

//     for (let j = 0; j <= i; j++) {
//           row += flag;
//           if(flag == 1){
//             flag = 0;
//           }else{
//             flag = 1;
//           }
//     }
//     console.log(row)
// }


// let n = 5;

// // Top half
// for (let i = 0; i < n; i++) {
//     let row = "";

//     // spaces
//     for (let j = 0; j < i; j++) {
//         row += " ";
//     }

//     // stars
//     for (let j = 0; j < 2 * (n - i) - 1; j++) {
//         row += "*";
//     }

//     console.log(row , "->", row.length);
// }

// // Bottom half
// for (let i = 1; i < n; i++) {
//     let row = "";

//     // spaces
//     for (let j = 0; j < n - i - 1; j++) {
//         row += " ";
//     }

//     // stars
//     for (let j = 0; j < 2 * i + 1; j++) {
//         row += "*";
//     }

//     console.log(row);
// }

// let n= 4;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     let spaces = 0;
//     for (let j = 0; j < i; j++) {
//         row += " ";
// //         spaces++;
// //     }
// //     for (let k = 0; k < ((2 * n - 1) - 2 * spaces); k++) {
// //         row += "*";
// //     }
// //     console.log(row)


// // }
// // for (let i = n - 2; i >= 0; i--) {
// //     let row = "";
// //     let spaces = 0;
// //     for (let j = 0; j < i; j++) {
// //         row += " ";
// //         spaces++;
// //     }
// //     for (let k = 0; k < ((2 * n - 1) - 2 * spaces); k++) {
// //         row += "*";
// //     }
// //     console.log(row)


// // }

// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     let spaces = 0;
//     for (let j = 0; j < i; j++) {
//         row += " ";
//         spaces++;
//     }
//     let letter = "A";
//     for (let k = 0; k < (2 * n - 1) - 2* spaces; k++) {
//         let ascii = letter.charCodeAt(0);
//         row = row + String.fromCharCode(ascii  + k);
//     }
//     console.log(row)
// }



// for (let i = 1; i <= n-1; i++) { // 1,2,3
//     let row = "";
//     let spaces = 0;
//     for (let j = 0; j < n - (i + 1); j++) {
//         row += " ";
//         spaces++;
//     }
//     let letter = "A";
//     for (let k = 0; k < (2 * n - 1) - 2* spaces; k++) {
//        let ascii = letter.charCodeAt(0);
//         row = row + String.fromCharCode(ascii  + k);
//     }
//     console.log(row)
// }



// let n = 5;

// for (let i = 0; i < n; i++) {
//     let row = "";
//     let spaces = 0;
//     for (let j = 0; j < n - (i + 1); j++) {
//         row += " ";
//         spaces++;
//     }

//     for (let k = 0; k < (2 * n - 1) - 2 * spaces; k++) {
//         row += k + 1;
//     }
//     console.log(row)
// }



// for (let i = 1; i <= n - 1; i++) { // 1,2,3
//     let row = "";
//     let spaces = 0;
//     for (let j = 0; j < i; j++) {
//         row += " ";
//         spaces++;
//     }    

//     for (let k = 0; k < (2 * n - 1) - 2 * spaces; k++) {
//         row += k + 1;
//     }
//     console.log(row)
// }

// let n = 4;
// for(let i=0;i<n;i++){
//     let row = "";
//     let letter  = 'A';

//     for(let j=0;j<=i;j++){
//         let ascii = letter.charCodeAt(0);
//         row += String.fromCharCode(ascii + j);
//     }
//     console.log(row)
// }

// upper half
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     let spaces = 0;
//     for (let j = 1; j <= n - i; j++) {
//         row += " ";
//         spaces++;
//     }
//     for (let j = 1; j <= (2 * n - 1) - 2 * spaces; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// below hald

// // for (let i = 1; i < n; i++) {
// //     let row = "";
// //     let spaces = 0;
// //     for (let j = 1; j <= i; j++) {
// //         row += " ";
// //         spaces++;
// //     }
// //     for (let j = 1; j <= (2 * n - 1) - 2 * spaces; j++) {
// //         row += "*";
// //     }
// //     console.log(row)
// // }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let stars = 0;
//     let row = ""
//     for (let j = 1; j <= i; j++) {
//         row += "*"
//         stars++;
//     }
//     for (let j = 1; j <= (2 * n - 1) - 2 * stars; j++) {
//         row += " ";
//     }
//     for (let j = 1; j <= i; j++) {
//         if(i==n && j == n)continue;
//         row += "*";
//     }
//     console.log(row)
// }

// for (let i = 1; i < n; i++) {
//     let row = "";
//     let stars = 0;
//     for (let j = 1; j <= n - i; j++) {
//         row += "*";
//         stars++;
//     }

//     for (let j = 1; j <= (2 * n - 1) - 2 * stars; j++) {
//         row += " ";
//     }
//     for (let j = 1; j <= n - i; j++) {
//         row += "*";

//     }
//     console.log(row)
// }


let 