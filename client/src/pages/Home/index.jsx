import Heading from "../../components/ui/Heading";
import Hero from "../../components/ui/Hero";
import Slots from "./Slots";
import cover from "../../assets/images/hero/hero3.jpg";
import Popular from "./Popular";
import Categories from "./Categories";

const HomePage = () => {
  return (
    <>
      <section className="home-container">
        <Hero
          title="THE GUBI BLOG"
          cover={cover}
          text="Cutting-Edge Insights"
          className="hero"
          url="/about"
          heroButtonText="Writings From Gubi"
          heroButton="show"
        />

        <Heading title="FEATURED" />
        <Slots />
        <Heading title="POPULAR" />
        <Popular />
        <Heading title="CATEGORIES" />
        <Categories />
      </section>
    </>
  );
};

export default HomePage;
