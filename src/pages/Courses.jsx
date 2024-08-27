import React from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const courses = [
    { id: '1', title: 'React Basics', description: 'Learn the basics of React.' },
    { id: '2', title: 'Advanced CSS', description: 'Master advanced CSS techniques.' },
    { id: '3', title: 'JavaScript Essentials', description: 'Get started with JavaScript.' },
    { id: '4', title: 'HTML Fundamentals', description: 'Understand the core concepts of HTML.' },
    { id: '5', title: 'CSS Essentials', description: 'Explore advanced CSS styles and layouts.' },
    { id: '6', title: 'Node.js Basics', description: 'Learn the fundamentals of Node.js.' },
    { id: '7', title: 'Express.js Guide', description: 'Master server-side development with Express.js.' },
    { id: '8', title: 'MongoDB Essentials', description: 'Understand MongoDB and NoSQL databases.' },
  ];

  return (
    <div className="courses-page slide-in">
      <h2>All Courses</h2>
      <div className="course-list">
        {courses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
