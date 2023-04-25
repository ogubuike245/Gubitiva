import Hero from "../../components/ui/Hero";
import cover from "../../assets/images/hero/hero4.jpg";
const About = () => {
  return (
    <>
      <Hero
        title="ABOUT PAGE"
        cover={cover}
        text="ABOUT PAGE"
        className="hero"
        heroButtonClass="hide"
      />
    </>
  );
};

export default About;
