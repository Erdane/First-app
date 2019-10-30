const memoryfinale = function () {
  const cards = document.querySelectorAll('cards')

  let hasflippedCard = false
  let lockBoard = false
  let firstCard, secondCard

  function flipCard () {
    if (lockBoard) return
    this.classList.add('flip')

    if (!hasflippedCard) {
      hasflippedCard = true
      firstCard = this

      return
    }
    hasflippedCard = false
    secondCard = this

    checkformatch()
  }

  function checkformatch () {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
    isMatch ? disableCards() : unflipCards()
  }

  function disableCards () {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
  }

  function unflipCards () {
    lockBoard = true

    setTimeout(() => {
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')

      lockBoard = false
    }, 1500)
  }
  (function shuffle () {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12)
      card.style.order = randomPos
    })
  })()

  cards.forEach(card => card.addEventListener('click', flipCard))
}

export default memoryfinale
