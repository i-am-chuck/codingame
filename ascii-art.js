const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?'
let result = ''

for (let i = 0; i < H; i++) {
  const ROW = readline();
  let line = '';
  T.split('').forEach(letter => {
    const validLetter = alpha.includes(letter.toUpperCase())
    let alphaPos = alpha.length
    if (validLetter) alphaPos = (letter.toLowerCase().charCodeAt() - 96)
    const offset = (alphaPos * L) - L
    const log = ROW.split('').slice(offset, offset+L).join('')
    line += log
  })
  console.log(line)
}