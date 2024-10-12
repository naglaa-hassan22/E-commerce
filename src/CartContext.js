import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(prevItem => prevItem.id === item.id);
            
            if (existingItem) {
                return prevItems.map(prevItem =>
                    prevItem.id === item.id 
                    ? { ...prevItem, quantity: prevItem.quantity + 1 } 
                    : prevItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
