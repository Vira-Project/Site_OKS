import "./header.scss";
import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../../config/routes";

import HeaderBtn from "./header_btns/header_btn";
import HeaderMenu from "./header_menu/header_menu";

// svg
import { PiHouse } from "react-icons/pi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";

// png
import logop from "../../icons/logop.png";

function Header({ accountStatus }) {
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
            <HeaderMenu />
            <NavLink to={ROUTES.home}>
              <HeaderBtn text={"Головна"} icon={<PiHouse />} />
            </NavLink>
            <NavLink to={ROUTES.portfolio}>
              <HeaderBtn text={"Портфоліо"} icon={<MdOutlinePersonOutline />} />
            </NavLink>
            {accountStatus ? (
              <NavLink to={ROUTES.education}>
                <HeaderBtn
                  text={"Освітні компоненти"}
                  icon={<IoBookOutline />}
                />
              </NavLink>
            ) : (
              <NavLink to={ROUTES.login}>
                <HeaderBtn
                  text={"Освітні компоненти"}
                  icon={<IoBookOutline />}
                />
              </NavLink>
            )}
            <NavLink to={ROUTES.photos}>
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
