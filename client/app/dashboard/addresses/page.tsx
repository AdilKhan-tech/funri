import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Addresses() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">



                
                <h1>
                  Modern Interior <span className="d-block">Design Studio</span>
                </h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <p>
                  <Link href="/shop" className="btn btn-secondary me-2">
                    Shop Now
                  </Link>
                  <Link href="#" className="btn btn-white-outline">
                    Explore
                  </Link>
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
      <div className="container py-5">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3 mb-4">
          <div className="card border-0 shadow-sm" style={{backgroundColor: '#fff'}}>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <img src="/assets/images/user.svg" alt="User" className="mb-3" style={{width: '80px', height: '80px'}} />
                <h5 className="mb-1" style={{color: '#2f2f2f', fontWeight: '600'}}>John Doe</h5>
                <p className="text-muted mb-0" style={{fontSize: '14px'}}>john@example.com</p>
              </div>
              
              <div className="list-group list-group-flush">
                <a href="/dashboard" className="list-group-item list-group-item-action border-0 px-0 py-3" 
                   style={{color: '#6a6a6a'}}>
                  <i className="me-2">👤</i> My Account
                </a>
                <a href="/dashboard/orders" className="list-group-item list-group-item-action border-0 px-0 py-3" 
                   style={{color: '#6a6a6a'}}>
                  <i className="me-2">📦</i> My Orders
                </a>
                <a href="/dashboard/wishlist" className="list-group-item list-group-item-action border-0 px-0 py-3" 
                   style={{color: '#6a6a6a'}}>
                  <i className="me-2">❤️</i> Wishlist
                </a>
                <a href="/dashboard/addresses" className="list-group-item list-group-item-action border-0 px-0 py-3" 
                   style={{color: '#3b5d50', fontWeight: '600', backgroundColor: '#f0f7f4'}}>
                  <i className="me-2">📍</i> Addresses
                </a>
                <a href="/dashboard/payments" className="list-group-item list-group-item-action border-0 px-0 py-3" 
                   style={{color: '#6a6a6a'}}>
                  <i className="me-2">💳</i> Payment Methods
                </a>
                <a href="/dashboard/security" className="list-group-item list-group-item-action border-0 px-0 py-3" 
                   style={{color: '#6a6a6a'}}>
                  <i className="me-2">🔐</i> Security
                </a>
                <hr className="my-3" />
                <a href="#" className="list-group-item list-group-item-action border-0 px-0 py-3 text-danger">
                  <i className="me-2">🚪</i> Logout
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 style={{color: '#2f2f2f', fontWeight: '600', margin: 0}}>My Addresses</h3>
            <button className="btn" style={{backgroundColor: '#3b5d50', color: '#fff'}}>+ Add New Address</button>
          </div>
          
          <div className="row g-4">
            {/* Address 1 - Default */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h6 className="mb-0" style={{fontWeight: '600', color: '#2f2f2f'}}>Home</h6>
                    <span className="badge" style={{backgroundColor: '#3b5d50', color: '#fff'}}>Default</span>
                  </div>
                  <div className="mb-3" style={{color: '#6a6a6a', lineHeight: '1.8'}}>
                    <p className="mb-1"><strong>John Doe</strong></p>
                    <p className="mb-1">123 Main Street</p>
                    <p className="mb-1">Apartment 4B</p>
                    <p className="mb-1">New York, NY 10001</p>
                    <p className="mb-0">Phone: +1 234-567-8900</p>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-secondary">Edit</button>
                    <button className="btn btn-sm btn-outline-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Address 2 */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h6 className="mb-0" style={{fontWeight: '600', color: '#2f2f2f'}}>Office</h6>
                  </div>
                  <div className="mb-3" style={{color: '#6a6a6a', lineHeight: '1.8'}}>
                    <p className="mb-1"><strong>John Doe</strong></p>
                    <p className="mb-1">456 Business Ave</p>
                    <p className="mb-1">Suite 200</p>
                    <p className="mb-1">New York, NY 10002</p>
                    <p className="mb-0">Phone: +1 234-567-8901</p>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-secondary">Edit</button>
                    <button className="btn btn-sm btn-outline-danger">Delete</button>
                    <button className="btn btn-sm" style={{backgroundColor: '#3b5d50', color: '#fff'}}>Set as Default</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Address 3 */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h6 className="mb-0" style={{fontWeight: '600', color: '#2f2f2f'}}>Parents House</h6>
                  </div>
                  <div className="mb-3" style={{color: '#6a6a6a', lineHeight: '1.8'}}>
                    <p className="mb-1"><strong>John Doe</strong></p>
                    <p className="mb-1">789 Family Road</p>
                    <p className="mb-1">House No. 12</p>
                    <p className="mb-1">Brooklyn, NY 11201</p>
                    <p className="mb-0">Phone: +1 234-567-8902</p>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-secondary">Edit</button>
                    <button className="btn btn-sm btn-outline-danger">Delete</button>
                    <button className="btn btn-sm" style={{backgroundColor: '#3b5d50', color: '#fff'}}>Set as Default</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
