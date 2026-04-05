import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      icon: 'fa-truck',
      title: 'Fast & Free Shipping',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.',
    },
    {
      icon: 'fa-box',
      title: 'Easy to Shop',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.',
    },
    {
      icon: 'fa-headset',
      title: '24/7 Support',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.',
    },
    {
      icon: 'fa-undo',
      title: 'Hassle Free Returns',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Services</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 mb-4">
                <div className="service d-flex">
                  <div className="service-icon">
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
