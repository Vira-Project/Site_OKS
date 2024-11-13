import { NavLink, Link } from "react-router-dom";
import "../header_menu/header_menu.scss";

function HeaderMenuBtn({ icon, text, to }) {
  return (
    <>
      <div className="header_menu_btn btn">
        <NavLink to={to}>
          {icon}
          <span>{text}</span>
        </NavLink>
      </div>
    </>
  );
}

export default HeaderMenuBtn;
