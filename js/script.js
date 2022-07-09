const cards = document.querySelectorAll('.card')
let flipped = false
let firstCard, secondCard
let blockboard = false


function virarCarta(){
    if(blockboard) return
    if(this === firstCard) return
    this.classList.add('flip')
    if(!flipped){
        flipped = true
        firstCard = this
        return
    }
    flipped= false
    secondCard=this
    checkForMatch()
}

function checkForMatch(){
    if (firstCard.dataset.card === secondCard.dataset.card ){
        disableCard()
        return
    }
    unflipCards()

}

function disableCard(){
    firstCard.removeEventListener('click', virarCarta)
    secondCard.removeEventListener('click', virarCarta)
    resetBoard()
}

function unflipCards(){
    blockboard =true
    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        resetBoard()
    }, 1500);
}

function resetBoard(){
    [flipped, blockboard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

(function shuffle() {
    cards.forEach(Element => {
        let randomPosition = Math.floor(Math.random() * 12)
        Element.style.order = randomPosition
    })
})()

cards.forEach(Element=>{
    Element.addEventListener('click', virarCarta)
})

