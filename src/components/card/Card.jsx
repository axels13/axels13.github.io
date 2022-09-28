import React, { useState } from "react";
import sale from "../../../img/sale.jpg";
import dress from "../../../img/dress.jpg";
import accesories from "../../../img/accesories.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
const Card = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className="card-product">
        <div className="dress products ">
          <div className="sale-elements">
            <span>Sale</span>
            <NavLink to="/">
              <IoIosArrowDown className="arrow" />
            </NavLink>
          </div>
        </div>
        <div className="sale products">
          <div className="sale-elements">
            <span>Dress</span>
            <NavLink to="/">
              <IoIosArrowDown className="arrow" />
            </NavLink>
          </div>
        </div>
        <div className="accesories products">
          <div className="sale-elements">
            <span>Accesories</span>
            <NavLink to="/">
              <IoIosArrowDown className="arrow" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
