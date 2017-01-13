const isPrime = p => {
  for (let i = 3; i <= Math.sqrt(p); i += 2) if (p % i === 0) return false
  return true
}

const nextPrime = k => 
  isPrime(k + 2) ? k + 2 : nextPrime(k + 2)

const nthPrime = n => 
  n < 3 ? n + 1 : nextPrime(nthPrime(n - 1))

console.log(nthPrime(10001))

