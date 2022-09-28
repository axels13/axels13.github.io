import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ItemCart = ({ item }) => {
  const { addItemToCart, deleteItemToCart } = useContext(CartContext);

  return (
    <div className="cartItem">
      <img src={item.img} alt={item.name} className="image" />
      <div className="dataContainer">
        <div className="left">
          <p>{item.name}</p>
          <div className="buttons">
            <button onClick={() => addItemToCart(item)}>Agregar</button>
            <button onClick={() => deleteItemToCart(item)}>Sacar</button>
          </div>
        </div>
        <div className="right">
          <div>
            {item.amount}
            <p>Total:${item.amount * item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
