import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn React from scratch.',
    affiliateLink: 'https://example.com/course/react-for-beginners'
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript.',
    affiliateLink: 'https://example.com/course/advanced-javascript'
  },
  // Add more courses as needed
];

const CourseList = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
