import { Link } from 'react-router'
import './HeaderOptions.css'

function HeaderOptions(props) {
    const { headerOption: {title, image, descirption, btnTitle, link} } = props

    return (
        <div className='header-option'>
            <div className="header-option-title">
                {title}
            </div>
            <div className="img-container">
                <img 
                src={image} 
                alt="Medios de Pago" />
            </div>
            <div className="header-option-description">
                {descirption}
            </div>
            <Link className="secondary-btn secondary-btn-small" type='button'>
                {btnTitle}
            </Link>
        </div>
    )
}

export default HeaderOptions