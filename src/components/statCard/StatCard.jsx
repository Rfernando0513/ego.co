import Counter from "../counter/Counter";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./StatCard.css";

const StatCard = ({ Icon, value, suffix, label, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`stat-card from-right ${isVisible ? "show" : ""}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {Icon && <Icon size={75} color="#2F4F3E" />}

      <div className="stat-number">
        <Counter value={value} />
        <span className="stat-suffix">{suffix}</span>
        <span className="stat-label">{label}</span>
      </div>
    </div>
  );
};

export default StatCard;
