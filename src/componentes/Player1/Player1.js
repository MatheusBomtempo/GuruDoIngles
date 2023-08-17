import React from 'react';
import './Player1.css';

const Player1 = ({ videoSrc }) => {
  return (
    <div className="video-container">
      <div className="video-border"></div>
      <video controls>
        <source src={videoSrc} type="video/webM" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </div>
  );
};

export default Player1;
