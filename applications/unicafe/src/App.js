import React, {useState} from 'react';

const SectionHeader = ({title}) => <h1>{title}</h1>;

const Button = ({title, clickHandler}) => <button onClick={clickHandler}>{title}</button>;

const StatisticLine = ({title, value, format}) => {
    let formattedValue = value;

    if (format === 'percentage') {
        formattedValue += '%';
    }

    return (
        <tr>
            <td>{title}</td>
            <td>{formattedValue}</td>
        </tr>
    );
};

const Statistics = ({stats}) => {
    const totalVotes = stats.good + stats.neutral + stats.bad;

    if (totalVotes === 0) {
        return <p>No feedback given</p>;
    }

    return (
        <table>
            <tbody>
            <StatisticLine title="good" value={stats.good}/>
            <StatisticLine title="neutral" value={stats.neutral}/>
            <StatisticLine title="bad" value={stats.bad}/>
            <StatisticLine title="all" value={totalVotes}/>
            <StatisticLine title="average" value={totalVotes > 0 ? (stats.good - stats.bad) / totalVotes : 0}/>
            <StatisticLine
                title="positive"
                value={totalVotes > 0 ? stats.good / totalVotes * 100 : 0}
                format="percentage"
            />
            </tbody>
        </table>
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
            <SectionHeader title="statistics"/>
            <Statistics stats={{good: good, neutral: neutral, bad: bad}}/>
        </div>
    )
};

export default App;
