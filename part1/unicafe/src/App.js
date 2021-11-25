import React, {useState} from 'react';

const SectionHeader = ({title}) => <h1>{title}</h1>;

const Button = ({title, clickHandler}) => <button onClick={clickHandler}>{title}</button>;

const Statistics = ({title, value, type}) => {
    if (type === 'percentage') {
        return (
            <p>{title} {value}%</p>
        );
    }

    return (
        <p>{title} {value}</p>
    );
};

const TotalStatistics = ({stats}) => {
    const totalVotes = stats.good + stats.neutral + stats.bad;

    return (
        <>
            <SectionHeader title="statistics"/>
            <Statistics title="good" value={stats.good}/>
            <Statistics title="neutral" value={stats.neutral}/>
            <Statistics title="bad" value={stats.bad}/>
            <Statistics title="all" value={totalVotes}/>
            <Statistics title="average" value={totalVotes > 0 ? (stats.good - stats.bad) / totalVotes : 0}/>
            <Statistics title="positive" value={totalVotes > 0 ? stats.good / totalVotes : 0} type="percentage"/>
        </>
    );
};

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
            <TotalStatistics stats={{good: good, neutral: neutral, bad: bad}}/>
        </div>
    )
};

export default App;
