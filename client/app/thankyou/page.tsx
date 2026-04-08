import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Thank You</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center pt-5 pb-5">
              <span className="display-3 thankyou-icon text-primary">
                <i className="fas fa-check-circle"></i>
              </span>
              <h1 className="mb-3 display-4 text-black">Thank You!</h1>
              <p className="mb-4">Your order has been placed successfully.</p>
              <p>
                <Link href="/shop" className="btn btn-primary">
                  Continue Shopping
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
