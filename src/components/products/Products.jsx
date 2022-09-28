import React, { useContext } from "react";
import video from "../../../img/video.mp4";
import { BiChevronsDown } from "react-icons/bi";
import { accesories, products, sale } from "../products";

import { CartContext } from "../../Context/CartContext";
const Products = () => {
  const { addItemToCart } = useContext(CartContext);
  return (
    <div className="products-content">
      <div className="products-container">
        <h1>Welcome sneakers Products!</h1>
        <BiChevronsDown className="arrow-dobble" />
        <video
          autoPlay
          loop
          muted
          src={video}
          type="video/mp4"
          className="products-video"
        />
      </div>
      <h1 className="sale">SALE</h1>
      <div>
        <div className="sale-container">
          {sale.map((s, i) => (
            <div className="sale-cards" key={i}>
              <img src={s.img} alt={s.name} width="300" height="400" />
              <div className="sale-text">
                <h3>{s.name}</h3>
                <span>${s.price}</span>
                <button onClick={() => addItemToCart(s)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>

        <h1 className="sale">DRESSES</h1>
        <div>
          <div className="sale-container">
            {products.map((p, i) => (
              <div className="sale-cards" key={i}>
                <img src={p.img} alt={p.name} width="300" height="400" />
                <div className="sale-text">
                  <h3>{p.name}</h3>
                  <span>${p.price}</span>
                  <button onClick={() => addItemToCart(p)}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1 className="sale">ACCESORIES</h1>
        <div>
          <div className="sale-container">
            {accesories.map((a, i) => (
              <div className="sale-cards" key={i}>
                <img src={a.img} alt={a.name} width="300" height="400" />
                <div className="sale-text">
                  <h3>{a.name}</h3>
                  <span>${a.price}</span>
                  <button onClick={() => addItemToCart(a)}>Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
