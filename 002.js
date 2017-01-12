const evenAdder = start => val => 
  val ? (start += val % 2 === 0 ? val : 0 ) : start

const evenFibs = max => 
  fibsIt(max, evenAdder(0))

const fibsIt = (max, cb) => {

  let [x, y] = [0, 1]

  while ( y < max ) {
    [x, y] = [y, x + y]
    cb(y)
  }

  return cb()
}

console.log(evenFibs(4000000))
