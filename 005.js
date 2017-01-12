const smallestMultiple = max => {
  let f = 1;
  
  for ( let i = max; i > 1; i-- ) {
    
    if ( f % i !== 0 ) {
      
      for ( j = 2; j <= i; j++ ) {
        
        if ( ( j * f) % i === 0 ) {
          f *= j
          break
        }
      }
    }
  }

  return f
}

console.log(smallestMultiple(20))
