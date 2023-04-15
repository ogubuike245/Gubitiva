export function Slot({ category, slotNumber, cover, id, title, authorName }) {
  return (
    <div
      key={id}
      className={`slot-${slotNumber} slot`}
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <button>{category}</button>
      <h3>{title}</h3>
      <p>{authorName}</p>
    </div>
  );
}
