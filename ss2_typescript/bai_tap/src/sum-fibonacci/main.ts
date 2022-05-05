function sumFibonacci(n: number): number {
    if (n < 0) {
        return -1;
    } else if (n == 1 || n == 0) {
        return n;
    } else {
        return sumFibonacci(n - 1) + sumFibonacci(n - 2);
    }
}

let sum = 0;
let n= 10;
for (let i = 0;i<n;i++){
    sum += sumFibonacci(i);
}
console.log("Tổng "+ n +" số fibonacci đầu tiên là "+ sum);