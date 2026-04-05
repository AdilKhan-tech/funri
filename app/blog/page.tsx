import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'First Time Home Owner Ideas',
      author: 'Kristin Watson',
      date: 'Dec 19, 2021',
      image: '/images/post-1.jpg',
    },
    {
      id: 2,
      title: 'How To Keep Your Furniture Clean',
      author: 'Robert Fox',
      date: 'Dec 15, 2021',
      image: '/images/post-2.jpg',
    },
    {
      id: 3,
      title: 'Small Space Furniture Apartment Ideas',
      author: 'Kristin Watson',
      date: 'Dec 12, 2021',
      image: '/images/post-3.jpg',
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
                <h1>Blog</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="untree_co-section before-footer-section">
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <Link href="#" className="post-thumbnail">
                    <img src={post.image} alt="Image" className="img-fluid" />
                  </Link>
                  <div className="post-content-entry">
                    <h3>
                      <Link href="#">{post.title}</Link>
                    </h3>
                    <div className="meta">
                      <span>
                        by <Link href="#">{post.author}</Link>
                      </span>{' '}
                      <span>
                        on <Link href="#">{post.date}</Link>
                      </span>
                    </div>
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
