import Heading from "../../components/ui/Heading";
import Hero from "../../components/ui/Hero";
import Slots from "./Slots";
import cover from "../../assets/images/hero/hero3.jpg";

const HomePage = () => {
  return (
    <>
      <section className="home-container">
        <Hero
          title="THE GUBI BLOG"
          cover={cover}
          text="Cutting-Edge Insights"
          cName="hero"
          url="/about"
          heroBtnText="Writings From Gubi"
          heroBtn="show"
        />

        <Heading title="FEATURED" />
        <Slots />
      </section>
    </>
  );
};

export default HomePage;
