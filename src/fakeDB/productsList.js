const productList = [
    /* ------------------- First Product ------------------- */
    {
        id: 1,
        seller_id: 1,
        title: "Figura Resident Evil Jill Valentine 30cm Alto",
        description: "Figura en 3D de Jill Vlanetine del Resident Evil 3. Aproximadamente 30cm de altura. 100% Plástico. No se incluyen accesorios.",
        price: 54000,
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_2X_845662-MLA98970490817_112025-F.webp', 
            'https://http2.mlstatic.com/D_NQ_NP_2X_680770-MLA98494830098_112025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_690338-MLA98494092440_112025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_793394-MLA86807087481_062025-F.webp'
        ],
        category: "juguetes",
        stock: 10,
        characteristics: {
            main: {
                marca: "Genérica",
                fabricante: '3D',
                línea: "Resident Evil",
                colección: "Resident Evil",
                modelo: "Jill Valentine",
            },
            dimensiones: {
                ancho: 30,
                profundidad: 30,
                altura: 30,
            },
            peso: 300,
            otros: {
                minimum_age: 12,
                materials: 'Plástico',
                colectable: true,
                needs_power: false
            }
        }
    },
    /* ------------------- Second Product ------------------- */
    {
        id: 2,
        seller_id: 1,
        title: "Cinturón de Seguridad Inrecial Retractil Homologado X2 Clase",
        description: `VENDEDOR: CASA MIGUEL- Mercado Líder Platinum
UBICACIÓN: Villa Crespo, Capital federal( a 1 cuadra de warnes)
-----------------------------------------------------------------------------------------------------------------------
¡UNIVERSALES Y ADAPTABLES A TODO TIPO DE VEHÍCULO!
***Precio por PAR***

CARACTERISTICAS:
- Adaptable a todo tipo de vehículo
- El precio publicado es por el PAR
- Largo de cinta total 3.40m
- Color negro
- viene con bastones hembra y tornillos.

--------------------------------------------------------------------------------------------------------
¡SOMOS CASA MIGUEL!

Somos una empresa líder con amplia trayectoria en el rubro con más de 150.000 operaciones concretadas exitosamente. Tenemos más de 15 años de experiencia y somos Mercado Líder Platinum en nuestra categoría. Nuestros productos son de calidad certificada y hacemos envíos a todo el país. También realizamos facturas A y B.
-------------------------------------------------------------------------------------------------------

GARANTÍA:

• Todos nuestros productos cuentan con la Garantía Oficial del Fabricante.

-------------------------------------------------------------------------------------------------------

30 DÍAS DE PRUEBA:

¡Recibí el producto que esperabas o te devolvemos tu dinero! Estamos tan seguros de la excelencia de nuestros productos que te damos 30 días para que lo pruebes. Si no estás conforme, podés devolvernos el producto en perfectas condiciones y te devolveremos el dinero.

-------------------------------------------------------------------------------------------------------

ENVÍOS Y RETIRO DEL PRODUCTO:

1. Mercado Envíos: Hacemos envíos a todo el país a través de Mercado Envíos si está habilitado en nuestras publicaciones. Podés calcular el costo y fecha del envío ingresando tu código postal en la pestaña de Mercado Envíos.

2. Moto privada: Tenemos envíos en CABA y GBA de forma particular a través de mensajería en el día comprando antes de las 14hs. Debes elegir la opción de envío a tu domicilio al momento de la compra.

3. Retiro en persona: También puedes hacer tu retiro en persona con turno previo por Villa crespo, capital federal. Al pie de la publicación te indicamos cómo llegar y nuestros horarios de atención.

Nuestros horarios de atención son:

• Lunes a viernes: 9 a 17:30hs.
• Sábado: 9 a 13:30hs.

Garantía de fabrica: 1 mes

Garantía de fábrica: 30 días`,
        price: 89999,
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_2X_982462-MLA93805170878_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_812125-MLA94228942331_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_853118-MLA94229356733_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_689888-MLA93805556058_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_905432-MLA93805664986_102025-F.webp'
        ],
        category: 'Coches',
        stock: 5,
        characteristics: {
            main: {
                marca: 'Genérica',
                piece_number: 'Cinturon Inercial 3 puntos x2',
                color: 'Negro'
            },
            otros: {
                configuration: '3 puntos',
                type: 'Inercial Retáctil',
                largo: 300,
                ancho: 4.8,
                origin: 'China'
            }
        }
    }
]

export default productList