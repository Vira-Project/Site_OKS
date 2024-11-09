import "./portfolio.scss";

// components
import MinText from "../../components/min_text/min_text";

// svg
import star_svg from "../../icons/star.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

// png
import photo_vik from "../../icons/photo_vik.jpg";

function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <div className="portfolio_container">
          <div className="portfolio_short">
            <div className="portfolio_short_block">
              <img
                className="portfolio_short_block_star_top"
                src={star_svg}
                alt="star"
              />
              <div className="portfolio_short_block_container">
                <div className="portfolio_short_block_photo">
                  <img src={photo_vik} alt="photo_vik" />
                </div>
                <div className="portfolio_short_block_text">
                  <MinText h={"КОВАЛЬЧУК ОКСАНА ДМИТРІВНА"} text={"викладач"} />
                  <MinText h={"ОСВІТНІ КОМПОНЕНТИ"} text={"Інформатика"} />
                  <MinText h={"КОНТАКТНА ІНФОРМАЦІЯ"} text={"+3806839288"} />
                  <MinText
                    h={"СОЦІАЛЬНІ МЕРЕЖІ"}
                    text={
                      <div className="portfolio_short_block_text_item_text_medias">
                        <FaInstagram className="btn" />
                        <FaFacebook className="btn" />
                        <FaYoutube className="btn" />
                      </div>
                    }
                  />
                </div>
              </div>
              <img
                className="portfolio_short_block_star_bottom"
                src={star_svg}
                alt="star"
              />
            </div>
          </div>
          <div className="portfolio_information">
            <div className="portfolio_information_block">
              <div className="portfolio_information_block_text">
                <div className="portfolio_information_block_text_min">
                  <div>
                    <span>освіта: </span>вища
                  </div>
                  <div>
                    <span>закінчив(ла): </span>Державний навчальний
                    заклад"Ковельський центр професійно-технічної освіти”
                  </div>
                  <div>
                    <span>дата закінчення: </span>20.01.2015 р.
                  </div>
                  <div>
                    <span>спеціальність: </span>Бухгалтерський облік
                  </div>
                  <div>
                    <span>кваліфікація: </span>Економіст по бухгалтерському
                    обліку
                  </div>
                  <div>
                    <span>кваліфікаційна категорія: </span>спеціаліст першої
                    категорії
                  </div>
                  <div>
                    <span>педагогічне звання: </span>викладач-методист
                  </div>
                </div>
                <MinText
                  h={"ПЕДАГОГІЧНЕ ДІЯЛЬНІСТЬ"}
                  text={"З 2017 року викладач інформатики"}
                />
                <MinText
                  h={"ПУБЛІКАЦІЇ"}
                  text={
                    "2020: Стаття на тему 'Застосування хмарних технологій у навчанні інформатики'\n2021: Дослідження 'Роль штучного інтелекту в освітньому процесі'\n2022: Публікація 'Інтерактивні методи навчання інформатики у професійній освіті'"
                  }
                />
                <MinText
                  h={"ПІДВИЩЕННЯ КВАЛІФІКАЦІЇ"}
                  text={
                    "2019: Курси підвищення кваліфікації з інформаційних технологій у Київському університеті імені Тараса Шевченка.\n2021: Сертифікат на тему 'Методи дистанційного навчання' від платформи Prometheus."
                  }
                />
                <MinText
                  h={"ДОСЯГНЕННЯ ВИКЛАДАЧА"}
                  text={
                    "2018: Нагороджена грамотою за високий професійний рівень виконання службових обов'язків.\n2018: Відзначена подякою за сумлінну працю та високу професійну майстерність.\n2019: Отримала диплом за креативний підхід та ефективну командну роботу."
                  }
                />
                <MinText
                  h={"ДОСЯГНЕННЯ ЗДОБУВАЧІВ ОСВІТИ"}
                  text={
                    "Участь учнів у всеукраїнському конкурсі з інформаційних технологій 'IT Future'"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
