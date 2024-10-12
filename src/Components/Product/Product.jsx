import React, { useState, useEffect } from 'react';
import styles from './Product.module.css';
import { useNavigate } from 'react-router-dom';

export default function Product({ visibleImages, startIndex = 0 }) {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    const fetchProducts = async () => {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
    setProducts(data);
    };

    fetchProducts();
    }, []);

    const currentItems = products.slice(startIndex, startIndex + visibleImages);

    const getLabel = (index) => {
        if (index % 4 === 0) return <span className={styles.discount}>30%</span>;
        if (index % 4 === 1) return <span className={styles.discount}>50%</span>;
        if (index % 4 === 3) return <span className={styles.new}>New</span>;
        return null;
    };

    const navigateToProductDetails = (id) => {
    navigate(`/productdetails/${id}`);
    };

return (
    <section>
        <div className="container">
            <div className="row g-4">
            {currentItems.map((product, index) => (
                <div className="col-sm-6 col-md-6 col-lg-3" key={product.id}>
                <div className={styles.item}>
                    <div className="item-image">
                    <img src={product.images[0]} alt={product.title} />
                    </div>
                    <div className={styles.overlay}>
                    <button 
                        className={styles.addToCart} 
                        onClick={() => navigateToProductDetails(product.id)}
                    >
                        Add to Cart
                    </button>
                    <div className={styles.iconContainer}>
                        <span>
                        <i className="fas fa-share"></i>
                        <span>Share</span>
                        </span>
                        <span>
                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                        <span>Compare</span>
                        </span>
                        <span>
                        <i className="fas fa-heart"></i>
                        <span>Like</span>
                        </span>
                    </div>
                    </div>
                    <div className={styles.itemInfo}>
                    <h6>{product.title.slice(0, 25)}{product.title.length > 25 ? '...' : ''}</h6>
                    <span className="d-block text-secondary">
                        <small>{product.category.name}</small>
                    </span>
                    <span className="fw-bold">${product.price}</span>
                    {getLabel(index)}
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>
    );
}
