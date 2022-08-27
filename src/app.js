const myCards = document.querySelectorAll('.memo-card');

let cardFlipped = false;
let lockCards = false;
let card1, card2;


function flipCard() {
  if (lockCards) return;
  if (this === card1) return;

 this.classList.add('flip');

 if (!cardFlipped){
 //FRST CLICK
  cardFlipped = true;
  card1 = this;

  return; 
 } 

   //SND CLICK
  card2 = this;

  checkMatch();
 }


function checkMatch() {
  let isMatch = card1.dataset.framework === 
    card2.dataset.framework;

    isMatch ? disableCards() : unflipCards ();
}

 function disableCards() {
  card1.removeEventListener('click', flipCard);
  card2.removeEventListener('click', flipCard);

  resetCards();
 }
 
function unflipCards () {
  lockCards = true
  setTimeout(()=> {
    card1.classList.remove('flip');
    card2.classList.remove('flip');

    resetCards();
   }, 1500);
  }
 
function resetCards() {
  [cardFlipped, lockCards] = [false, false];
  [card1, card2] = [null, null];

}

(function shuffle () {
  myCards.forEach(card => {
    let randomOrder = Math.floor(Math.random() * 12);
    card.style.order = randomOrder;
  });
})();

myCards.forEach(card => card.addEventListener('click', flipCard))
