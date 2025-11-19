// for문을 이용해서 팩토리얼 구하기 - 상향식 계산 방법
// function factorial(number){
//     let sum = 1;

//     for(let i = 1; i <= number; i++){
//         sum *= i;
//     }
//     return sum;
// }

// console.log(factorial(5));

// 재귀함수를 이용해서 팩토리얼 구하기 - 하향식 계산 방법(나 빼고 나머지가 완성되어있음)
function factorial(number){
    if(number === 1) return 1; // 기저조건(= 탈출구문) 없으면 무한루프(콜스택 자리 다 찰 때까지 반복)
    else return number * factorial(number - 1);
}

console.log(factorial(5));
