'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function Shop() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getAuthHeaders = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
  };

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_BASE}/products?limit=100`);
      const data = await res.json();
      setProducts(data.data || []);
    } catch (err) {
      console.error('Failed to fetch products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const addToCart = async (productId: number) => {
    try {
      const res = await fetch(`${API_BASE}/cart/add`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ product_id: productId, quantity: 1 }),
      });
      if (res.status === 401) {
        alert('Please login first!');
        return;
      }
      if (res.ok) window.location.href = '/cart';
    } catch (err) {
      console.error('Add to cart failed:', err);
    }
  };

  const getImageUrl = (img: string) => {
    if (!img) return '/assets/images/product-1.png';
    if (img.startsWith('http')) return img;
    return `${API_BASE}${img}`;
  };

  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          {loading ? (
            <p className="text-center py-5">Loading products...</p>
          ) : products.length === 0 ? (
            <p className="text-center py-5">No products available.</p>
          ) : (
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                  <Link className="product-item" href="/cart" onClick={(e) => {
                    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
                    const existing = cart.find((c: any) => c.id === product.id);
                    if (existing) {
                      existing.quantity += 1;
                    } else {
                      cart.push({ id: product.id, name: product.product_name, price: product.price, quantity: 1, image: product.product_image });
                    }
                    localStorage.setItem('cart', JSON.stringify(cart));
                  }}>
                    <img
                      src={getImageUrl(product.product_image)}
                      className="img-fluid product-thumbnail"
                      alt={product.product_name}
                      onError={(e) => { (e.target as HTMLImageElement).src = '/assets/images/product-1.png'; }}
                    />
                    <h3 className="product-title">{product.product_name}</h3>
                    <strong className="product-price">${Number(product.price).toFixed(2)}</strong>
                    <span className="icon-cross">
                      <img src="/assets/images/cross.svg" className="img-fluid" alt="Add to cart" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
