import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CountriesList from './components/CountriesList';
import CountryView from './components/CountryView';
import Weather from './components/Weather';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [country, setCountry] = useState(null);

    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => setCountries(response.data));
    }, []);

    const filterCountries = (event) => {
        const filteredCountries = event.target.value.length > 0
            ? countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase()))
            : [];

        setFilteredCountries(filteredCountries);

        if (filteredCountries.length === 1) {
            setCountry(filteredCountries[0]);
        } else {
            setCountry(null);
        }
    };

    return (
        <div>
            find for countries <input onChange={filterCountries}/>
            <CountriesList
                filteredCountries={filteredCountries}
                countryChangeHandler={(country) => setCountry(country)}
            />
            <CountryView country={country}/>
            <Weather country={country} apiKey={process.env.REACT_APP_API_KEY}/>
        </div>
    );
}

export default App;
