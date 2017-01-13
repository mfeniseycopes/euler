// note that the difference between the square of sums and the sum of squares 
// is the non-square terms
// ex. For { 1, .. , 10 } we have 1(2+3+4+..+10) + 2(1*3*..*10) .. =
// 1(10(10+1)/2 - 1) + 2(10(10+1)/2 - 2) + .. + 10 (10(10+1)/2 - 10)
// therefore the square of sums for n = (n * (n + 1) / 2)^2
// sum of squares can be calculated with the square pyramidal number formula:
// p(n) = n(n + 1)(2n + 1) / 6


const squareOfSums = n => Math.pow( ( n * ( n + 1 ) / 2 ), 2 )

const sumOfSquares = n => n * ( n + 1 ) * ( 2 * n + 1 ) / 6

const squareDifference = n => squareOfSums(n) - sumOfSquares(n)

console.log(squareDifference(100))
