import "./home.scss";

// svg
import start_svg from "../../icons/star.svg";

// png
import photo_vik from "../../icons/photo_vik.jpg";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <div className="home_photo">
            <img src={photo_vik} alt="photo" />
          </div>
          <div className="home_information">
            <img src={start_svg} alt="star" />
            <div className="home_information_text">
              <div>
                <span>Посада: </span>викладач інформатики
              </div>
              <div>
                <span>Педагогічне кредо: </span>«Щоб мати право вчити, потрібно
                самостійно вчитися самому»
              </div>
              <div>
                <span>Стаж: </span>8 років
              </div>
            </div>
            <img src={start_svg} alt="star" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
