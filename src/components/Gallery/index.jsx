import React from 'react'
import './gallery.css'
const Gallery = () => {


  const imageUrls = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image3.jpg',
    // Add more image URLs as needed
  ];


  return (
    <div className='gallery-container'>
         <div className="gogo-dance-gallery">
      {imageUrls.map((imageUrl, index) => (
        <div className="gallery-item" key={index}>
          <img src={imageUrl} alt={`Gogo Dance ${index + 1}`} />
        </div>
      ))}
    </div>
    </div>
  )
}


export default Gallery