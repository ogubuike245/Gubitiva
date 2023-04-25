import { slots } from "../../data/dummy";

const Slots = () => {
  return (
    <>
      <div className="slots-container">
        {slots.map((slot) => {
          const { number, cover, id, author, category, title, snippet } = slot;
          return (
            <div key={id} className={`slot-${number} slot`}>
              <img src={cover} />
              <div>
                <button>{category}</button>
                <h3>{title}</h3>
                <p>{author}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Slots;
