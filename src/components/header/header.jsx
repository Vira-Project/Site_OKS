import "./header.scss";

import HeaderBtn from "./header_btns/header_btn";

// svg
import { PiHouse } from "react-icons/pi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";

// png
import logop from "../../icons/logop.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header_container">
          <div className="header_title">
            <div className="header_title_logo">
              <img src={logop} alt="logo" />
            </div>
            <div className="header_title_name">
              <span>Оксана КОВАЛЬЧУК</span>
            </div>
          </div>
          <div className="header_btns">
            <HeaderBtn text={"Головна"} icon={<PiHouse />} />
            <HeaderBtn text={"Портфоліо"} icon={<MdOutlinePersonOutline />} />
            <HeaderBtn text={"Освітні компоненти"} icon={<IoBookOutline />} />
            <HeaderBtn text={"Світлина"} icon={<HiOutlinePhoto />} />
          </div>
          <div className="header_sign">
            <span className="header_sign_text">Реєстрація</span>
            <div className="header_sign_in btn">
              <span>Вхід</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
