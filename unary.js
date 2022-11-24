/*const MESSAGE = readline();*/
const MESSAGE = 'C';
let array = []
let result = ''

MESSAGE.split('').forEach(letter => {
  let binary = letter.charCodeAt(0).toString(2)
  console.log(binary)
  let binaryArr = binary.split('')
  let prevNumber = false
  let count = 1
  binaryArr.forEach((number) => {
    console.log(number)
    if (prevNumber === number) count++
    else array.push({number: number, count: count})
    prevNumber = number
  })
})

console.log(array)

console.log(result);