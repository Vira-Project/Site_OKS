import { useState, useEffect } from "react";
import axios from "axios";
import "./portfolio.scss";

// components
import MinText from "../../components/min_text/min_text";

// icons
import photo_vik from "../../icons/photo_vik.jpg";
import star_svg from "../../icons/star.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Portfolio() {
  const [portfolio_obj, setPortfolio] = useState();

  useEffect(() => {
    const fetchAPI = async () => {
      const respone = await axios.get(
        "http://localhost:8080/api/get_portfolio"
      );
      console.log(respone.data);

      setPortfolio(respone.data);
    };

    fetchAPI();
  }, []);

  return (
    <>
      <div className="portfolio">
        <div className="portfolio_container">
          {portfolio_obj ? (
            <>
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
                      <MinText
                        h={portfolio_obj.name}
                        text={portfolio_obj.status}
                      />
                      <MinText
                        h={"ОСВІТНІ КОМПОНЕНТИ"}
                        text={
                          <span>
                            <p>{portfolio_obj.education_components[0]}</p>
                            <p>{portfolio_obj.education_components[1]}</p>
                            <p>{portfolio_obj.education_components[2]}</p>
                            <p>{portfolio_obj.education_components[3]}</p>
                          </span>
                        }
                      />
                      <MinText
                        h={"КОНТАКТНА ІНФОРМАЦІЯ"}
                        text={portfolio_obj.contacts.phone}
                      />
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
                        <span>освіта: </span>
                        {portfolio_obj.education}
                      </div>
                      <div>
                        <span>закінчив(ла): </span>
                        {portfolio_obj.graduated}
                      </div>
                      <div>
                        <span>дата закінчення: </span>
                        {portfolio_obj.date_completion}
                      </div>
                      <div>
                        <span>спеціальність: </span>
                        {portfolio_obj.specialty}
                      </div>
                      <div>
                        <span>кваліфікація: </span>
                        {portfolio_obj.qualification}
                      </div>
                      <div>
                        <span>кваліфікаційна категорія: </span>
                        {portfolio_obj.category}
                      </div>
                      <div>
                        <span>педагогічне звання: </span>
                        {portfolio_obj.teaching_title}
                      </div>
                    </div>
                    <MinText
                      h={"ПЕДАГОГІЧНЕ ДІЯЛЬНІСТЬ"}
                      text={
                        <span>
                          <p>{portfolio_obj.activity}</p>
                        </span>
                      }
                    />
                    <MinText
                      h={"ПУБЛІКАЦІЇ"}
                      text={
                        <span>
                          <p>{portfolio_obj.publications[0]}</p>
                          <p>{portfolio_obj.publications[1]}</p>
                          <p>{portfolio_obj.publications[2]}</p>
                        </span>
                      }
                    />
                    <MinText
                      h={"ПІДВИЩЕННЯ КВАЛІФІКАЦІЇ"}
                      text={
                        <span>
                          <p>{portfolio_obj.professional_develoment[0]}</p>
                          <p>{portfolio_obj.professional_develoment[1]}</p>
                        </span>
                      }
                    />
                    <MinText
                      h={"ДОСЯГНЕННЯ ВИКЛАДАЧА"}
                      text={
                        <span>
                          <p>{portfolio_obj.teacher_achievements[0]}</p>
                          <p>{portfolio_obj.teacher_achievements[1]}</p>
                          <p>{portfolio_obj.teacher_achievements[2]}</p>
                        </span>
                      }
                    />
                    <MinText
                      h={"ДОСЯГНЕННЯ ЗДОБУВАЧІВ ОСВІТИ"}
                      text={
                        <span>
                          <p>{portfolio_obj.student_achievements[0]}</p>
                        </span>
                      }
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {/* <div className="portfolio_short">
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
                  <MinText h={portfolio_obj.name} text={portfolio_obj.status} />
                  <MinText
                    h={"ОСВІТНІ КОМПОНЕНТИ"}
                    text={
                      <span>
                        <p>{portfolio_obj.education_components[0]}</p>
                        <p>{portfolio_obj.education_components[1]}</p>
                        <p>{portfolio_obj.education_components[2]}</p>
                        <p>{portfolio_obj.education_components[3]}</p>
                      </span>
                    }
                  />
                  <MinText
                    h={"КОНТАКТНА ІНФОРМАЦІЯ"}
                    text={portfolio_obj.contacts.phone}
                  />
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
                    <span>освіта: </span>
                    {portfolio_obj.education}
                  </div>
                  <div>
                    <span>закінчив(ла): </span>
                    {portfolio_obj.graduated}
                  </div>
                  <div>
                    <span>дата закінчення: </span>
                    {portfolio_obj.date_completion}
                  </div>
                  <div>
                    <span>спеціальність: </span>
                    {portfolio_obj.specialty}
                  </div>
                  <div>
                    <span>кваліфікація: </span>
                    {portfolio_obj.qualification}
                  </div>
                  <div>
                    <span>кваліфікаційна категорія: </span>
                    {portfolio_obj.category}
                  </div>
                  <div>
                    <span>педагогічне звання: </span>
                    {portfolio_obj.teaching_title}
                  </div>
                </div>
                <MinText
                  h={"ПЕДАГОГІЧНЕ ДІЯЛЬНІСТЬ"}
                  text={
                    <span>
                      <p>{activity}</p>
                    </span>
                  }
                />
                <MinText
                  h={"ПУБЛІКАЦІЇ"}
                  text={
                    <span>
                      <p>{portfolio_obj.publication[0]}</p>
                      <p>{portfolio_obj.publication[1]}</p>
                      <p>{portfolio_obj.publication[2]}</p>
                    </span>
                  }
                />
                <MinText
                  h={"ПІДВИЩЕННЯ КВАЛІФІКАЦІЇ"}
                  text={
                    <span>
                      <p>{portfolio_obj.professional_develoment[0]}</p>
                      <p>{portfolio_obj.professional_develoment[1]}</p>
                    </span>
                  }
                />
                <MinText
                  h={"ДОСЯГНЕННЯ ВИКЛАДАЧА"}
                  text={
                    <span>
                      <p>{portfolio_obj.teacher_achievements[0]}</p>
                      <p>{portfolio_obj.teacher_achievements[1]}</p>
                      <p>{portfolio_obj.teacher_achievements[2]}</p>
                    </span>
                  }
                />
                <MinText
                  h={"ДОСЯГНЕННЯ ЗДОБУВАЧІВ ОСВІТИ"}
                  text={
                    <span>
                      <p>{portfolio_obj.student_achievements[0]}</p>
                    </span>
                  }
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
