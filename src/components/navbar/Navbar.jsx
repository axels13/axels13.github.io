import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import cart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import { CgClose, CgMenu } from "react-icons/cg";
import { BsFillCartCheckFill } from "react-icons/bs";
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()}>
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container ">
            <NavLink exact to="/" className="logo">
              <img src={logo} alt="logo" width="200" />
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink exact to="/" className="nav-links">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/products" className="nav-links">
                  Products
                </NavLink>
              </li>
            </ul>

            <div className="nav-icon" onClick={handleClick}>
              {click ? <CgClose /> : <CgMenu />}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
