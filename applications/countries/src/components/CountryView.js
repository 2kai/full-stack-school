import React from 'react';

const CountryView = ({country}) => {
    if (country) {
        return (
            <div>
                <h2>{country.name.common}</h2>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h3>languages</h3>
                <ul>
                    {Object.keys(country.languages).map(key => <li key={key}>{country.languages[key]}</li>)}
                </ul>
                <img alt={country.name.common} src={country.flags.png}/>
            </div>
        );
    }

    return null;
};

export default CountryView;
