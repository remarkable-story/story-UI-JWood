

class Cards {
    constructor(cards) {
        this.cards = cards;
        this.button = this.cards.querySelectorAll('.button');
        
        this.cards.addEventListener('mouseover', () => this.msOver());
        this.cards.addEventListener('mouseout', () => this.msOut());
        this.button[0].addEventListener('click', () => this.activeButton());
        
    }
    msOver(){
        TweenLite.to(this.button[0], 0.5, {padding: '0 25px'});

    }
    msOut(){
        TweenLite.to(this.button[0], 0.5, {padding: '0 8px'});

    }

    activeButton(){
        let buttons = document.querySelectorAll('.button');
        
        buttons.forEach(element => element.classList.remove('active-button'));
        this.button[0].classList.add('active-button');
        TweenLite.to(this.button[0], 1, {padding: '0 30px'});
        
    }

}



//window.addEventListener('resize', () => this.ifFlex());
window.












let cards = document.querySelectorAll('.card');
Array.from(cards).map(element => new Cards(element));
//console.log(cards);