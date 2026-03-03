import { useState } from 'react';
import './GalleryThumbnail.css'

function GalleryThumbnail(props) {
    const { image, imageIndex } = props
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleThumbnailClick = (imageIndex) => {
        setSelectedIndex(imageIndex);
    }

    return (
        <div>
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
                <label htmlFor={`gallery-thumbnail-${imageIndex}`} className="gallery-label">
                    <div className="thumbnail gallery-thumbnail">
                        <div className="thumbnail-picture" type='button' onClick={() => handleThumbnailClick(imageIndex)}>
                            <img src={image} alt={`Foto ${imageIndex} de la galería`} className='thumbnail-image'/>
                        </div>
                    </div>
                </label>
            </span>
        </div>
    )
}

export default GalleryThumbnail