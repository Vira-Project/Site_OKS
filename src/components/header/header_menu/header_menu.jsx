import "./header_menu.scss";
import { ROUTES } from "../../../config/routes";

import HeaderMenuBtn from "../header_menu_btn/header_menu_btn";

// svg
import { IoIosMenu } from "react-icons/io";
import { PiHouse } from "react-icons/pi";
import { MdOutlinePersonOutline } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";
import { useState } from "react";
import clsx from "clsx";

function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((p) => !p);
  };

  return (
    <>
      <IoIosMenu className="header_menu_img btn" onClick={handleClick} />

      <div className={clsx("header_menu", { active: isOpen })}>
        <HeaderMenuBtn icon={<PiHouse />} text={"Головна"} to={ROUTES.home} />
        <HeaderMenuBtn
          icon={<MdOutlinePersonOutline />}
          text={"Портфоліо"}
          to={ROUTES.portfolio}
        />
        <HeaderMenuBtn
          icon={<IoBookOutline />}
          text={"Освітні компоненти"}
          to={ROUTES.portfolio}
        />
        <HeaderMenuBtn
          icon={<HiOutlinePhoto />}
          text={"Світлина"}
          to={ROUTES.portfolio}
        />
        <HeaderMenuBtn text={"Реєстрація"} to={ROUTES.register} />
        <HeaderMenuBtn text={"Вхід"} to={ROUTES.login} />
      </div>
    </>
  );
}

export default HeaderMenu;
