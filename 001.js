const maxDivisibleBy = (x, max) => 
  ( ( ( max - 1) - ( ( max - 1 ) % x ) ) / x )

const sumMultiples = ( x, max, r = maxDivisibleBy(x, max) ) => 
  ( x * ( r * ( r + 1 ) / 2 ) ) 

const sumManyMultiples = (x, y, max) => 
  sumMultiples(x, max) + sumMultiples(y, max) - sumMultiples(x * y, max)

console.log(sumManyMultiples(3, 5, 1000))
