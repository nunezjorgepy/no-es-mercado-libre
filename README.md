# Página clon de MercadoLibre

# Qué falta?
El disclaimer de que esto NO es mercadolibre. No dejar ninguna información personal.

- En HeroOptions, el botón para moverse entre las opciones fuera de vista. Esto lo dejo para cuando tengas productos que mostrar.
- En la sección de ofertas, el botón para moverse entre las opciones fuera de vista. Esto lo dejo para cuando tengas productos que mostrar. (Es lo mismo que el anterior)

# ¿Qué sigue?
Voy a usar el componente Product para la sección Ofertas de la página principal.

El flex se divide en
    - Un elemento de ancho 30% - 16px, con margin derecho de 16px., para la oferta de tamaño más grande
        - Tiene un padding interno de 20px

    - Otro de ancho del 70% para las ofertas de tamaño más chico. A su vez, este elemento se divide en:
        - 4 sub-elementos, cada uno de un 25% de ancho (la página muestra 181.5px, pero no sé si hacerlo así)
        - Cada uno de estos elementos es un componente Product, showImage y !isProductPage
    - La segunda sección tiene dos botones para ir moviendose entre productos, aunque lo más probable es que lo deje para cuando entienda bien cómo hacer la función para moverme entre productos.