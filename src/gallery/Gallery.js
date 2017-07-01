import React from 'react';
import './Gallery.css';
import GridGallery from 'react-grid-gallery';
import image1 from './3.png';
import image1Thumbnail from './3-thumb.png';
import image2 from './5.png';
import image2Thumbnail from './5-thumb.png';
import image3 from './6.png';
import image3Thumbnail from './6-thumb.png';
import image4 from './8.png';
import image4Thumbnail from './8-thumb.png';
import image5 from './9.png';
import image5Thumbnail from './9-thumb.png';
import image6 from './7.png';
import image6Thumbnail from './7-thumb.png';

const IMAGES = [
    {
        src: image1,
        thumbnail: image1Thumbnail
    },
    {
        src: image2,
        thumbnail: image2Thumbnail
    },
    {
        src: image3,
        thumbnail: image3Thumbnail
    },
    {
        src: image4,
        thumbnail: image4Thumbnail
    },
    {
        src: image5,
        thumbnail: image5Thumbnail
    },
    {
        src: image6,
        thumbnail: image6Thumbnail
    }
];
const Gallery = () => (
    <section className="container">
        <h1 className="section-heading">Gallery</h1>
        <GridGallery images={IMAGES} enableImageSelection={false} />
    </section>
);

export default Gallery;
