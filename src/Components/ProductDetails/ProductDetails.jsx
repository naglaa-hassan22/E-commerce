import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useParams, Link } from 'react-router-dom';
import style from './ProductDetails.module.css';
import Product from '../Product/Product';
import CartSidebar from '../CartSidebar/CartSidebar';
import { useCart } from '../../CartContext'; 

export default function ProductDetails() {
  const { addToCart } = useCart();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [visibleImages, setVisibleImages] = useState(4); 
  const [cartItems, setCartItems] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false); 
  let { id } = useParams();

  const showMoreImages = () => {
    setVisibleImages(prevVisibleImages => prevVisibleImages + 4);
  };

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => {
        const data = response.data;
        setProduct(data);
        setSelectedImage(data.images[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);
  const postToCart = (productId, quantity) => {
    setShowAlert(true);
    const newItem = {
      id: product.id, 
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: quantity,
    };

    addToCart(newItem); 
    setSidebarVisible(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  const CartActions = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    
    const handleQuantityChange = (delta) => {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity + delta;
        return newQuantity >= 1 ? newQuantity : 1;
      });
    };
  
    return (
      <div className={style.cartActions}>
        <div className={style.quantityWrapper}>
          <button className={style.decrement} onClick={() => handleQuantityChange(-1)}>-</button>
          <input type="number" className={style.quantity} value={quantity} readOnly />
          <button className={style.increment} onClick={() => handleQuantityChange(1)}>+</button>
          <button 
            onClick={() => product.id && postToCart(product.id, quantity)} 
            className={style.addTcart}>
            Add to cart
          </button>
          <button className={style.compare}> + Compare</button>
        </div>
      </div>
    );
  };
  

  return (
    <>
      {showAlert && (
        <div className="alert alert-success fixed-top text-center w-25 mx-auto" role="alert">
          Product added to cart successfully!
        </div>
      )}
      {loading ? (
        <div className="d-flex justify-content-center">
          <InfinitySpin
            visible={true}
            width="200"
            color="#0d6efd"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <>
          {/* Start Section1 "banner" */}
          <section className={style.banner}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className='p-4'>
                    <span className='mx-2 text-secondary'>Home</span>
                    <span><i className="fa-solid fa-chevron-right"></i></span>
                    <span className='mx-2 text-secondary'> Shop</span>
                    <span><i className="fa-solid fa-chevron-right"></i></span>
                    <span className='fw-bold text-secondary mx-4 fs-4'>| </span>
                    <span className='fs-5 '>{product.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section2 "banner" */}

          {/* Start Section2 "details" */}
          <section className={`pt-4 mt-4 ${style.details}`}>
            <div className="container">
              <div className="row">
                <div className='col-6 col-lg-2'>
                  {product.images && product.images.map((image, index) => (
                    <div key={index} className='mb-2'>
                      <img 
                        src={image} 
                        alt={`product-image-${index}`} 
                        className={style.smallImage} 
                        onClick={() => setSelectedImage(image)} 
                      />
                    </div>
                  ))}
                </div>
                <div className='col-6 col-lg-5'>
                  <img 
                    src={selectedImage} 
                    alt='selected-product' 
                    className={style.largeImage} 
                  />
                </div>
                <div className='col-12 col-lg-5'>
                  <div className={`px-4 pt-4 ${style.productDetails}`}>
                    <h3 className='h5'>{product.title}</h3>
                    <span className="price text-secondary fw-bold">{product.price}$</span>
                    <div className={style.rating}>
                      <i className="stars fa fa-star rating-color me-2"></i>
                      <i className="stars fa fa-star rating-color me-2"></i>
                      <i className="stars fa fa-star rating-color me-2"></i>
                      <i className="stars fa fa-star rating-color me-2"></i>
                      <i className="stars fa fa-star rating-color me-2"></i>
                      <span className='text-secondary fw-bold'> | </span>
                      <span className="text-secondary"> 5 Customer Reviews</span>
                    </div>
                    <p>{product.description}</p>
                    <div>
                      <span className='d-block'>Size</span>
                      <div className={style.sizeBtns}>
                        <button className='btn'>L</button>
                        <button className='btn'>XL</button>
                        <button className='btn'>XS</button>
                      </div>
                      <span className='mt-3'>Color</span>
                      <div className={style.colorBtns}>
                        <span className={style.purple}></span>
                        <span className={style.black}></span>
                        <span className={style.gold}></span>
                      </div>
                    </div>
                    <CartActions product={product} />
                  </div>
                  <hr />
                  <div className={style.listGroup}>
                    <table className={`table ${style.table}`}>
                      <tbody>
                        <tr>
                          <td>SKU</td>
                          <td>: SS001</td>
                        </tr>
                        <tr>
                          <td>Category</td>
                          <td>: Sofas</td>
                        </tr>
                        <tr>
                          <td>Tags</td>
                          <td>: Sofa, Chair, Home, Shop</td>
                        </tr>
                        <tr>
                          <td>Share</td>
                          <td className='d-flex text-dark'>
                            <span>: <i className="fa-brands fa-facebook r"></i></span>
                            <span><i className="fa-brands fa-linkedin px-2"></i></span>
                            <span><i className="fa-brands fa-square-twitter px-2"></i></span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section2 "details" */}

          {/* Start Section3 "description" */}
          <section className={`mt-5 ${style.description}`}>
            <div className="container">
              <div className="row g-4">
                <div className="col-12">
                  <div className='list-group'>
                    <ul className="list-unstyled d-flex flex-wrap justify-content-center text-center">
                      <li className="nav-item pe-5">
                        <Link className="nav-link active text-dark" to="#">Description</Link>
                      </li>
                      <li className="nav-item pe-5">
                        <Link className="nav-link" to="#">Reviews [5]</Link>
                      </li>
                      <li className="nav-item pe-5">
                        <Link className="nav-link" to="#">Additional Information</Link>
                      </li>
                    </ul>
                  </div>
                  <p className={style.productDescription}>{product.description}</p>
                  <div className="col-6 col-lg-12 d-flex justify-content-center m-auto">
                    <img src={product.images[0]} alt="product" className={style.smallImge} />
                    <img src={product.images[1]} alt="product" className={style.smallImge} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Section3 "description" */}

          {/* Start Section4 "related products" */}
          <section className={`mt-5 pt-4 ${style.relatedProducts}`} 
            onClick={() => window.scrollTo(0, 0)}>
            <div className="container">
              <div className="row">
                <div className="col text-center">
                  <h3 className='pb-5'>Related Products</h3>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Product visibleImages={visibleImages} />
                </div>
              </div>
            </div>
          </section>
          <div className={`text-center  ${style.btnProducts}`}>
            <button onClick={showMoreImages} className="fw-bold mt-5">
              Show More
            </button>
          </div>
          {/* End Section4 "related products" */}
          {sidebarVisible && (
            <CartSidebar 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
              onClose={() => setSidebarVisible(false)} 
            />
          )}
        </>
      )}
    </>
  );
}
