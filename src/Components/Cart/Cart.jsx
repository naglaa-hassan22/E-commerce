import React from 'react'; 
import style from './Cart.module.css';
import logo from '../../Assets/House_Logos.png';
import Support from '../Support/Support';
import { useCart } from '../../CartContext'; 
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart(); 

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }; 

  return (
    <>
      {/* Start Section1 "banner" */}
      <section className={style.banner}>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} alt="logo" className={style.logo}/>
              <h2 className={style.title}>Cart</h2>
              <div className='text-center fw-bold'>
                <span>Home </span>
                <span> <i className="fa-solid fa-chevron-right"></i></span>
                <span> Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Section1 "banner" */}

      {/* Start Section2 "cartProdects" */}
      <section className={`pt-4 mt-4 ${style.cartProdects}`}>
        <div className="container">
          <div className="row">
          <div className="col-lg-7">
            <div className={style.cartItems}>
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <table className="table table-bordered text-center">
                  <thead >
                    <tr   style={{ border: 'none' }} className="table-danger">
                      <th style={{ border: 'none' }}></th>
                      <th style={{ border: 'none' }}>Product</th>
                      <th style={{ border: 'none' }}>Price</th>
                      <th style={{ border: 'none' }}>Quantity</th>
                      <th style={{ border: 'none' }}>Subtotal</th>
                      <th style={{ border: 'none' }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr style={{ border: 'none' }} key={item.id}>
                        <td style={{ border: 'none' }}>
                          <div className='d-flex '>
                            <img
                              src={item.image}
                              alt={item.title}
                              className={style.itemImage}
                            />
                          </div>
                        </td>
                        <td style={{ border: 'none' }} className="pt-4">{item.title.slice(0, 18)}</td> 
                        <td style={{ border: 'none' }}className="pt-4">${item.price}</td> 
                        <td style={{ border: 'none' }}className="pt-4">{item.quantity}</td> 
                        <td style={{ border: 'none' }} className="pt-4">${(item.price * item.quantity).toFixed(2)}</td> 
                        <td style={{ border: 'none' }}>
                          <span
                            className={style.removeButton}
                            onClick={() => removeFromCart(item.id)}>
                            <i class="fa-solid fa-trash pt-4"></i>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
          <div className="col-lg-5">
              <div className={style.cartTotals}>
                <h4 className='text-center m-3'>Cart Totals</h4>
                <div className={style.boxTotalItems}>
                  <div className='d-flex justify-content-between align-items-center p-3'>
                    <span className="fw-bold">Subtotal: </span>
                    <span >${calculateSubtotal()}</span>
                  </div>
                  <div className='d-flex justify-content-between align-items-center p-3'>
                    <span className="fw-bold">Total: </span>
                    <span className="fw-bold fs-4" style={{ color: ' rgba(184, 142, 47, 1)' }}>${calculateSubtotal()}</span>
                  </div>
                  <div className='text-center mt-3'>
                    <button className={style.checkoutButton}>
                      <Link className="nav-link text-dark" to="/checkout">Checkout</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Section2 "cartItems" */}

      {/* Start Section3 "support" */}
      <Support />
      {/* End Section3 "support" */}
    </>
  );
}
