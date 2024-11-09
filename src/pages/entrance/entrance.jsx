import { NavLink } from "react-router-dom";
import "./entrance.scss";

// svg
import star_svg from "../../icons/star.svg";
import { ROUTES } from "../../config/routes";

function Entrance() {
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
                />
              </div>
              <div className="entrance_block_input">
                <input type="email" placeholder="...password" maxLength="64" />
              </div>
              <NavLink to={ROUTES.register}>
                <span className="entrance_block_registration btn">
                  Реєстрація
                </span>
              </NavLink>
              <div className="entrance_block_button btn">
                <span>Вхід</span>
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
