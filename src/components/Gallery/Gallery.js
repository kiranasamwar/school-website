import React from 'react';
import './Gallery.css';

const photos = [
  { src: 'https://img.freepik.com/free-vector/gradient-national-sports-day-illustration_23-2148995776.jpg?t=st=1723004500~exp=1723008100~hmac=19c58a963298cf796607ba694b8b5d906af266339c9812ec26453e998d81af90&w=996', alt: 'Students participating in various sports events.' },
  { src: 'https://img.freepik.com/premium-photo/heart-bustling-school-science-fair-kaleidoscope-creativity_1126694-12790.jpg?w=1060', alt: 'Students presenting their science projects.' },
  { src: 'https://i.pinimg.com/564x/dd/6e/15/dd6e151f92071684574d61cad6717c7b.jpg', alt: 'Students performing in the cultural fest.' },
  { src: 'https://i.pinimg.com/564x/b5/14/21/b51421853a2c93114c681675e860a28e.jpg', alt: 'A glimpse of our interactive classrooms.' },
  { src: 'https://i.pinimg.com/564x/27/b5/90/27b590f352b9d8ed79063df4bd6ddf75.jpg', alt: 'Students reading and studying in the school library.' }
];

const videos = [
  { src: 'https://www.youtube.com/watch?v=EI9XIH2WzI', alt: 'Virtual tour of Springdale Public School.' },
  { src: 'https://www.youtube.com/watch?v=EI9XIH2WzI', alt: 'Highlights from the Annual Function 2023.' }
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>

      <h2 className="gallery-subtitle">Photos</h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo.src} alt={photo.alt} className="photo-img" />
            <p className="photo-caption">{photo.alt}</p>
          </div>
        ))}
      </div>

      <h2 className="gallery-subtitle">Videos</h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <video controls className="video-element">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="video-caption">{video.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
