import React from 'react';

const Header = ({title}) => <h1>{title}</h1>;

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

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1,
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2,
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3,
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4,
                },
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1,
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2,
                },
            ]
        },
    ];

    return [
        <Header title="Web development curriculum"/>,
        ...courses.map((course) => <Course course={course}/>)
    ];
};

export default App;
