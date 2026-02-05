import './TextCamp.css'

export const TextCamp = (props) => {
    return (
        <>
            <div className="input-box">
                <label>{props.label}</label>
                <input type="text" className="field" required placeholder={props.placeholder} />
            </div>
        </>
    )
}