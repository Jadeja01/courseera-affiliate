import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn React from scratch with hands-on projects.',
    image: 'https://via.placeholder.com/150',
    affiliateLink: 'https://example.com/course/react-for-beginners'
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Master JavaScript with advanced concepts and best practices.',
    image: 'https://via.placeholder.com/150',
    affiliateLink: 'https://example.com/course/advanced-javascript'
  },
  {
    id: 3,
    title: 'Full-Stack Development',
    description: 'Become a full-stack developer with this comprehensive course.',
    image: 'https://via.placeholder.com/150',
    affiliateLink: 'https://example.com/course/full-stack-development'
  }
  // Add more courses as needed
];

const CourseList = () => {
  return (
    <div className="container">
      <div className="row">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
