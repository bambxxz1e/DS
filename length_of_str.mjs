function strLength(str){
    if(str[0] == null) return 0;

    return strLength(str.slice(0, -1)) + 1; // 리턴 값에 +1 계속해서 누적함. (마지막 0 나오면 한번에 계산 0+1+1+1+1+1)
}

let str = "abcde";
console.log(strLength(str));