import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={course.image} className="card-img-top" alt={course.title} />
        <div className="card-body">
          <h5 className="card-title">{course.title}</h5>
          <p className="card-text">{course.description}</p>
          <a href={course.affiliateLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
