const number=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddno=number.filter(x=> x % 2 !== 0);
console.log(oddno);
const divisibleby3square=number.filter(x=> x % 3 == 0).map(x=> x** 2);
console.log(divisibleby3square);
const divisibleby2or5=number.filter(x=> x % 2 == 0 || x % 5 == 0);
console.log(divisibleby2or5);
const squarenodivisibleby5=number.filter(x=> x % 5 == 0).map(x=> x ** 2).reduce((accumulator, value)=> accumulator+value,0);
console.log(squarenodivisibleby5);
