/* 
La lista de productos tendrá las siguientes características
    - id
    - seller_id
    - title
    - description
    - rate                  En una aplicación real, seguramente esto se obtenga calculando la media de las calificaciones de los clientes, que se obtiene de otra tabla.
    - price
    - discount
    - getItToday
    - freeShipment          TODO: Se podría hacer una función que verifique si el precio supera una cantidad determinada para ver si hay envío gratis. De ser así, la propiedad freeShipment no 
                            haría falta, ya que se calcula en el componente.
    - images
    - category
    - stock
    - characteristics
*/

const productList = [
    /* ------------------- First Product ------------------- */
    {
        id: 1,
        seller_id: 1,
        title: "Figura Resident Evil Jill Valentine 30cm Alto",
        description: "Figura en 3D de Jill Vlanetine del Resident Evil 3. Aproximadamente 30cm de altura. 100% Plástico. No se incluyen accesorios.",
        rate: 4.5,
        price: 54000,
        discount: 0.05,
        payments: 1,
        getItToday: false,
        freeShipment: true,
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
        rate: 4.8,
        price: 89999,
        discount: 0,
        payments: 12,
        getItToday: false,
        freeShipment: true,
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_2X_982462-MLA93805170878_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_812125-MLA94228942331_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_853118-MLA94229356733_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_689888-MLA93805556058_102025-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_905432-MLA93805664986_102025-F.webp'
        ],
        category: 'coches',
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
    },
    /* ------------------- Third Product ------------------- */
    {
        id: 3,
        seller_id: 1,
        title: "Cinturon Seguridad Delantero 3 Puntos Inercial X2-homologado",
        description: `CINTURON DE SEGURIDAD 3 PUNTOS INERCIAL DELANTERO PAR COMPLETO (con baston flexible o cinta)
Homologado por el INTI
Nro de CHAS: 03PIBP00300521

Características:
- Precio por 2 unidades
- Incluye bulones
- Universal. Va tanto del lado izquierdo como el derecho.

Largo del cinturón: 3,20mts
Largo del bastón: 36cm
Largo de la cinta: 39cm

TODAS LAS FOTOS SON REALES`,
        rate: 4.8,
        price: 76000,
        discount: 0.11,
        payments: 12,
        getItToday: true,
        freeShipment: true,
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_2X_659337-MLA76275079393_052024-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_622218-MLA76275198091_052024-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_778875-MLA74698655562_022024-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_615604-MLA74719123066_032024-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_772456-MLA74719398752_032024-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_774824-MLA79953213244_102024-F.webp',
        ],
        category: 'coches',
        stock: 15,
        characteristics: {
            main: {
                marca: 'Genérica',
                piece_number: 'Cinturon Inercial 3 puntos x2',
                color: 'Negro'
            },
            otros: {
                configuration: 'Dos piezas',
                type: 'Inercial 3 Puntos',
                largo: 320,
                ancho: 4.7,
                origin: 'China'
            }
        }
    },
    {
        id: 4,
        seller_id: 1,
        title: "Silla Escritorio Ergonómica Malla Kista Negro Holz Negro Tela",
        description: `La silla de escritorio Holz BS-1001 es la opción ideal para quienes buscan comodidad y funcionalidad en su espacio de trabajo. Su diseño ergonómico se adapta a la forma del cuerpo, proporcionando un soporte adecuado durante largas horas de uso.`,
        rate: 4.8,
        price: 99999,
        discount: 0.08,
        payments: 12,
        getItToday: true,
        freeShipment: true,
        images: [
            'https://http2.mlstatic.com/D_NQ_NP_2X_699043-MLA105013876907_012026-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_816029-MLA105014497833_012026-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_817230-MLA104460286436_012026-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_973364-MLA105014260719_012026-F.webp',
            'https://http2.mlstatic.com/D_NQ_NP_2X_904699-MLA105014380155_012026-F.webp',
        ],
        category: 'home',
        stock: 10,
        characteristics: {
            otros: {
                gamer: false,
                giratoria: true,
                respaldo_reclinable: false,
                altura_regulable: true,
            },
        }
    }
]

export default productList