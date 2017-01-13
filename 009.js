const tripletProduct = () => {
  for ( let i = i2 = 1; i < 334; i2 += ( 2 * i + 1 ), i++ ) {
    for ( let j = i + 1, j2 = j * j; j <= 499; j2 += ( 2 * j + 1 ), j++ ) {
      let c = Math.sqrt(i2 + j2)
      if (i + j + c === 1000) return i * j * c 
    }
  }
}

console.log(tripletProduct())

