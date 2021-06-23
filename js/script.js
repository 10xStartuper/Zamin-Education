$(document).ready(function(){
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: false,
      });

      $('.partner__slider').slick({
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        arrows: true,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      })
      $( '.menu-burger' ).click(function() {
        $( '.header__menu-adaptive' ).toggleClass( "active" );
      });
})


function openCity(evt, courseName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(courseName).style.display = "block";
  evt.currentTarget.className += " active";
}


let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



let burger = document.querySelector('.fa-bars')
let dashboard = document.querySelector('.lesson__dashboard')
let lessonPlay = document.querySelector('.lesson__play')
burger.addEventListener('click', () => {
  dashboard.classList.toggle('active')
  lessonPlay.classList.toggle('active')
})