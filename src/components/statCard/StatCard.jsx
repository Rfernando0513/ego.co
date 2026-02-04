import Counter from "../counter/Counter";
import './StatCard.css'


const StatCard = ({ Icon, value, suffix, label }) => {
    return (
        <div className="stat-card">
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
