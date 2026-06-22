'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  const getAuthHeaders = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
  };

  useEffect(() => {
    fetch(`${API_BASE}/products?limit=6`)
      .then(res => res.json())
      .then(data => setProducts(data.data || []))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const addToCart = (product: any) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find((c: any) => c.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id: product.id, name: product.product_name, price: product.price, quantity: 1, image: product.product_image });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = '/cart';
  };

  const getImageUrl = (img: string) => {
    if (!img) return '/assets/images/product-1.png';
    if (img.startsWith('http')) return img;
    return `${API_BASE}${img}`;
  };

  const featuredProducts = products.slice(0, 3);
  const popularProducts = products.slice(3, 6).length > 0 ? products.slice(3, 6) : products.slice(0, 3);

  return (
    <>
      <Navbar />

      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Modern Interior <span className="d-block">Design Studio</span></h1>
                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <p>
                  <Link href="/shop" className="btn btn-secondary me-2">Shop Now</Link>
                  <Link href="#" className="btn btn-white-outline">Explore</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="/assets/images/couch.png" className="img-fluid" alt="Couch" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Product Section */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
              <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <p><Link href="/shop" className="btn">Explore</Link></p>
            </div>

            {featuredProducts.map((product) => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <div className="product-item">
                  <img
                    src={getImageUrl(product.product_image)}
                    className="img-fluid product-thumbnail"
                    alt={product.product_name}
                    onError={(e) => { (e.target as HTMLImageElement).src = '/assets/images/product-1.png'; }}
                  />
                  <h3 className="product-title">{product.product_name}</h3>
                  <strong className="product-price">${Number(product.price).toFixed(2)}</strong>
                  <button className="icon-cross" onClick={() => addToCart(product)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Add to cart" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Start Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon"><img src="/assets/images/truck.svg" alt="Image" className="imf-fluid" /></div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon"><img src="/assets/images/bag.svg" alt="Image" className="imf-fluid" /></div>
                    <h3>Easy to Shop</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon"><img src="/assets/images/support.svg" alt="Image" className="imf-fluid" /></div>
                    <h3>24/7 Support</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon"><img src="/assets/images/return.svg" alt="Image" className="imf-fluid" /></div>
                    <h3>Hassle Free Returns</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-wrap"><img src="/assets/images/why-choose-us-img.jpg" alt="Image" className="img-fluid" /></div>
            </div>
          </div>
        </div>
      </div>

      {/* Start We Help Section */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1"><img src="/assets/images/img-grid-1.jpg" alt="Untree.co" /></div>
                <div className="grid grid-2"><img src="/assets/images/img-grid-2.jpg" alt="Untree.co" /></div>
                <div className="grid grid-3"><img src="/assets/images/img-grid-3.jpg" alt="Untree.co" /></div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
              <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
              <ul className="list-unstyled custom-list my-4">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
              <p><Link href="#" className="btn">Explore</Link></p>
            </div>
          </div>
        </div>
      </div>

      {/* Start Popular Product */}
      <div className="popular-product">
        <div className="container">
          <div className="row">
            {popularProducts.map((product) => (
              <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                <div className="product-item-sm d-flex">
                  <div className="thumbnail">
                    <img
                      src={getImageUrl(product.product_image)}
                      alt={product.product_name}
                      className="img-fluid"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/assets/images/product-1.png'; }}
                    />
                  </div>
                  <div className="pt-3">
                    <h3>{product.product_name}</h3>
                    <p>{product.description ? product.description.slice(0, 60) + '...' : 'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio'}</p>
                    <p><Link href="/shop">Read More</Link></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Start Testimonial Slider */}
      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center"><h2 className="section-title">Testimonials</h2></div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">
                <div id="testimonial-nav">
                  <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                  <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
                </div>
                <div className="testimonial-slider">
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>&ldquo;Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.&rdquo;</p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic"><img src="/assets/images/person-1.png" alt="Maria Jones" className="img-fluid" /></div>
                            <h3 className="font-weight-bold">Maria Jones</h3>
                            <span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Start Blog Section */}
      <div className="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6"><h2 className="section-title">Recent Blog</h2></div>
            <div className="col-md-6 text-start text-md-end"><Link href="/blog" className="more">View All Posts</Link></div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <Link href="#" className="post-thumbnail"><img src="/assets/images/post-1.jpg" alt="Image" className="img-fluid" /></Link>
                <div className="post-content-entry">
                  <h3><Link href="#">First Time Home Owner Ideas</Link></h3>
                  <div className="meta"><span>by <Link href="#">Kristin Watson</Link></span> <span>on <Link href="#">Dec 19, 2021</Link></span></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <Link href="#" className="post-thumbnail"><img src="/assets/images/post-2.jpg" alt="Image" className="img-fluid" /></Link>
                <div className="post-content-entry">
                  <h3><Link href="#">How To Keep Your Furniture Clean</Link></h3>
                  <div className="meta"><span>by <Link href="#">Robert Fox</Link></span> <span>on <Link href="#">Dec 15, 2021</Link></span></div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <Link href="#" className="post-thumbnail"><img src="/assets/images/post-3.jpg" alt="Image" className="img-fluid" /></Link>
                <div className="post-content-entry">
                  <h3><Link href="#">Small Space Furniture Apartment Ideas</Link></h3>
                  <div className="meta"><span>by <Link href="#">Kristin Watson</Link></span> <span>on <Link href="#">Dec 12, 2021</Link></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
