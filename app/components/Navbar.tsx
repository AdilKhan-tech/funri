'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Furni<span>.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className={`nav-item ${pathname === '/shop' ? 'active' : ''}`}>
              <Link className="nav-link" href="/shop">Shop</Link>
            </li>
            <li className={`nav-item ${pathname === '/about' ? 'active' : ''}`}>
              <Link className="nav-link" href="/about">About us</Link>
            </li>
            <li className={`nav-item ${pathname === '/services' ? 'active' : ''}`}>
              <Link className="nav-link" href="/services">Services</Link>
            </li>
            <li className={`nav-item ${pathname === '/blog' ? 'active' : ''}`}>
              <Link className="nav-link" href="/blog">Blog</Link>
            </li>
            <li className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>
              <Link className="nav-link" href="/contact">Contact us</Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <Link className="nav-link" href="/dashboard">
                <img src="/images/user.svg" alt="User" />
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/cart">
                <img src="/images/cart.svg" alt="Cart" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
