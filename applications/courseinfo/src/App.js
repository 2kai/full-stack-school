import React from 'react';

const Header = (props) => <h1>{props.course.name}</h1>;

const Part = (props) => <p>{props.name} {props.exercises}</p>;

const Content = (props) => props.course.parts.map(
    (part) => <Part key={part.id} name={part.name} exercises={part.exercises}/>
);

const Total = (props) => <p>
    Number of exercises {props.course.parts.reduce((total, part) => total + part.exercises, 0)}
</p>;

const Course = ({course}) => (
    <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
    </div>
);

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
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
        ]
    };

    return <Course course={course}/>;
};

export default App;
