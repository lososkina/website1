let visibleCardsAmount = 4;
const allCards = document.querySelectorAll('.project-card');

function loadMoreCards(event) {
    if (visibleCardsAmount >= allCards.length) {
        return event.target.classList.add('d-none');
    }

    let counter = 0;

    for (let card of allCards) {
        if (card.classList.contains('d-none')) {
            card.classList.remove('d-none');
            visibleCardsAmount++;
            counter++;
        }
        if (counter === 2) break;
    }
}