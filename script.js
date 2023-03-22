const IconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Eventos de Click
IconMenu.addEventListener('click', toggleMobileMenu);

window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel_lista'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        dots: '.carousel_indicadores',

        responsive: [
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          }
        ]
    });
});

function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive');
}

