import Navbar from '../../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';


export default function Wishlist() {
  const wishlistItems = [
    { id: 1, name: 'Modern Sofa Set', price: 299.99, image: '/assets/images/product-1.png', inStock: true },
    { id: 2, name: 'Dining Table Chair', price: 149.50, image: '/assets/images/product-2.png', inStock: true },
    { id: 3, name: 'Office Desk Lamp', price: 89.99, image: '/assets/images/product-3.png', inStock: false },
    { id: 4, name: 'Bookshelf Unit', price: 199.99, image: '/assets/images/product-1.png', inStock: true },
  ];

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
                   style={{color: '#3b5d50', fontWeight: '600', backgroundColor: '#f0f7f4'}}>
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
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 style={{color: '#2f2f2f', fontWeight: '600', margin: 0}}>My Wishlist</h3>
            <span className="text-muted">{wishlistItems.length} items</span>
          </div>
          
          {wishlistItems.length === 0 ? (
            <div className="card border-0 shadow-sm text-center py-5">
              <div className="card-body">
                <div style={{fontSize: '60px', marginBottom: '20px'}}>❤️</div>
                <h5 className="mb-3">Your wishlist is empty</h5>
                <p className="text-muted mb-4">Save items you love to your wishlist</p>
                <a href="/shop" className="btn" style={{backgroundColor: '#3b5d50', color: '#fff'}}>Start Shopping</a>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="col-md-6 col-lg-4">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="position-relative">
                      <img src={item.image} alt={item.name} className="card-img-top" style={{height: '200px', objectFit: 'cover'}} />
                      <button className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2" 
                              style={{borderRadius: '50%', width: '35px', height: '35px', padding: 0}}>
                        ✕
                      </button>
                    </div>
                    <div className="card-body">
                      <h6 className="card-title mb-2" style={{fontWeight: '600', color: '#2f2f2f'}}>{item.name}</h6>
                      <p className="mb-2" style={{color: '#3b5d50', fontWeight: '700', fontSize: '18px'}}>${item.price}</p>
                      {item.inStock ? (
                        <span className="badge mb-3" style={{backgroundColor: '#3b5d50', color: '#fff'}}>In Stock</span>
                      ) : (
                        <span className="badge mb-3" style={{backgroundColor: '#6c757d', color: '#fff'}}>Out of Stock</span>
                      )}
                      <div className="d-grid gap-2">
                        <button className="btn" style={{backgroundColor: '#3b5d50', color: '#fff'}} 
                                disabled={!item.inStock}>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}
