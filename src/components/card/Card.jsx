import './Card.css'

const Card = ({ icon: Icon, title, items }) => {
    return (
        <div className="card">
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
    )
}

export default Card
