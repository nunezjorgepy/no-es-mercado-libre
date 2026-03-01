import './BenefitComponent.css'

function BenefitComponent(props) {
    /* No sé si es el mejor nombre, pero como no voy a hacer la página completa, funciona. */
    const { benefit } = props

    return (
        <div className='benefit-component'>
            <img className='meli-plus-benefit-image' src={benefit.image} alt={benefit.text} />
            <p className='meli-plus-benefit-p'>{benefit.text}</p>
        </div>
    )
}

export default BenefitComponent