const settings = {
  Infinity: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  InitialSlide: 0,
  Responsive: [
    {
      breakpoints: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoints: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        InitialSlide: 2,
      },
    },
    {
      breakpoints: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settings;
