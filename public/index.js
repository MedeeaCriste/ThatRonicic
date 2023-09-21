$('#slider').slick({
  slidesToShow: 1,
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: "#arrowr",
  nextArrow:"#arrowl"
});

const bgImageEl = document.getElementById("bg-image");
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateImage();
      ticking = false;
    });
    ticking = true;
  }
});

function updateImage() {
  bgImageEl.style.opacity = 1 - window.pageYOffset / 900;

  if (window.innerWidth <= 720) {
    bgImageEl.style.backgroundSize = 200 + window.pageYOffset / 12 + "%";
  } else {
    bgImageEl.style.backgroundSize = 100 + window.pageYOffset / 12 + "%";
  }
}

$('.slider2').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive:[
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }}
  ]

});



$('#slider3').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 2000,
  responsive:[
    {
      breakpoint: 638,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }},

  
    ]
});