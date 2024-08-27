import React from 'react';
import { useParams } from 'react-router-dom';
import EnrollForm from '../components/EnrollForm';

const courseData = [
  { id: '1', title: 'React Basics', description: 'Learn the basics of React.', objectives: 'Understand the core concepts of React.', prerequisites: 'Basic knowledge of JavaScript.', learn: 'React components, state, props, and hooks.' },
  { id: '2', title: 'Advanced CSS', description: 'Master advanced CSS techniques.', objectives: 'Build advanced layouts and responsive designs.', prerequisites: 'Basic CSS knowledge.', learn: 'Flexbox, Grid, and animations.' },
  { id: '3', title: 'JavaScript Basics', description: 'Get started with JavaScript programming.', objectives: 'Understand JavaScript fundamentals.', prerequisites: 'None.', learn: 'Variables, functions, and control structures.' },
  { id: '4', title: 'HTML Fundamentals', description: 'Understand the core concepts of HTML.', objectives: 'Learn HTML tags and document structure.', prerequisites: 'None.', learn: 'HTML5 tags, forms, and semantic elements.' },
  { id: '5', title: 'CSS Essentials', description: 'Explore advanced CSS styles and layouts.', objectives: 'Develop complex layouts and styles.', prerequisites: 'Basic CSS knowledge.', learn: 'CSS Grid, Flexbox, and advanced selectors.' },
  { id: '6', title: 'Node.js Basics', description: 'Learn the fundamentals of Node.js.', objectives: 'Understand Node.js and its ecosystem.', prerequisites: 'Basic JavaScript knowledge.', learn: 'Asynchronous programming, file system, and npm.' },
  { id: '7', title: 'Express.js Guide', description: 'Master server-side development with Express.js.', objectives: 'Build RESTful APIs with Express.js.', prerequisites: 'Basic Node.js knowledge.', learn: 'Routing, middleware, and error handling.' },
  { id: '8', title: 'MongoDB Essentials', description: 'Understand MongoDB and NoSQL databases.', objectives: 'Learn NoSQL database fundamentals.', prerequisites: 'Basic JavaScript knowledge.', learn: 'MongoDB queries, indexing, and aggregation.' },
];


const CourseDetails = () => {
  const { id } = useParams();
  const course = courseData.find(course => course.id === id) || {};

  return (
    <div className="course-details-page pop-in">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Objectives</h3>
      <p>{course.objectives}</p>
      <h3>Prerequisites</h3>
      <p>{course.prerequisites}</p>
      <h3>What you will learn</h3>
      <p>{course.learn}</p>
      <EnrollForm  course={course.title}/>
    </div>
  );
};

export default CourseDetails;
