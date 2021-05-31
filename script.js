// 1 Get the source
var footer = document.getElementsByTagName('footer')[0];
let menuBtn = document.getElementById('navbarHeader');

var card1 = document.getElementsByClassName('card')[0];
var card2 = document.getElementsByClassName('card')[1];

var header = document.getElementsByClassName('navbar')[0];

function turnCard1ToRed() {
    this.style.color = 'red';
}

card2Green = false;

function turnCard2ToGreenOrNot() {
    if (card2Green == false) {
        this.style.color = 'green';
        card2Green = true;
    } else {
        this.style.color = '';
        card2Green = false;
    }
}

function toggleCdnLink() {
    var link = document.querySelector('link');
    link.disabled = true;
    console.log(link);
}

function toggleMenu() {
    let btnElt = document.querySelector('.navbar-toggler');
    let blockElt = document.querySelector('#navbarHeader');
    btnElt.addEventListener('click', e => {
        e.preventDefault();
        blockElt.classList.toggle('collapse');
    });
}

// 2 
var count = 1;
var consoleClick = function() {
    console.log('Click ! ' + count);
    count++;
}

toggleMenu();
header.addEventListener('dblclick', toggleCdnLink);
footer.addEventListener("click", consoleClick);
card1.addEventListener('click', turnCard1ToRed);
card2.addEventListener('click', turnCard2ToGreenOrNot);