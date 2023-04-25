import { Link } from "react-router-dom";

const Hero = ({
  cover,
  title,
  className,
  text,
  url,
  heroButtonClass,
  heroButtonText,
}) => {
  return (
    <>
      {/* <div className={className} style={{ backgroundImage: `url(${cover})` }}> */}
      <div className={className}>
        <img src={cover} alt={cover} />

        <div className="hero-text">
          <h1>{title}</h1>
          <p>{text}</p>

          <button className={heroButtonClass}>
            <Link to={url}>{heroButtonText}</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
