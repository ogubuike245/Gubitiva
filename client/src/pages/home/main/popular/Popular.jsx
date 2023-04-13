import React from "react";
import "./popular.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from "../../../../dummyData";
import Heading from "../../../../components/common/heading/Heading.jsx";

const Popular = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };
  return (
    <>
      <section className="popular">
        <Heading title="Popular" />
        <div className="content">
          <Slider {...settings}>
            {popular.map((value) => {
              return (
                <div key={value.id} className="items">
                  <div className="box shadow">
                    <div className="images row">
                      <div className="img">
                        <img src={value.cover} alt="" />
                      </div>
                      <div class="category category1">
                        <span>{value.category}</span>
                      </div>
                    </div>
                    <div className="text row">
                      <h1 className="title">{value.title.slice(0, 40)}...</h1>
                      <div className="date">
                        <i class="fas fa-calendar-days"></i>
                        <label>{value.date}</label>
                      </div>
                      <div className="comment">
                        <i class="fas fa-comments"></i>
                        <label>{value.comments}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Popular;
