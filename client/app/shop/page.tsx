import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Shop() {
  const products = [
    { id: 1, name: 'Nordic Chair', price: '$50.00', image: '/assets/images/product-3.png' },
    { id: 2, name: 'Kruzo Aero Chair', price: '$78.00', image: '/assets/images/product-1.png' },
    { id: 3, name: 'Ergonomic Chair', price: '$43.00', image: '/assets/images/product-2.png' },
    { id: 4, name: 'Modern Sofa', price: '$150.00', image: '/assets/images/product-1.png' },
    { id: 5, name: 'Classic Chair', price: '$65.00', image: '/assets/images/product-2.png' },
    { id: 6, name: 'Office Desk', price: '$120.00', image: '/assets/images/product-3.png' },
    { id: 7, name: 'Reading Lamp', price: '$35.00', image: '/assets/images/product-1.png' },
    { id: 8, name: 'Coffee Table', price: '$95.00', image: '/assets/images/product-2.png' },
    { id: 9, name: 'Nordic Chair', price: '$50.00', image: '/assets/images/product-3.png' },
    { id: 10, name: 'Kruzo Aero Chair', price: '$78.00', image: '/assets/images/product-1.png' },
    { id: 11, name: 'Ergonomic Chair', price: '$43.00', image: '/assets/images/product-2.png' },
    { id: 12, name: 'Modern Sofa', price: '$150.00', image: '/assets/images/product-1.png' },
    { id: 13, name: 'Classic Chair', price: '$65.00', image: '/assets/images/product-2.png' },
    { id: 14, name: 'Office Desk', price: '$120.00', image: '/assets/images/product-3.png' },
    { id: 15, name: 'Reading Lamp', price: '$35.00', image: '/assets/images/product-1.png' },
    { id: 16, name: 'Coffee Table', price: '$95.00', image: '/assets/images/product-2.png' },
    { id: 17, name: 'Reading Lamp', price: '$35.00', image: '/assets/images/product-1.png' },
    { id: 18, name: 'Coffee Table', price: '$95.00', image: '/assets/images/product-2.png' },
  ];

  return (
    <>
      <Navbar />

      {/* Start Hero Section */}
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
      {/* End Hero Section */}

      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                <Link className="product-item" href="/cart">
                  <img src={product.image} className="img-fluid product-thumbnail" alt={product.name} />
                  <h3 className="product-title">{product.name}</h3>
                  <strong className="product-price">{product.price}</strong>
                  <span className="icon-cross">
                    <img src="/assets/images/cross.svg" className="img-fluid" alt="Add to cart" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
