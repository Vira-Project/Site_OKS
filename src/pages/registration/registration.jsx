import { useEffect, useState } from "react";
import { ROUTES } from "../../config/routes";
import { NavLink } from "react-router-dom";
import "./registration.scss";
import axios from "axios";

// svg
import star_svg from "../../icons/star.svg";

function Registration({ setAccountStatus }) {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");

  const [accSt, setAccSt] = useState("Зареєструватися");

  const sendData = async () => {
    try {
      const data = { email: emailValue, password: passwordValue };
      const response = await axios.post(
        "http://localhost:8080/api/register",
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
      <div className="registration">
        <div className="registration_container">
          <div className="registration_block">
            <img
              className="registration_block_star_top"
              src={star_svg}
              alt="star"
            />
            <div className="registration_block_container">
              <div className="registration_block_input">
                <input
                  type="email"
                  placeholder="...@example.com"
                  maxLength="64"
                  onChange={(v) => setEmail(v.target.value)}
                />
              </div>
              <div className="registration_block_input">
                <input
                  placeholder="...password"
                  maxLength="64"
                  onChange={(v) => setPassword(v.target.value)}
                />
              </div>
              <div className="registration_block_input">
                <input
                  placeholder="...repeat password"
                  maxLength="64"
                  onChange={(v) => setPassword(v.target.value)}
                />
              </div>
              <NavLink to={ROUTES.login}>
                <span className="registration_block_entrance btn">Вхід</span>
              </NavLink>
              <div className="registration_block_button btn" onClick={sendData}>
                <span>{accSt}</span>
              </div>
            </div>
            <img
              className="registration_block_star_bottom"
              src={star_svg}
              alt="star"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
