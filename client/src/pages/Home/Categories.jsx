import { useState, forwardRef } from "react";
import FlipMove from "react-flip-move";
import { popular } from "../../data/dummy";
import Slider from "react-slick";

const FunctionalArticle = forwardRef((props, ref) => (
  <div className="filter-container" ref={ref}>
    <h3>{props.title}</h3>
    <p>{props.snippet}</p>
    <button>VIEW OTHER POSTS</button>
  </div>
));

const Categories = () => {
  const settings = {
    // dots: true,
    // slidesToShow: 2,
    slidesToScroll: 1,
  };
  const [selectedCategory, setSelectedCategory] = useState("");
  const popularCategories = [...new Set(popular.map((item) => item.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredPopular = selectedCategory
    ? popular.filter((item) => item.category === selectedCategory)
    : popular;

  return (
    <>
      <div className="home-categories">
        {popularCategories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <FlipMove>
        <div className="filtered-posts">
          <Slider {...settings}>
            {filteredPopular.map((item) => (
              <FunctionalArticle key={item.id} {...item} />
            ))}
          </Slider>
        </div>
      </FlipMove>
    </>
  );
};

export default Categories;
