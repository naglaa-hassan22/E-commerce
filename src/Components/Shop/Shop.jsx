import React, { useState } from 'react';
import style from './Shop.module.css';
import Product from '../Product/Product';
import { BsViewList } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";
import { BsGridFill } from "react-icons/bs";
import Support from '../Support/Support';
import logo from '../../Assets/House_Logos.png';

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const totalPages = 10; 
  const startIndex = (currentPage - 1) * itemsPerPage;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    pageNumbers.push(
      <li key={1} className={`page-item ${currentPage === 1 ? 'active' : ''}`}>
        <button className={`page-link ${style.pageLink}`} onClick={() => setCurrentPage(1)}>1</button>
      </li>
    );
    pageNumbers.push(
      <li key={2} className={`page-item ${currentPage === 2 ? 'active' : ''}`}>
        <button className={`page-link ${style.pageLink}`} onClick={() => setCurrentPage(2)}>2</button>
      </li>
    );

    if (currentPage > 2) {
      pageNumbers.push(
        <li key={currentPage} className={`page-item ${currentPage > 2 ? 'active' : ''}`}>
          <button className={`page-link ${style.pageLink}`} onClick={() => setCurrentPage(currentPage)}>
            {currentPage}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <>
      {/* Start Section1 "banner" */}
      <section className={style.banner}>
        <div className="container">
          <div className="row">
            <div className="col">
              <img src={logo} alt="logo" className={style.logo}/>
              <h2 className={style.title}>Shop</h2>
              <div className='text-center fw-bold'>
                <span>Home </span>
                <span> <i className="fa-solid fa-chevron-right"></i></span>
                <span> Shop</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Section1 "banner" */}

      {/* Start Section2 "filter" */}
      <section className={`mb-5 ${style.filter}`}>
        <div className="container">
          <div className="row align-items-center"> 
            <div className="col-md-6 col-lg-6"> 
              <div className={style.filterLeft}>
                <VscSettings className={style.filterIcons}/>
                <span className='mx-3'>Filter</span>
                <BsGridFill className={style.filterIcons} />
                <BsViewList className={style.filterIcons} />
                <span className='fw-bold text-secondary mx-2'>| </span>
                <span> Showing {startIndex + 1}–{Math.min(startIndex + itemsPerPage, 32)} of 32 results</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 text-end">
              <div className={style.filterRight}>
                <span className='p-2'>Show</span>
                <span className={style.box}>16</span>
                <span className='p-2'>Sort by</span>
                <span className={style.box}>Default</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Section2 "filter" */}

      {/* Start Section3 "products" */}
      <section className={`pt-4 mt-5 ${style.products}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <Product visibleImages={itemsPerPage} startIndex={startIndex} />
            </div>
          </div>
          <nav>
            <ul className="pagination justify-content-center p-4 mt-5">
              {renderPageNumbers()}
              <li className="page-item">
                <button className={`page-link ${style.pageLink}`} onClick={handleNextPage}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {/* End Section3 "products" */}

      {/* Start Section4 "support" */}
      <Support />
      {/* End Section4 "support" */}
    </>
  );
}
