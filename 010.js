const markSieve = (sieve, val) => {
  for (let i = val * 2; i <= sieve.length; i += val) {
    sieve[i - 1] = false
  }

  return sieve
}

const primeSieve = max => {
  const sieve = Array.from({ length: max }, () => true )
  sieve[0] = false

  for (let i = 2; i < Math.sqrt(max); i++) {
    markSieve(sieve, i) 
  }
  return sieve.reduce((acc, prime, num) => prime ? acc + num + 1 : acc, 0)
}

