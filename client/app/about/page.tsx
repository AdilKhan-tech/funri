import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>About Us</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <img src="/assets/images/img-grid-1.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Our Story</h2>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. 
                Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque 
                habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              </p>
              <p>
                Integer convallis volutpat dui quis scelerisque. Proin eu nulla id dui iaculis accumsan. 
                Sed pretium, nisl in elementum varius, nunc lectus auctor nisi, sed sollicitudin nulla 
                metus a magna.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
