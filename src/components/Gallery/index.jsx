import React from 'react';
import './gallery.css';

const Gallery = () => {
    const imageUrls = [
        'https://example.com/image1.jpeg',
        'https://example.com/image2.jpeg',
        'https://example.com/image1.jpeg',
        'https://example.com/image1.jpeg',
        'https://example.com/image1.jpeg',
        'https://example.com/image1.jpeg',
        'https://example.com/image1.jpeg',
    ];

    return(
        <div className='gallery-container'>
            <div className='gogo-dance-gallery'>
                {imageUrls.map((imageUrl, index) => (
                    <div className='gallery-item' key={index}>
                        <img src={imageUrl} alt={`Gogo Dance ${index + 1}`}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery;