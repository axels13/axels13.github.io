import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("cartProducts"); // obtenemos el valor de la variable de localStorage
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : []; // si existe el valor de la variable de localStorage, lo parseamos a JSON y lo retornamos, sino retornamos un array vacio
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cardProducts", JSON.stringify(cartItems)); // guardamos el valor de la variable cartItem en localStorage
    console.log(cartItems);
  }, [cartItems]);

  // funcion para agregar productos al carrito
  const addItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    ); //busca si el producto ya esta en el carrito
    if (inCart) {
      //si ya esta en el carrito
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            //si el producto ya esta en el carrito
            return { ...inCart, amount: inCart.amount + 1 }; //si ya esta en el carrito, aumenta la cantidad
          } else return productInCart; //si no esta en el carrito lo agrega
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]); //agrega el producto al carrito
    }
  };
  const deleteItemToCart = (product) => {
    //funcion para eliminar productos del carrito
    const inCart = cartItems.find(
      //busca si el producto ya esta en el carrito
      (productInCart) => productInCart.id === product.id
    );
    if (inCart.amount === 1) {
      //si la cantidad es 1
      setCartItems(
        cartItems.filter((productInCart) => productInCart.id !== product.id) //elimina el producto del carrito
      );
    } else {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            //si el producto ya esta en el carrito
            return { ...inCart, amount: inCart.amount - 1 }; //si ya esta en el carrito, disminuye la cantidad
          } else return productInCart; //si no esta en el carrito lo agrega
        })
      );
    }
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
