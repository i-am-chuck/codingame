let scorePlyr1 = 0
let scorePlyr2 = 0

function choose() {
  let choice = Math.floor((Math.random() * 3) + 1)
  switch (choice) {
    case 1: return 'rock'
    case 2: return 'paper'
    case 3: return 'scissors'
  }
}

function game() {
  let round = 1
  while (scorePlyr1 < 3 && scorePlyr2 < 3) {
    console.log('Round',round,':')
    let p1choice = choose()
    let p2choice = choose()
    console.log('Choose :','P1',p1choice,'- P2',p2choice)
    if (p1choice === p2choice) {
      console.log('PAR !')
    } else {
      if (p1choice === 'rock') {
        if (p2choice === 'paper') scorePlyr2++
        else scorePlyr1++
      } else if (p1choice === 'paper') {
        if (p2choice === 'scissors') scorePlyr2++
        else scorePlyr1++
      } else if (p1choice === 'scissors') {
        if (p2choice === 'rock') scorePlyr2++
        else scorePlyr1++
      }
    }
    console.log('Score :','P1',scorePlyr1,'- P2',scorePlyr2)
    console.log('')
    round++
  }

  /*let round = 1
  for (let i = 1; i <= round ; i++) {
    console.log('Game',i,':')
    let p1choice = choose()
    let p2choice = choose()
    console.log('Choose :','P1',p1choice,'- P2',p2choice)
    if (p1choice === p2choice) {
      round++
      console.log('PAR !')
    } else {
      if (p1choice === 'rock') {
        if (p2choice === 'paper') scorePlyr2++
        else scorePlyr1++
      } else if (p1choice === 'paper') {
        if (p2choice === 'scissors') scorePlyr2++
        else scorePlyr1++
      } else if (p1choice === 'scissors') {
        if (p2choice === 'rock') scorePlyr2++
        else scorePlyr1++
      }
    }
    console.log('Score :','P1',scorePlyr1,'- P2',scorePlyr2)
    console.log('')
    if (scorePlyr1 <= 3 || scorePlyr2 <= 3) round++
  }*/
}

game()