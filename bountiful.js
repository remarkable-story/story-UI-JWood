// Constructor to make the Cards for the Deck container (HTML)

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
        // To confirm click function is working, and ready to link up
    }

}



class Country {
    constructor(country) {
        this.country = country;
        this.country.addEventListener('mouseover', () => this.spinDoctor());
    }

    spinDoctor(){
        TweenMax.to(this.country, 3, {rotationY: 360, rotationX: 720, rotationZ: 360});
    }
}


// Curtains Operator - for @media: desktop--------------------------------------

window.addEventListener('load', () => onload());
window.addEventListener('resize', () => winsize());
let curtL = document.querySelector('.curtainL');
let curtR = document.querySelector('.curtainR');

function onload() {
    if(window.innerWidth > 1200) {
    TweenLite.to(curtL, 1, {left: 0}, 0.5);
    TweenLite.to(curtR, 1, {right: 0}, 0.5);
    }
}

function winsize() {

    if (window.innerWidth < 1200) {
        TweenLite.to(curtL, 1, {left: '-400px'});
        TweenLite.to(curtR, 1, {right: '-400px'});
    }
    
    if (window.innerWidth > 1200) {         
        TweenLite.to(curtL, 1, {left: 0}, 0.5);
        TweenLite.to(curtR, 1, {right: 0}, 0.5);
    }
}


// Declarations for Constructors-------------------------------------------------

let cards = document.querySelectorAll('.card');
Array.from(cards).map(element => new Cards(element));
//console.log(cards);
let countries = document.querySelectorAll('h2');
Array.from(countries).map(element => new Country(element));

// Map Elements provided by Lydia Thornton---------------------------------------

var divElement = document.getElementById('viz1549401526339');
var vizElement = divElement.getElementsByTagName('object')[0];
vizElement.style.width='100%';
vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
var scriptElement = document.createElement('script');
scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
vizElement.parentNode.insertBefore(scriptElement, vizElement);
