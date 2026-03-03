import { useState } from 'react';
import './GalleryThumbnail.css'

function GalleryThumbnail(props) {
    /* 
    Viendo que también agrego la imagen grande, el nombre GalleryThumbnail no es el mejor, pero ya fue... 
        TODO:
            - Función para que la imagen cambie cuando hago hover y no click
    */
    const { image, imageIndex } = props
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleThumbnailClick = (imageIndex) => {
        setSelectedIndex(imageIndex);
    }

    return (
        <div>
            {/* Radio input que controla la imagen grande y la miniatura seleccionada */}
            <input 
                type="radio" 
                id={`gallery-thumbnail-${imageIndex}`} 
                name={`gallery-thumbnail`} 
                className='gallery-input'
                onChange={() => handleThumbnailClick(imageIndex)}
                checked={selectedIndex === imageIndex}
                readOnly
            />
            <span className='gallery-wrapper'>
                {/* Miniatura */}
                <label htmlFor={`gallery-thumbnail-${imageIndex}`} className="gallery-label">
                    <div className="thumbnail gallery-thumbnail">
                        <div className="thumbnail-picture" type='button' onClick={() => handleThumbnailClick(imageIndex)}>
                            <img src={image} alt={`Miniatura ${imageIndex} de la galería`} className='gallery-image'/>
                        </div>
                    </div>
                </label>

                {/* Imagen grande */}
                <figure className="gallery-figure">
                    <img 
                        src={image} 
                        alt={`Imagen ${imageIndex} de la galería`} 
                        className="gallery-image gallery-figure-image" 
                    />
                </figure>
            </span>
        </div>
    )
}

export default GalleryThumbnail