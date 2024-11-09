import { ROUTES } from "../../config/routes";
import { NavLink } from "react-router-dom";
import "./registration.scss";

// svg
import star_svg from "../../icons/star.svg";

function Registration() {
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
                />
              </div>
              <div className="registration_block_input">
                <input type="email" placeholder="...password" maxLength="64" />
              </div>
              <div className="registration_block_input">
                <input
                  type="email"
                  placeholder="...repeat password"
                  maxLength="64"
                />
              </div>
              <NavLink to={ROUTES.login}>
                <span className="registration_block_entrance btn">Вхід</span>
              </NavLink>
              <div className="registration_block_button btn">
                <span>Зареєструватися</span>
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
