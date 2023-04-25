import { popular } from "../../data/dummy";
const Categories = () => {
  const popularCategories = [...new Set(popular.map((item) => item.category))];

  return (
    <>
      <div className="home-categories">
        {popularCategories.map((category) => {
          console.log(category);
          return <button key={category}>{category}</button>;
        })}
      </div>
    </>
  );
};

export default Categories;
