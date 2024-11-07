import "./footer.scss";

// svg
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_container">
          <div className="footer_email">
            <span className="footer_email_text">Email: </span>example@gmail.com
          </div>
          <div className="footer_medias">
            <div className="btn">
              <FaInstagram />
            </div>
            <div className="btn">
              <FaFacebook />
            </div>
            <div className="btn">
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
