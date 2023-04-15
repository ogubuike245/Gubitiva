import "./hero.css";

const Hero = ({
  cover,
  title,
  cName,
  text,
  url,
  heroBtnClass,
  heroBtnText,
}) => {
  return (
    <>
      <div className={cName}>
        <img src={cover} alt={cover} />

        <div className="hero-text">
          <h1>{title}</h1>
          <p>{text}</p>
          <a href={url} className={heroBtnClass}>
            {heroBtnText}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
