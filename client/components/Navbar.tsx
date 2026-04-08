"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/admin";
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<string | string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setErrors(null);
    if (!phoneNumber || !password) {
      setErrors(["Please fill in all fields"]);
      return;
    }
    // TODO: Wire up real auth; for now just simulate success
    setLoading(true);
    try {
      window.location.href = callbackUrl;
    } finally {
      setLoading(false);
    }
  };

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
              <div
                data-bs-toggle="modal"
                data-bs-target="#myModal"
                className="cursor d-flex align-items-center mt-2"
                style={{cursor: 'pointer'}}
              >
                <p>
                  <span className="text-white fw-bold me-1">Log in /</span>
                </p>
                <p>
                  <span className="text-white fw-bold">Sign up</span>
                </p>
              </div>
            </li>
            <li>
              <Link className="nav-link" href="/dashboard">
                <img src="/assets/images/user.svg" alt="User" />
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/cart">
                <img src="/assets/images/cart.svg" alt="Cart" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 d-flex justify-content-center">
                <img
                  src="/assets/images/Logo-login.png"
                  className="img-fluid"
                  alt="Logo"
                  style={{ width: "150px", marginInlineStart: "160px" }}
                />
                <button
                  type="button"
                  className="btn-close end-0 me-3 mb-5"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <p className="text-center fw-bold">Let's get started</p>
              <div className="mb-3 d-flex btn-group p-0 justify-content-center gap-4 bg-outline-primary w-75 rounded-5 mx-auto">
                <div
                  className="bg-blue m-1 mx-auto rounded-5 w-75 text-center p-3"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  <span className="text-white fw-bold">Log in</span>
                </div>
                <div
                  className="bg-blue m-1 mx-auto rounded-5 w-75 text-center p-3"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#signinModal"
                >
                  <span className="text-white fw-bold">Sign up</span>
                </div>
              </div>
              <div className="d-flex justify-content-between gap-0 mt-3">
                <input
                  type="tel"
                  className="form-control form-control-lg mb-2 w-75 mx-auto fs-18 rounded-5"
                  placeholder="Enter Your Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <input
                type="password"
                className="form-control form-control-lg mb-3 w-75 mx-auto fs-18 rounded-5"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors && (
                <div className="text-danger text-center mb-2">
                  {Array.isArray(errors) ? errors.join(", ") : errors}
                </div>
              )}
              <div
                role="button"
                className="bg-blue mt-3 mx-auto rounded-5 w-75 text-center p-3 text-white fw-bold"
                onClick={handleSubmit}
              >
                {loading ? "Loading..." : "Continue"}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="modal" id="signinModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="occassion-content modal-content">
              <div className="modal-header border-0 d-flex justify-content-center">
                <img
                  src="/assets/images/user.svg"
                  className="img-fluid"
                  alt="Logo"
                  style={{ width: "150px", marginInlineStart: "160px" }}
                />
                <button
                  type="button"
                  className="btn-close end-0 me-3 mb-5"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <p className="text-center fw-bold">Let's get started</p>
              <div className="mb-3 d-flex btn-group p-0 justify-content-center gap-4 bg-outline-primary w-75 rounded-5 mx-auto">
                <div
                  className="bg-blue m-1 mx-auto rounded-5 w-75 text-center p-3"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                >
                  <span className="text-white fw-bold">Log in</span>
                </div>
                <div
                  className="bg-blue m-1 mx-auto rounded-5 w-75 text-center p-3"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#signinModal"
                >
                  <span className="text-white fw-bold">Sign up</span>
                </div>
              </div>
              <input
                type="text"
                className="form-control form-control-lg w-75 mx-auto fs-18 rounded-5 mt-3"
                placeholder="Enter Your Name"
              />
              <div className="d-flex justify-content-between gap-0 mt-2">
                <input
                  type="tel"
                  className="form-control form-control-lg mb-2 w-75 mx-auto fs-18 rounded-5"
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <input
                type="password"
                className="form-control form-control-lg mb-3 w-75 mx-auto fs-18 rounded-5"
                placeholder="Enter Your Password"
              />
              <div
                role="button"
                className="bg-blue mt-3 mx-auto rounded-5 w-75 text-center p-3 text-white fw-bold"
              >
                Continue
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}
