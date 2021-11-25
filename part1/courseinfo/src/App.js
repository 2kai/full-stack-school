import React from 'react';

const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => <p>{props.name} {props.exercises}</p>;

const Content = (props) => props.parts.map(
    (part, index) => <Part key={index} name={part.name} exercises={part.exercises}/>
);

const Total = (props) => <p>Number of exercises {props.number_of_exercises}</p>;

const App = () => {
    const course = 'Half Stack application development';
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    };
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    };
    const part3 = {
        name: 'State of a component',
        exercises: 14
    };

    return (
        <div>
            <Header course={course}/>
            <Content parts={[part1, part2, part3]}/>
            <Total number_of_exercises={[part1, part2, part3].reduce((total, part) => total + part.exercises, 0)}/>
        </div>
    );
};

export default App;
