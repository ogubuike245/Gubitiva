import { Slot } from "../../components/ui/Slot";
import { slots } from "../../data/dummy";
import "./home.css";

const Slots = () => {
  return (
    <>
      <div className="slots-container">
        {slots.map((slot) => {
          return <Slot key={slot.id} {...slot} />;
        })}
      </div>
    </>
  );
};

export default Slots;
