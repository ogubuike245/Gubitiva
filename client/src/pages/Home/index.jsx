import Heading from "../../components/ui/Heading";
import Hero from "../../components/ui/Hero";
import Slots from "./Slots";
import "./home.css";

const HomePage = () => {
  return (
    <>
      <section className="home-container">
        <Hero
          title="Welcome to Gubitrivia"
          cover="./images/hero/hero3.jpg"
          text="HERO TEXT"
          cName="hero"
          url="/"
          heroBtnText="TEST"
          heroBtn="show"
        />

        <Heading title="FEATURED" />
        <Slots />
      </section>
    </>
  );
};

export default HomePage;
