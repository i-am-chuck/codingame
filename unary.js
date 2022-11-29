/* https://www.codingame.com/ide/puzzle/unary */

/*const MESSAGE = readline();*/

/* ✅ */
/* const MESSAGE = 'C'; */
/* result = 0 0 00 0000 0 00 */

/* ✅ */
/* const MESSAGE = 'CC'; */
/* result = 0 0 00 0000 0 000 00 0000 0 00 */

/* ❌ */
 const MESSAGE = '%';
/* result = 00 0 0 0 00 00 0 0 00 0 0 0 */

let binaryArr = []

MESSAGE.split('').forEach(letter => {
  let binary = letter.charCodeAt(0).toString(2)
  binary.split('').forEach(number => { binaryArr.push(number) })
})

let prevNumber = false
let count = 1
let result = ''

binaryArr.forEach((number, index) => {

  if (prevNumber === number) count++
  else count = 1

  if (count === 1) {
    if (index) result += ' '
    result += number === '0' ? '00' : '0'
    result += ' '
  }
  result += '0'

  prevNumber = number
})

console.log(result);
console.log('00 0 0 0 00 00 0 0 00 0 0 0');