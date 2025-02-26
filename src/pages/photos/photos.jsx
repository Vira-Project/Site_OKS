import "./photos.scss";

// COMPONENTS
import PhotosItem from "../../components/photos_item/photos_item";
import ImageSlider from "../../components/image_slider/ImageSlider";
import Gallery from "../../components/image_gallery/Gallery";
import VideoGallery from "../../components/video_gallery/VideoGallery";

const images = [
  "https://www.kpl.volyn.ua/images/fotos/4/title.jpg",
  "https://www.kpl.volyn.ua/images/fotos/5/title.jpg",
  "https://www.kpl.volyn.ua/images/fotos/6/title.jpg",
  "https://www.kpl.volyn.ua/images/fotos/7/title.jpg",
  "https://www.kpl.volyn.ua/images/fotos/4/title.jpg",
  "https://www.kpl.volyn.ua/images/fotos/5/title.jpg",
  "https://www.kpl.volyn.ua/images/fotos/6/title.jpg",
  "https://www.kpl.volyn.ua/images/fotos/7/title.jpg",
];

const videoIds = [
  "dDU7FDjXFSA",
  "0rsr-SeS6qQ",
  "4_OZt7D36H4",
  "0zjzX1BbaDE",
  "8PPj8-rW614",
  "4_OZt7D36H4",
  "0zjzX1BbaDE",
  "8PPj8-rW614",
];

function Photos() {
  return (
    <div className="photos">
      <div className="photos_container">
        <PhotosItem
          title={"Останні дзвінок"}
          covers={<ImageSlider images={images} />}
        />
        <PhotosItem
          title={"Відкритий урок"}
          covers={<Gallery images={images} />}
        />
        <PhotosItem
          title={"Урочисте зібрання"}
          covers={<VideoGallery videos={videoIds} />}
        />
      </div>
    </div>
  );
}

export default Photos;
