import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className={styles.contentInfo}>
              <h3 className='fw-bold pb-5'>Funiro.</h3>
              <p className='text-secondary'>400 University Drive Suite 200 Coral <br /> Gables, FL 33134 USA</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div  className={styles.footerLinks}>
              <ul className="list-unstyled">
              <h5 className='text-secondary'>Links</h5>
                <li><Link  to="/">Home</Link></li>
                <li><Link  to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link  to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
          <div className={styles.footerHelp}>
              <ul className="list-unstyled">
              <h5 className='text-secondary '>Help</h5>
                <li><Link  to="#" className="text-dark">Returns</Link></li>
                <li><Link  to="#" className="text-dark">Privacy Policies</Link></li>
                <li><Link  to="#" className="text-dark">Payment Options</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className={styles.contentHelp}>
              <h5 className='text-secondary pb-3'>Newsletter</h5>
              <Link  to="#" className="text-dark text-decoration-none">naglaa.hassan365@gmail.com</Link>
            </div>
          </div>
        </div>
        <hr className="mb-2" />
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <p className="p-2 m-0">2023 Funiro. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
