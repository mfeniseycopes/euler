const gpf = num => {

  if (num < 4 ) return num

  x = 3
  while ( num > 3 ) {
    
    num = ( num % x === 0 ? num / x : num )
    
    if ( Math.pow(x, 2) > num ) return num 
    
    x += 2
  }

  return num 
}

console.log(gpf(600851475143))
