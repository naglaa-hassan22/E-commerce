import React from 'react';  
import style from './Checkout.module.css';
import logo from '../../Assets/House_Logos.png';
import Support from '../Support/Support';
import { useCart } from '../../CartContext';

export default function Checkout() {
    const { cartItems } = useCart(); 
    const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toLocaleString();

    return (
        <>
            {/* Start Section1 "banner" */}
            <section className={style.banner}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={logo} alt="logo" className={style.logo} />
                            <h2 className={style.title}>Checkout</h2>
                            <div className='text-center fw-bold'>
                                <span>Home </span>
                                <span> <i className="fa-solid fa-chevron-right"></i></span>
                                <span> Checkout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Section1 "banner" */}

            {/* Start Section2 "billingDetails" */}
            <section className={style.billingDetails}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className={`pt-3 mt-5 ${style.billing}`}>
                                <h4>Billing Details</h4>
                                <form className="mt-5 fw-bold">
                                    <div className={`row ${style.billingForm}`}>
                                        <div className="col">
                                            <label htmlFor="first-name" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="first-name" aria-label="first name" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="last-name" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" id="last-name" aria-label="last name" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <div>
                                                <label htmlFor="company" className="form-label">Company Name (Optional)</label>
                                                <input type="text" className="form-control" id="company" />
                                            </div>
                                            <div>
                                                <label htmlFor="country" className="form-label">Country / Region</label>
                                                <select className="form-select" id="country" aria-label="Default select example">
                                                    <option selected>Sri Lanka</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="address" className="form-label">Street address</label>
                                                <input type="text" className="form-control" id="address" />
                                            </div>
                                            <div>
                                                <label htmlFor="town" className="form-label">Town / City</label>
                                                <input type="text" className="form-control" id="town" />
                                            </div>
                                            <div>
                                                <label htmlFor="province" className="form-label">Province</label>
                                                <select className="form-select" id="province" aria-label="Default select example">
                                                    <option selected>Western Province</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="zip-code" className="form-label">ZIP code</label>
                                                <input type="text" className="form-control" id="zip-code" />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="form-label">Phone</label>
                                                <input type="number" className="form-control" id="phone" />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="form-label">Email address</label>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                            <div>
                                                <input type="text" className="form-control" id="additional-info" placeholder='Additional information' />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className={`pt-5 mt-5 ${style.order}`}>
                                <table className="table" style={{ borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr>
                                    <th scope="col" style={{ border: 'none' }}>Product</th>
                                    <th scope="col" style={{ border: 'none' }}>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.length === 0 ? (
                                    <tr>
                                        <td colSpan="" className="text-center" style={{ border: 'none' }}>Your cart is empty</td>
                                    </tr>
                                    ) : (
                                    cartItems.map(item => (
                                        <tr key={item.id}>
                                        <td style={{ border: 'none' }}>  {item.title.split(" ").slice(0, 2).join(" ")} x {item.quantity}</td>
                                        <td style={{ border: 'none' }}>$ {(item.quantity * item.price).toFixed(2)}</td>
                                        </tr>
                                    ))
                                    )}
                                    <tr className={style.subtotalRow}>
                                    <td style={{ border: 'none' }}><strong>Subtotal</strong></td>
                                    <td style={{ border: 'none' }}>$ {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr className={style.totalRow}>
                                    <td><strong>Total</strong></td>
                                    <td style={{ color: ' #B88E2F', fontWeight: 'bold', fontSize: '24px' }}>${total % 1 === 0 ? `${total}.00` : total.toFixed(2)}</td>
                                    </tr>
                                </tfoot>
                                </table>
                            </div> 
                            <div className={`pt-2 mt-3 ${style.payment}`}>                 
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="directBankTransfer" />
                                    <label className="form-check-label" htmlFor="directBankTransfer">
                                        Direct Bank Transfer
                                    </label>
                                </div>
                                <p>
                                    Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                                    Your order will not be shipped until the funds have cleared in our account.
                                </p>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="paypal" />
                                    <label className="form-check-label" htmlFor="paypal">
                                        PayPal
                                    </label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="paymentMethod" id="cashOnDelivery" />
                                    <label className="form-check-label" htmlFor="cashOnDelivery">
                                        Cash On Delivery
                                    </label>
                                </div>
                                <p>
                                    Your personal data will be used to support your experience throughout this website,
                                    to manage access to your account, and for other purposes described in our 
                                    <strong>privacy policy.</strong>
                                </p>
                                <div className='text-center'>
                                    <button type="submit" className={style.orderButton}>Place Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Section2 "billingDetails" */}

            {/* Start Section3 "support" */}
            <Support />
            {/* End Section3 "support" */}
        </>
    );
}
