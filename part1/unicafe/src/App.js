import React, {useState} from 'react';

const SectionHeader = ({title}) => <h1>{title}</h1>;

const Button = ({title, clickHandler}) => <button onClick={clickHandler}>{title}</button>;

const Statistics = ({title, value}) => <p>{title} {value}</p>;

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <SectionHeader title="give feedback"/>
            <Button title="good" clickHandler={() => setGood(good + 1)}/>
            <Button title="neutral" clickHandler={() => setNeutral(neutral + 1)}/>
            <Button title="bad" clickHandler={() => setBad(bad + 1)}/>
            <SectionHeader title="statistics"/>
            <Statistics title="good" value={good}/>
            <Statistics title="neutral" value={neutral}/>
            <Statistics title="bad" value={bad}/>
        </div>
    )
};

export default App;
