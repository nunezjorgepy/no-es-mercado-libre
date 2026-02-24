import { Link } from 'react-router'
import './HeaderOptions.css'

function HeaderOptions(props) {
    const { headerOption: {title, image, descirption, btnTitle, link} } = props

    return (
        <Link to={link} className='header-option'>
            <div className="header-option-title">
                {title}
            </div>
            <div className="img-options">
                <img 
                src={image} 
                alt="Medios de Pago" />
            </div>
            <div className="header-option-description">
                {descirption}
            </div>
            <div className="secondary-btn secondary-btn-small" type='button'>
                {btnTitle}
            </div>
        </Link>
    )
}

export default HeaderOptions