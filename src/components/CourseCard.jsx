import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/3">
      <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-700 mb-4">{course.description}</p>
      <a
        href={course.affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        Learn More
      </a>
    </div>
  );
};

export default CourseCard;
