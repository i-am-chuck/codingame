// 1 = 1
// 2 = 1
// 3 = 2
// 4 = 3
// 5 = 4
// 6 = 8
// 7 = 13
// ...

function fib(int) {
  let intNM2 = 0
  let intNM1 = 1
  for (let i = 1; i <= int; i++) {
    const result = intNM2 + intNM1
    if (i === int) console.log(i, '=', result)
    if (i > 1) {
      intNM2 = intNM1
      intNM1 = result
    }
  }
}

fib(7)