window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel_lista'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        dots: '.carousel_indicadores',

        responsive: [
            {
              breakpoint: 775,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            }
          ]
    });
});

