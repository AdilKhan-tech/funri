import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';


export default function Dashboard() {
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
                <img src="/images/couch.png" className="img-fluid" alt="Couch" />
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
                <img src="/images/user.svg" alt="User" className="mb-3" style={{width: '80px', height: '80px'}} />
                <h5 className="mb-1" style={{color: '#2f2f2f', fontWeight: '600'}}>John Doe</h5>
                <p className="text-muted mb-0" style={{fontSize: '14px'}}>john@example.com</p>
              </div>
              
              <div className="list-group list-group-flush">
                <a href="/dashboard" className="list-group-item list-group-item-action border-0 px-0 py-3" 
                   style={{color: '#3b5d50', fontWeight: '600', backgroundColor: '#f0f7f4'}}>
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
                   style={{color: '#6a6a6a'}}>
                  <i className="me-2">📍</i> Addresses
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0 px-0 py-3" 
                   style={{color: '#6a6a6a'}}>
                  <i className="me-2">💳</i> Payment Methods
                </a>
                <a href="#" className="list-group-item list-group-item-action border-0 px-0 py-3" 
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
          {/* Welcome Section */}
          <div className="card border-0 shadow-sm mb-4" style={{background: 'linear-gradient(135deg, #3b5d50 0%, #4a7565 100%)', color: '#fff'}}>
            <div className="card-body p-4">
              <h3 className="mb-2" style={{fontWeight: '700'}}>Welcome back, John! 👋</h3>
              <p className="mb-0" style={{opacity: 0.9}}>Here's what's happening with your account today.</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="row g-4 mb-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-1" style={{fontSize: '14px'}}>Total Orders</p>
                      <h3 className="mb-0" style={{color: '#3b5d50', fontWeight: '700'}}>12</h3>
                    </div>
                    <div style={{fontSize: '40px'}}>📦</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-1" style={{fontSize: '14px'}}>Wishlist Items</p>
                      <h3 className="mb-0" style={{color: '#3b5d50', fontWeight: '700'}}>8</h3>
                    </div>
                    <div style={{fontSize: '40px'}}>❤️</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-1" style={{fontSize: '14px'}}>Saved Addresses</p>
                      <h3 className="mb-0" style={{color: '#3b5d50', fontWeight: '700'}}>3</h3>
                    </div>
                    <div style={{fontSize: '40px'}}>📍</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0" style={{color: '#2f2f2f', fontWeight: '600'}}>Recent Orders</h4>
                <a href="#" className="btn btn-sm" style={{backgroundColor: '#3b5d50', color: '#fff'}}>View All</a>
              </div>
              
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead style={{backgroundColor: '#f0f7f4'}}>
                    <tr>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Order ID</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Date</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Items</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Total</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Status</th>
                      <th style={{color: '#3b5d50', fontWeight: '600'}}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{fontWeight: '600', color: '#2f2f2f'}}>#ORD-2024-001</td>
                      <td>Apr 1, 2024</td>
                      <td>3 items</td>
                      <td style={{fontWeight: '600', color: '#3b5d50'}}>$299.99</td>
                      <td><span className="badge" style={{backgroundColor: '#3b5d50', color: '#fff'}}>Delivered</span></td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">View Details</button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: '600', color: '#2f2f2f'}}>#ORD-2024-002</td>
                      <td>Mar 28, 2024</td>
                      <td>2 items</td>
                      <td style={{fontWeight: '600', color: '#3b5d50'}}>$149.50</td>
                      <td><span className="badge" style={{backgroundColor: '#f9bf29', color: '#2f2f2f'}}>Shipped</span></td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">Track Order</button>
                      </td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: '600', color: '#2f2f2f'}}>#ORD-2024-003</td>
                      <td>Mar 25, 2024</td>
                      <td>1 item</td>
                      <td style={{fontWeight: '600', color: '#3b5d50'}}>$89.99</td>
                      <td><span className="badge" style={{backgroundColor: '#6c757d', color: '#fff'}}>Processing</span></td>
                      <td>
                        <button className="btn btn-sm btn-outline-secondary">View Details</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="mb-3" style={{color: '#2f2f2f', fontWeight: '600'}}>Manage Addresses</h5>
                  <p className="text-muted mb-3" style={{fontSize: '14px'}}>Add, edit or delete your delivery addresses</p>
                  <button className="btn" style={{backgroundColor: '#3b5d50', color: '#fff'}}>Manage Addresses</button>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <h5 className="mb-3" style={{color: '#2f2f2f', fontWeight: '600'}}>Payment Methods</h5>
                  <p className="text-muted mb-3" style={{fontSize: '14px'}}>Update your payment information</p>
                  <button className="btn" style={{backgroundColor: '#3b5d50', color: '#fff'}}>Manage Payments</button>
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
