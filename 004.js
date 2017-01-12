const isPalindrome = num => 
  (num).toString() === (num).toString()
                            .split('')
                            .reverse()
                            .join('')

const greatestPalindromicProduct = (min, max) => {
  
  let greatest 

  for (i = max; i > min; i--) {
    for (j = i; j > min; j--) {
      let p = i * j
      if ( greatest && p < greatest ) break 
      if ( isPalindrome(p) ) greatest = p
    }
  }

  return greatest 
}


console.log(greatestPalindromicProduct(99, 999))
