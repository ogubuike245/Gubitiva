import Heading from "../../../../components/common/heading/Heading";
import "./popular.css";
import { popular } from "../../../../dummyData";

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
        {popular.map((value) => {
          return (
            <div className="items" key={value.id}>
              <div className="box shadow">
                <div className="images row">
                  <div className="img">
                    <img src={value.cover} alt="cover" />
                  </div>
                  <div className="category category1">
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
      </section>
    </>
  );
};

export default Popular;
