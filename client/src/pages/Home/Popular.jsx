import Slider from "react-slick";
import { popular } from "../../data/dummy";

const Popular = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    lazyLoad: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="popular-container">
        <Slider {...settings}>
          {popular.map((post) => {
            const { id, author, category, title, snippet } = post;
            return (
              <div key={id} className="post">
                <div>
                  <button>{category}</button>
                  <h3>{title}</h3>
                  <p>{author}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Popular;
