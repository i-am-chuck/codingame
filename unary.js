/*const MESSAGE = readline();*/
const MESSAGE = 'C';

let result = ''

MESSAGE.split('').forEach(letter => {

  let binary = letter.charCodeAt(0).toString(2)
  let binaryArr = binary.split('')

  let prevNumber = false
  let count = 1

  binaryArr.forEach((number, index) => {

    if (prevNumber === number) count++
    else count = 1

    if (count === 1) {
      if (index) result += ' '
      result += number === '0' ? '0' : '00'
      result += ' '
    }
    result += '0'

    prevNumber = number
  })
})

console.log(result);