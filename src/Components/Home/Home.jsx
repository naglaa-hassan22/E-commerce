import React, { useState } from 'react';
import styles from './Home.module.css';
import img1 from '../../Assets/image 106.png';
import img2 from '../../Assets/image 100.png';
import img3 from '../../Assets/image 101.png';
import img4 from '../../Assets/Rectangle 24.png';
import img5 from '../../Assets/Rectangle 25.png';
import img6 from '../../Assets/25a06a33769af9bf5fe8f8ed81ce75d8.png';
import img7 from '../../Assets/Rectangle 24.png';
import imgGrid1 from '../../Assets/Rectangle 36.png';
import imgGrid2 from '../../Assets/Rectangle 38.png';
import imgGridCenter from '../../Assets/Rectangle 40.png';
import imgGrid3 from '../../Assets/Rectangle 43.png';
import imgGrid4 from '../../Assets/Rectangle 45.png';
import imgGrid5 from '../../Assets/Rectangle 37.png';
import imgGrid6 from '../../Assets/f9de6c6ff643cd2e7661215ad26aed46.png';
import imgGrid7 from '../../Assets/Rectangle 41.png';
import imgGrid8 from '../../Assets/Rectangle 44.png';
import Product from '../Product/Product';
import Slider from "react-slick";

export default function Home() {
  const [visibleImages, setVisibleImages] = useState(8);

  const showMoreImages = () => {
    setVisibleImages(prevVisibleImages => prevVisibleImages + 8);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };


  return (
    <>
      {/* <!-- Start Section1 "hero" --!> */}
      <section className={styles.hero}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-sm-6 col-md-6 col-lg-6  d-flex align-items-center justify-content-cente">
                    <div className={styles.box}>
                        <span className="d-block fw-bold">New Arrival</span>
                        <h1>Discover Our <br /> New Collection</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis.
                        </p>
                        <button>BUY Now</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
      {/* <!-- End Section1 "hero" --!> */}

      {/* <!-- Start Section2 "browse" --!> */}
      <section className={`pt-4 mt-4 ${styles.browse}`}>
        <div className="container">
          <div className="row g-4">
            <div className="col">
              <h2 className='text-center'>Browse The Range</h2>
              <p className='text-center pb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <img src={img1} alt="Dining" />
              <span className='d-block fw-bold text-center'>Dining</span>
            </div>
            <div className="col-md-6 col-lg-4">
              <img src={img2} alt="Living" />
              <span className='d-block fw-bold text-center'>Living</span>
            </div>
            <div className="col-md-6 col-lg-4">
              <img src={img3} alt="Bedroom" />
              <span className='d-block text-center'>Bedroom</span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section2 "browse" --!> */}

      {/* <!-- Start Section3 "ourProducts" --!> */}
      <section className={`pt-5 mt-5 ${styles.ourProducts}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className='text-center  pb-5'>Our Products</h2>
              <Product visibleImages={visibleImages} />
              <div className={`text-center  ${styles.btnProducts}`}>
                <button onClick={showMoreImages} className="fw-bold mt-5">
                  Show More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section3 "ourProducts" --!> */}
      
      {/* <!-- Start Section4 "ourStory" --!> */}
      <section className={`pt-5 mt-5 ${styles.ourStory}`}>
        <div className="container">
          <div className="row">
          <div className="col-md-8 col-lg-4 d-flex align-items-center justify-content-center">
            <div className={styles.infoText}>
              <h3>50+ Beautiful rooms <br /> inspiration</h3>
              <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
              <button className={styles.infoBtn}>Explore More</button>
            </div>
          </div>
            <div className="col-md-8 col-lg-4">
            <div className={`position-relative ${styles.imgBox}`}>
                <img src={img4} alt="Rectangle" />
                <div className={styles.textBox}>
                  <p>01 ــــــــ Bed Room <br /><strong>Inner Peace</strong></p>
                  <button className={styles.arrowBox}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-4">
              <div className={styles.slider}>
                <Slider {...settings}>
                  <div>
                    <img src={img5} alt="Living1" />
                  </div>
                  <div>
                    <img src={img6} alt="Living2" />
                  </div>
                  <div>
                    <img src={img7} alt="Living3" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Section4 "ourStory" --!> */}

      {/* <!-- Start Section5 "funiroFurniture" --!> */}
      <section className={`pt-4 mt-5 ${styles.funiroFurniture}`}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title text-center">
                <p>Share your setup with</p>
                <h3 className="pb-4">#FuniroFurniture</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className='col-lg-5'>
              <div className="d-flex flex-wrap">
                <div className={styles.gridItem1}>
                  <img src={imgGrid1} alt="FurnitureImage1" />
                </div>
                <div className={styles.gridItem2}>
                  <img src={imgGrid2} alt="FurnitureImage2" />
                </div>
              </div>
            </div>
            <div className='col-lg-2 d-flex justify-content-center align-items-center'>
              <div className={styles.gridItemCenter}>
                <img src={imgGridCenter} alt="FurnitureImageCenter" />
              </div>
            </div>
            <div className='col-lg-5'>
              <div className="d-flex flex-wrap">
                <div className={styles.gridItem3}>
                  <img src={imgGrid3} alt="FurnitureImage3" />
                </div>
                <div className={styles.gridItem4}>
                  <img src={imgGrid4} alt="FurnitureImage4" />
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className="d-flex flex-wrap">
                <div className={styles.gridItem5}>
                  <img src={imgGrid5} alt="FurnitureImage5" />
                </div>
                <div className={styles.gridItem6}>
                  <img src={imgGrid6} alt="FurnitureImage6" />
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className="d-flex flex-wrap">
                <div className={styles.gridItem7}>
                  <img src={imgGrid7} alt="FurnitureImage7" />
                </div>
                <div className={styles.gridItem8}>
                  <img src={imgGrid8} alt="FurnitureImage8" />
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
      {/* <!-- End Section5 "funiroFurniture" --!> */}
    </>
  );
}
