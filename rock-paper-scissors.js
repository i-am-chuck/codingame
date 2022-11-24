const rounds = 3
let p1score = 0
let p2score = 0

function choose() {
  let choice = Math.floor((Math.random() * 3) + 1)
  switch (choice) {
    case 1: return 'rock'
    case 2: return 'paper'
    case 3: return 'scissors'
  }
}

function versus() {
  let p1choice = choose()
  let p2choice = choose()
  console.log('P1',p1choice)
  console.log('P2',p2choice)
  if (p1choice === p2choice) {
    console.log('PAR !')
  } else {
    if (p1choice === 'rock') {
      if (p2choice === 'paper') p2score++
      else p1score++
    } else if (p1choice === 'paper') {
      if (p2choice === 'scissors') p2score++
      else p1score++
    } else if (p1choice === 'scissors') {
      if (p2choice === 'rock') p2score++
      else p1score++
    }
    console.log('P1',p1score,'- P2',p2score)
  }
  console.log('')
}

function game() {
  let round = 1
  while (p1score < rounds || p2score < rounds) {
    console.log('Round',round)
    versus()
    round++
    if (p1score === rounds || p2score === rounds) break;
  }
  if (p1score === rounds) console.log('Player 1 win the game')
  else console.log('Player 2 win the game')
}

game()