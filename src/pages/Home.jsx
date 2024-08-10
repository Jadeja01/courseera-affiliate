import React from 'react';
import CourseList from '../components/CourseList';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="jumbotron jumbotron-fluid text-white bg-dark">
        <div className="container text-center">
          <h1 className="display-4">Learn New Skills, Anytime, Anywhere</h1>
          <p className="lead">Explore our wide range of courses from top providers and enhance your knowledge today!</p>
          <a href="#courses" className="my-2 btn btn-primary btn-lg mt-3">Browse Courses</a>
        </div>
      </div>

      {/* Featured Courses Section */}
      <section id="courses" className="container mt-5">
        <h2 className="text-center mb-4">Featured Courses</h2>
        <CourseList />
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5 mt-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Learners Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"This platform has completely transformed the way I learn. The courses are top-notch and the instructors are fantastic!"</p>
                  <p className="text-right"><strong>- John Doe</strong></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"I've gained so much confidence in my skills thanks to the courses offered here. Highly recommended!"</p>
                  <p className="text-right"><strong>- Jane Smith</strong></p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"The flexibility of learning at my own pace has been a game changer for me. I can learn whenever and wherever I want."</p>
                  <p className="text-right"><strong>- Mary Johnson</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Call-to-Action */}
      <section className="container text-center my-5">
        <h2>Stay Updated with Our Latest Courses</h2>
        <p>Subscribe to our newsletter to receive the latest course updates, offers, and news directly in your inbox.</p>
        <form className="form-inline justify-content-center mt-3">
          <div className="form-group mb-2">
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <button type="submit" className="btn btn-primary mb-2 ml-2">Subscribe</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 Course Affiliate Marketing. All Rights Reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="/" className="text-white">Home</a></li>
            <li className="list-inline-item"><a href="/about" className="text-white">About</a></li>
            <li className="list-inline-item"><a href="/contact" className="text-white">Contact</a></li>
            <li className="list-inline-item"><a href="/privacy" className="text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
