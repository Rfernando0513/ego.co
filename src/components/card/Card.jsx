import './Card.css';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const Card = ({ icon: Icon, title, items, delay = 0 }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`card fade-up ${isVisible ? 'show' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {Icon && (
        <div className="card-icon">
          <Icon size={50} />
        </div>
      )}

      <h4 className="card-title">{title}</h4>

      <ul className="card-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
