import React from 'react';
import CourseList from '../components/CourseList.jsx';

const Home = () => {
  return (
    <div className="home">
      <h2>Featured Courses</h2>
      <CourseList />
    </div>
  );
};

export default Home;
