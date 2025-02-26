import { useEffect, useState } from "react";
import { ROUTES } from "../../config/routes";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./entrance.scss";

// svg
import star_svg from "../../icons/star.svg";

function Entrance({ setAccountStatus }) {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");

  const [accSt, setAccSt] = useState("Вхід");

  const sendData = async () => {
    try {
      const data = { email: emailValue, password: passwordValue };
      const response = await axios.post(
        "http://localhost:8080/api/login",
        data
      );
      console.log("Відповідь сервера:", response.data);
      setAccountStatus(response.data["status"]);

      if (response.data["status"]) {
        setAccSt("Авторизовано");
      }
    } catch (error) {
      console.error("Помилка при відправці даних:", error);
    }
  };

  return (
    <>
      <div className="entrance">
        <div className="entrance_container">
          <div className="entrance_block">
            <img
              className="entrance_block_star_top"
              src={star_svg}
              alt="star"
            />
            <div className="entrance_block_container">
              <div className="entrance_block_input">
                <input
                  type="email"
                  placeholder="...@example.com"
                  maxLength="64"
                  onChange={(v) => setEmail(v.target.value)}
                />
              </div>
              <div className="entrance_block_input">
                <input
                  placeholder="...password"
                  maxLength="64"
                  onChange={(v) => setPassword(v.target.value)}
                />
              </div>
              <NavLink to={ROUTES.register}>
                <span className="entrance_block_registration btn">
                  Реєстрація
                </span>
              </NavLink>
              <div className="entrance_block_button btn" onClick={sendData}>
                <span>{accSt}</span>
              </div>
            </div>
            <img
              className="entrance_block_star_bottom"
              src={star_svg}
              alt="star"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Entrance;
