'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Contact</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="section-title mb-3">Get In Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <input type="text" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="form-group mb-3">
                  <input type="email" className="form-control" placeholder="Your Email" required />
                </div>
                <div className="form-group mb-3">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 ps-md-5">
              <h2 className="section-title mb-3">Contact Info</h2>
              <p>
                <strong>Address:</strong>
                <br />
                1234 Street Name, City, Country
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                +1 234 567 8900
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                info@furni.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
