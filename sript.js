// const delayedTexts = document.querySelectorAll('.container .delayed-text');

// function debounce(func, wait = 20, immediate = true) {
//     let timeout;
//     return function() {
//         const context = this,
//             args = arguments;
//         const later = function() {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         const callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// }

// function checkSlide() {
//     delayedTexts.forEach(delayedText => {
//         const slideInAt = (window.scrollY + window.innerHeight) - delayedText.clientHeight / 2;
//         const textBottom = delayedText.offsetTop + delayedText.clientHeight;
//         const isHalfShown = slideInAt > delayedText.offsetTop;
//         const isNotScrolledPast = window.scrollY < textBottom;

//         if (isHalfShown && isNotScrolledPast) {
//             delayedText.classList.add('appear');
//         } else {
//             delayedText.classList.remove('appear'); // Удаляем класс, если не соответствует условиям
//         }
//     });
// }

// window.addEventListener('scroll', debounce(checkSlide));





var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#000';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 300) {
        
        body.style.backgroundColor = '#000';
    }else {
     
        body.style.backgroundColor = '#000';
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


document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll(".text-hidden");

    function revealText(element) {
        element.classList.add("text-visible");
    }

    function hideText(element) {
        element.classList.remove("text-visible");
    }

    function handleScroll() {
        textElements.forEach(function(element) {
            const elementRect = element.getBoundingClientRect();
            if (elementRect.top < window.innerHeight * 0.9) {
                revealText(element);
            } else {
                hideText(element);
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    
    // Вызовем обработчик скролла сразу после загрузки страницы
    handleScroll();
});