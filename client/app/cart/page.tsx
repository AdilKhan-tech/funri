'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getAuthHeaders = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
  };

  const getImageUrl = (img: string) => {
    if (!img) return '/assets/images/product-1.png';
    if (img.startsWith('http')) return img;
    return `${API_BASE}${img}`;
  };

  const loadCart = () => {
    const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(localCart.map((item: any) => ({
      id: item.id,
      name: item.name || 'Unknown',
      price: Number(item.price) || 0,
      quantity: item.quantity || 1,
      image: getImageUrl(item.image),
    })));
    setLoading(false);
  };

  useEffect(() => { loadCart(); }, []);

  const saveCart = (items: any[]) => {
    localStorage.setItem('cart', JSON.stringify(items));
    setCartItems(items);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updated = cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item);
    saveCart(updated);
  };

  const removeItem = (id: number) => {
    const updated = cartItems.filter(item => item.id !== id);
    saveCart(updated);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5"><div className="intro-excerpt"><h1>Cart</h1></div></div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section before-footer-section">
        <div className="container">
          {loading ? (
            <p className="text-center py-5">Loading cart...</p>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-5">
              <p style={{ fontSize: '60px' }}>🛒</p>
              <h5>Your cart is empty</h5>
              <Link href="/shop" className="btn btn-primary mt-3">Start Shopping</Link>
            </div>
          ) : (
            <>
              <div className="row mb-5">
                <div className="col-md-12">
                  <table className="table site-block-order-table">
                    <thead>
                      <tr>
                        <th>Image</th><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td><img src={item.image} alt={item.name} style={{ width: '80px' }} /></td>
                          <td>{item.name}</td>
                          <td>${item.price.toFixed(2)}</td>
                          <td>
                            <div className="input-group" style={{ width: '120px' }}>
                              <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                              <input type="number" className="form-control text-center" value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} min="1" />
                              <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                          </td>
                          <td>${(item.price * item.quantity).toFixed(2)}</td>
                          <td><button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Remove</button></td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan={4} className="text-end"><strong>Order Total:</strong></td>
                        <td colSpan={2}><strong>${total.toFixed(2)}</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6"><Link href="/shop" className="btn btn-outline-secondary">Continue Shopping</Link></div>
                <div className="col-md-6 text-end"><Link href="/checkout" className="btn btn-primary">Proceed to Checkout</Link></div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
