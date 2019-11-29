// What is the value of the first triangle number to have over five hundred
// divisors?

const computeTriangleNumber = (lastNumber, rowNumber) => lastNumber + rowNumber

const max = (num1, num2) => num1 > num2 ? num1 : num2

// Brute force
const factor = (number) => {
  let factorCount = 0
  const maxDivisor = number / 2
  for (let possibleDivisor = 1; possibleDivisor < maxDivisor; possibleDivisor++) {
    if (number % possibleDivisor === 0) factorCount++
  }
  return factorCount + 1
}

const findFirstTriangleNumberWithAtLeastNDivisors = (n) => {
  let triangleNumber = 1
  let rows = 1
  let maxDivisors = 1
  while (maxDivisors < n) {
    console.log(`maxDivisors: ${maxDivisors}`)
    triangleNumber = computeTriangleNumber(triangleNumber, ++rows)
    console.log(`trying triangle number: ${triangleNumber}`)
    maxDivisors = max(maxDivisors, factor(triangleNumber))
  }
  console.log(`found triangle number: ${triangleNumber}`)
  return triangleNumber
}

// findFirstTriangleNumberWithAtLeastNDivisors(500) // 16m 34s

// w/ factor caching & sqrt optimization
const factorWithCache = (number, cache) => {
  if (cache[number]) {
    return cache[number]
  }
  const factors = new Set([1, number])
  const sqrt = Math.sqrt(number)
  for (let p = 2; p <= sqrt; p++) {
    if (number % p === 0) {
      factorWithCache(p, cache)
      .forEach(f => factors.add(f))
      factorWithCache(number / p, cache)
      .forEach(f => factors.add(f))
    }
  }
  cache[number] = factors
  return factors
}

const findFirstTriangleNumberWithAtLeastNFactorsWithCache = (n) => {
  let triangleNumber = 1, rows = 1, maxFactorCount = 1
  const cache = {}
  while (maxFactorCount < n) {
    triangleNumber = computeTriangleNumber(triangleNumber, ++rows)
    const factors = factorWithCache(triangleNumber, cache)
    maxFactorCount = max(maxFactorCount, factor.size)
  }
  return triangleNumber
}

const result = findFirstTriangleNumberWithAtLeastNFactorsWithCache(500) // 6s
console.log(result)
