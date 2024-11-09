import "./header.scss";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../../config/routes";

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
            <NavLink to={ROUTES.home}>
              <HeaderBtn text={"Головна"} icon={<PiHouse />} />
            </NavLink>
            <NavLink to={ROUTES.portfolio}>
              <HeaderBtn text={"Портфоліо"} icon={<MdOutlinePersonOutline />} />
            </NavLink>
            {/* TODO додай сторінку */}
            <NavLink to={ROUTES.portfolio}>
              <HeaderBtn text={"Освітні компоненти"} icon={<IoBookOutline />} />
            </NavLink>
            {/* TODO додай сторінку */}
            <NavLink to={ROUTES.portfolio}>
              <HeaderBtn text={"Світлина"} icon={<HiOutlinePhoto />} />
            </NavLink>
          </div>
          <div className="header_sign">
            <Link to={ROUTES.register}>
              <span className="header_sign_text btn">Реєстрація</span>
            </Link>
            <Link to={ROUTES.login}>
              <div className="header_sign_in btn">
                <span>Вхід</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
