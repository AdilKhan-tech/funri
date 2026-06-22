'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function Checkout() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [placing, setPlacing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', city: '', state: '', zipCode: '', phone: '', email: '',
  });

  const getAuthHeaders = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
  };

  const getImageUrl = (img: string) => {
    if (!img) return '/assets/images/product-1.png';
    if (img.startsWith('http')) return img;
    return `${API_BASE}${img}`;
  };

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(localCart.map((item: any) => ({
      name: item.name || 'Unknown',
      price: Number(item.price) || 0,
      quantity: item.quantity || 1,
    })));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPlacing(true);
    try {
      await fetch(`${API_BASE}/email/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData, cartItems, total }),
      });
    } catch (err) {
      console.error('Email failed:', err);
    } finally {
      localStorage.removeItem('cart');
      window.location.href = '/thankyou';
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5"><div className="intro-excerpt"><h1>Checkout</h1></div></div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="section-title mb-3">Billing Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3"><input type="text" name="firstName" className="form-control" placeholder="First Name *" value={formData.firstName} onChange={handleChange} required /></div>
                  <div className="col-md-6 mb-3"><input type="text" name="lastName" className="form-control" placeholder="Last Name *" value={formData.lastName} onChange={handleChange} required /></div>
                </div>
                <div className="mb-3"><input type="text" name="address" className="form-control" placeholder="Address *" value={formData.address} onChange={handleChange} required /></div>
                <div className="row">
                  <div className="col-md-6 mb-3"><input type="text" name="city" className="form-control" placeholder="City *" value={formData.city} onChange={handleChange} required /></div>
                  <div className="col-md-6 mb-3"><input type="text" name="state" className="form-control" placeholder="State *" value={formData.state} onChange={handleChange} required /></div>
                </div>
                <div className="mb-3"><input type="text" name="zipCode" className="form-control" placeholder="ZIP Code *" value={formData.zipCode} onChange={handleChange} required /></div>
                <div className="mb-3"><input type="tel" name="phone" className="form-control" placeholder="Phone *" value={formData.phone} onChange={handleChange} required /></div>
                <div className="mb-3"><input type="email" name="email" className="form-control" placeholder="Email *" value={formData.email} onChange={handleChange} required /></div>
                <button type="submit" className="btn btn-primary" disabled={placing}>{placing ? 'Placing Order...' : 'Place Order'}</button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="p-4 border rounded">
                <h3>Your Order</h3>
                <table className="table site-block-order-table">
                  <thead><tr><th>Product</th><th>Total</th></tr></thead>
                  <tbody>
                    {cartItems.map((item, i) => (
                      <tr key={i}><td>{item.name} x {item.quantity}</td><td>${(item.price * item.quantity).toFixed(2)}</td></tr>
                    ))}
                    <tr><td><strong>Order Total:</strong></td><td><strong>${total.toFixed(2)}</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
