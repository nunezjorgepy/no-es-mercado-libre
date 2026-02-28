import { Link } from 'react-router'
import './HeaderOptions.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

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
            <ButtonComponent btn_text={btnTitle} btn_type="secondary" btn_size="small"/>
        </Link>
    )
}

export default HeaderOptions