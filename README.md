# Página clon de MercadoLibre

# Qué falta?
El disclaimer de que esto NO es mercadolibre. No dejar ninguna información personal.

- En HeroOptions, el botón para moverse entre las opciones fuera de vista. Esto lo dejo para cuando tengas productos que mostrar.
- En la sección de ofertas, el botón para moverse entre las opciones fuera de vista. Esto lo dejo para cuando tengas productos que mostrar. (Es lo mismo que el anterior)

# ¿Qué sigue?
Crear el componente de botón primario, separando el botón secundario y los distintos tamaños.

Por ahora, tengo los botones:
    - Primario: el que se muestra en la página de produto, que dice "Comprar ahora"
    - Secundario: Se muestra justo debajo del anterior, para agregar al carrito

Y los tamaños son:
    - Normal: el de 'Comprar ahora'
    - medium: el que figura en la sección Meli+ de HomePage.
    - xsmall: el que se muestra en las opciones de la sección header

Para diferencias los botones, paso por props las opciones btn-size (normal, medium, xsmall, etc.) y btn-type (primary, secondary, etc.)

Empiezo creando el botón primario normal, y con eso voy modificando según convenga los tamaños y el tipo de botón.