// for문을 이용해서 배열의 합 구하기 - 상향식 계산 방법
// function sumArray(arr){
//     let sum = 0;
    
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }

//     return sum;
// }

// let arr = [1,2,3,4,5];
// console.log(sumArray(arr));


// 재귀함수를 이용해서 배열의 합 구하기 - 하향식 계산 방법
function sumArray(arr){
    if(arr.length === 1) return arr[0];

    return sumArray(arr.slice(0, -1)) + arr[arr.length - 1]; // slice(0, -1(자기자신 빼고))를 매개변수로 sumArray 호출
}

let arr = [1,2,3,4,5];
console.log(sumArray(arr));