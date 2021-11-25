import React from 'react';

const CourseHeader = ({course}) => <h2>{course.name}</h2>;

const Part = ({name, exercises}) => <p>{name} {exercises}</p>;

const Content = ({course}) => course.parts.map(
    ({id, name, exercises}) => <Part key={id} name={name} exercises={exercises}/>
);

const Total = ({course}) => <p>
    <strong>total of {course.parts.reduce((total, {exercises}) => total + exercises, 0)} exercise(s)</strong>
</p>;

const Course = ({course}) => (
    <div>
        <CourseHeader course={course}/>
        <Content course={course}/>
        <Total course={course}/>
    </div>
);

export default Course;
