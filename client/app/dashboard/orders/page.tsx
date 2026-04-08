import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Orders() {
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
                   style={{color: '#3b5d50', fontWeight: '600', backgroundColor: '#f0f7f4'}}>
                  <i className="me-2">📦</i> My Orders
                </a>
                <a href="/dashboard/wishlist" className="list-group-item list-group-item-action border-0 px-0 py-3" 
                   style={{color: '#6a6a6a'}}>
                  <i className="me-2">❤️</i> Wishlist
                </a>
                <a href="/dashboard/addresses" className="list-group-item list-group-item-action border-0 px-0 py-3" 
                   style={{color: '#6a6a6a'}}>
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
          <h3 className="mb-4" style={{color: '#2f2f2f', fontWeight: '600'}}>My Orders</h3>
          
          {/* Order 1 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-bottom py-3">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="d-flex gap-4">
                    <div>
                      <small className="text-muted d-block">Order Placed</small>
                      <strong>April 1, 2024</strong>
                    </div>
                    <div>
                      <small className="text-muted d-block">Total</small>
                      <strong style={{color: '#3b5d50'}}>$299.99</strong>
                    </div>
                    <div>
                      <small className="text-muted d-block">Ship To</small>
                      <strong>John Doe</strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                  <span className="badge" style={{backgroundColor: '#3b5d50', color: '#fff', fontSize: '14px'}}>Delivered</span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img src="/assets/images/product-1.png" alt="Product" className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                  <h6 className="mb-1" style={{fontWeight: '600'}}>Modern Sofa Set</h6>
                  <p className="text-muted mb-1" style={{fontSize: '14px'}}>Color: Gray | Size: Large</p>
                  <p className="mb-0"><strong style={{color: '#3b5d50'}}>$299.99</strong></p>
                </div>
                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                  <button className="btn btn-sm me-2" style={{backgroundColor: '#3b5d50', color: '#fff'}}>View Details</button>
                  <button className="btn btn-sm btn-outline-secondary">Track Package</button>
                </div>
              </div>
            </div>
          </div>

          {/* Order 2 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-bottom py-3">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="d-flex gap-4">
                    <div>
                      <small className="text-muted d-block">Order Placed</small>
                      <strong>March 28, 2024</strong>
                    </div>
                    <div>
                      <small className="text-muted d-block">Total</small>
                      <strong style={{color: '#3b5d50'}}>$149.50</strong>
                    </div>
                    <div>
                      <small className="text-muted d-block">Ship To</small>
                      <strong>John Doe</strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                  <span className="badge" style={{backgroundColor: '#f9bf29', color: '#2f2f2f', fontSize: '14px'}}>Shipped</span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img src="/assets/images/product-2.png" alt="Product" className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                  <h6 className="mb-1" style={{fontWeight: '600'}}>Dining Table Chair</h6>
                  <p className="text-muted mb-1" style={{fontSize: '14px'}}>Color: Brown | Material: Wood</p>
                  <p className="mb-0"><strong style={{color: '#3b5d50'}}>$149.50</strong></p>
                </div>
                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                  <button className="btn btn-sm me-2" style={{backgroundColor: '#3b5d50', color: '#fff'}}>View Details</button>
                  <button className="btn btn-sm btn-outline-secondary">Track Package</button>
                </div>
              </div>
            </div>
          </div>

          {/* Order 3 */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-header bg-white border-bottom py-3">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <div className="d-flex gap-4">
                    <div>
                      <small className="text-muted d-block">Order Placed</small>
                      <strong>March 25, 2024</strong>
                    </div>
                    <div>
                      <small className="text-muted d-block">Total</small>
                      <strong style={{color: '#3b5d50'}}>$89.99</strong>
                    </div>
                    <div>
                      <small className="text-muted d-block">Ship To</small>
                      <strong>John Doe</strong>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                  <span className="badge" style={{backgroundColor: '#6c757d', color: '#fff', fontSize: '14px'}}>Processing</span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <img src="/assets/images/product-3.png" alt="Product" className="img-fluid rounded" />
                </div>
                <div className="col-md-6">
                  <h6 className="mb-1" style={{fontWeight: '600'}}>Office Desk Lamp</h6>
                  <p className="text-muted mb-1" style={{fontSize: '14px'}}>Color: Black | Type: LED</p>
                  <p className="mb-0"><strong style={{color: '#3b5d50'}}>$89.99</strong></p>
                </div>
                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                  <button className="btn btn-sm me-2" style={{backgroundColor: '#3b5d50', color: '#fff'}}>View Details</button>
                  <button className="btn btn-sm btn-outline-secondary" disabled>Track Package</button>
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
