import { useEffect, useState } from "react";
import axios from "axios";
import "./photos.scss";

// COMPONENTS
import PhotosItem from "../../components/photos_item/photos_item";
import ImageSlider from "../../components/image_slider/ImageSlider";
import Gallery from "../../components/image_gallery/Gallery";
import VideoGallery from "../../components/video_gallery/VideoGallery";

function Photos() {
  const [images, setImages] = useState([]);
  const [slider, setSlider] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const respone = await axios.get("http://localhost:8080/api/get_photos");
      console.log(respone.data);

      setImages(respone.data.images);
      setSlider(respone.data.slider);
      setVideos(respone.data.videos);
    };

    fetchAPI();
  }, []);

  return (
    <div className="photos">
      <div className="photos_container">
        <PhotosItem
          title={"Останні дзвінок"}
          covers={<ImageSlider images={images} />}
        />
        <PhotosItem
          title={"Відкритий урок"}
          covers={<Gallery images={slider} />}
        />
        <PhotosItem
          title={"Урочисте зібрання"}
          covers={<VideoGallery videos={videos} />}
        />
      </div>
    </div>
  );
}

export default Photos;
