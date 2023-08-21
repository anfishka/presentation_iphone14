const delayedTexts = document.querySelectorAll('.container .delayed-text');

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this,
            args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide() {
    delayedTexts.forEach(delayedText => {
        const slideInAt = (window.scrollY + window.innerHeight) - delayedText.clientHeight / 2;
        const textBottom = delayedText.offsetTop + delayedText.clientHeight;
        const isHalfShown = slideInAt > delayedText.offsetTop;
        const isNotScrolledPast = window.scrollY < textBottom;

        if (isHalfShown && isNotScrolledPast) {
            delayedText.classList.add('appear');
        } else {
            delayedText.classList.remove('appear'); // Удаляем класс, если не соответствует условиям
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));





var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#000';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 300) {
        
        body.style.backgroundColor = '#000';
    } else if (scroll >= 300 && scroll < 3000) {
        
    //     body.style.backgroundColor = '#141036';
    
    // } else if (scroll >= 1500 && scroll < 1800) {
       
    //     body.style.backgroundColor = '#933acb';
    // } else if (scroll >= 1800 && scroll < 3000) {
     
    //     body.style.backgroundColor = '#dd97ed';
    } else {
     
        body.style.backgroundColor = '#9fe492';
    }
}














var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}