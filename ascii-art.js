const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();

// define character list
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?'

// loop on each line based on the height
for (let i = 0; i < H; i++) {
  const ROW = readline();
  let line = '';
  // decompose the word to print
  T.split('').forEach(letter => {
    // check if letter is present in list
    const letterIsValid = alpha.includes(letter.toUpperCase())
    // by default use the last character (-> ?)
    let letterIndex = alpha.length
    // if letter is valid we assign the index
    if (letterIsValid) letterIndex = (letter.toLowerCase().charCodeAt() - 96)
    // we define the offset for the start of the character
    const offset = (letterIndex * L) - L
    // we splice the line with the good signs to mach one line of the character
    const log = ROW.split('').slice(offset, offset+L).join('')
    line += log
  })
  console.log(line)
}