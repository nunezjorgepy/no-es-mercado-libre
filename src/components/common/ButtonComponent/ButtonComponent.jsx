import './ButtonComponent.css'

function ButtonComponent(props) {
    const { btn_text, btn_type, btn_size, btn_icon } = props;

    return (
        <div className={`primary-btn ${btn_type}-btn ${btn_size}-btn`}>
            {btn_icon && <i className={btn_icon}></i>}
            <span>{btn_text}</span>
        </div>
    )
}

export default ButtonComponent