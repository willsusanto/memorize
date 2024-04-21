import Heart from "../assets/heart.png";
import HeartInactive from "../assets/heart-inactive.png";

const HealthBar = ({ health }) => {
  return (
    <div
      className={`sticky top-2 z-[3] col-[_span_2/_span_1] flex h-14 gap-2 rounded-lg bg-slate-200 p-3 shadow-[0px_5px_16px_1px_rgba(0,0,0,0.5)] md:col-[_span_3/_span_1]`}
    >
      {health.map(({ id, active }) => {
        return <img key={id} src={active ? Heart : HeartInactive}></img>;
      })}
    </div>
  );
};

export default HealthBar;
