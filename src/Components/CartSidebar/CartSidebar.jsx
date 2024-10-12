import React from 'react';  
import style from './CartSidebar.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../CartContext'; 

const CartSidebar = ({ onClose }) => {
  const { cartItems, removeFromCart } = useCart(); 

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={style.cartSidebar}>
              <div className={`${style.header} d-flex justify-content-between align-items-center`}>
                <h3>Shopping Cart</h3>
                <button className={style.closeButton} onClick={onClose}>
                  <i className="fa-regular fa-rectangle-xmark"></i>
                </button>
              </div>
              <hr />
              <div className={style.cartItems}>
                {cartItems.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className={style.cartItem}>
                      <img src={item.image} alt={item.title} className={style.itemImage} />
                      <div className={style.itemDetails}>
                        <h4>{item.title.slice(0, 18)}</h4>
                        <span>{item.quantity} x </span> 
                        <span className={style.itemPrice}>${item.price}</span>
                        <span className={style.removeButton} onClick={() => removeFromCart(item.id)}>
                          <i className="fa-solid fa-circle-xmark"></i>
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className={style.cartSummary}>
                <div className={style.subtotal}>
                  <span>Subtotal</span>
                  <span className={style.totalPrice}>$ 
                    {cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}
                  </span>
                </div>
                <div className={`d-flex ${style.buttons}`}>
                  <button className={style.cartButton}>
                    <Link className="nav-link text-dark" to="/cart">Cart</Link>
                  </button>
                  <button className={style.checkoutButton}>
                    <Link className="nav-link text-dark" to="/checkout">Checkout</Link>
                  </button>
                  <button className={style.compareButton}>Comparison</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSidebar;
