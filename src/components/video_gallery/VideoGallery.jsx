import React, { useState } from "react";
import "./VideoGallery.scss";

const VideoGallery = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div>
      {/* Галерея відео */}
      <div className="video-gallery">
        {videos.map((videoId, index) => (
          <div
            key={index}
            className="video-item"
            onClick={() => setSelectedVideo(videoId)}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={`Thumbnail ${index}`}
            />
          </div>
        ))}
      </div>

      {/* Модальне вікно для відтворення відео */}
      {selectedVideo && (
        <div className="lightbox" onClick={() => setSelectedVideo(null)}>
          <div className="video-container">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
          <button className="close-btn" onClick={() => setSelectedVideo(null)}>
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
