import { useState } from "react";
import "./App.css";

// svg
import { MdOutlinePersonOutline } from "react-icons/md";
import { PiHouse } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { HiOutlinePhoto } from "react-icons/hi2";

function App() {
  return (
    <>
      <div className="header">
        <div className="hd_title">
          <div className="hd_t_logo">
            <img src="src\icons\logop.png" alt="logo" />
          </div>
          <div className="hd_t_name">
            <span>Оксана КОВАЛЬЧУК</span>
          </div>
        </div>
        <div className="hd_btns">
          <div className="hd_btns_home">
            <PiHouse />
            <span>Головна</span>
          </div>
          <div className="hd_btns_portfolio">
            <MdOutlinePersonOutline />
            <span>Портфоліо</span>
          </div>
          <div className="hd_btns_osvit_components">
            <IoBookOutline />
            <span>Освітні компоненти</span>
          </div>
          <div className="hd_btns_photos">
            <HiOutlinePhoto />
            <span>Світлина</span>
          </div>
        </div>
        <div className="hd_btn_sign">
          <span className="hd_btn_sign_text">Реєстрація</span>
          <div className="hd_btn_sigh_in">
            <span>Вхід</span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="ft_email"></div>
        <div className="ft_medias">
          <div className="ft_m_instagram"></div>
          <div className="ft_m_facebook"></div>
          <div className="ft_m_youtube"></div>
        </div>
      </div>
    </>
  );
}

export default App;
