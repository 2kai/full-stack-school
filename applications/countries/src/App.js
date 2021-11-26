import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountryFilter from './components/CountryFilter';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => setCountries(response.data));
    }, []);

    return (
        <div>
            find for countries <input value={filter} onChange={(event) => setFilter(event.target.value)}/>
            <CountryFilter countries={countries} filter={filter}/>
        </div>
    );
}

export default App;
