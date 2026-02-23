import './HomePage.css'
import HeaderComponent from '../../components/layout/HeaderComponent/HeaderComponent'
import HeaderOptions from '../../components/common/HeaderOptions/HeaderOptions'

function HomePage() {
    return (
        <>
            <HeaderComponent />
            <main>
                {/* Hero */}
                <section className="section hero">
                    {/* Esta sección se divide en dos: Carrusel y Opciones. LA primera por ahora no la voy a hacer porque requiere un poco más de conocimiento de css o js. */}
                    <div className="hero-options-container max-width">
                        <HeaderOptions />
                        <HeaderOptions />
                        <HeaderOptions />
                        <HeaderOptions />
                        <HeaderOptions />
                        <HeaderOptions />
                    </div>
                </section>

                {/* Payment methods */}
                <section className="section payment-section">
                    <div className="payment-methods-container max-width">

                    </div>
                </section>

                {/* On Sales */}
                <section className="section offers-section">
                    {/* Contiene dos secciones en forma horizontal. La primera muestra la oferta del día y es aproximadamente la mitad de la segunda, que muestra ofertas varias. */}
                    <div className="offers-container max-width">
                        <div className="day-offer"></div>
                        <div className="best-offers"></div>
                    </div>

                </section>

                {/* Meli+ */}
                <section className="section meli-plus-section">
                    <div className="meli-plus-container max-width">

                    </div>
                </section>

                {/* More solds */}
                <section className="section best-sales-section">
                    <div className="best-sales-container max-width"></div>
                </section>

                {/* Categories */}
                <section className="section categories-section">
                    <div className="categories-container max-width">

                    </div>
                </section>
            </main>
        </>
    )
}

export default HomePage