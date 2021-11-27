import React from 'react';

const CountriesList = ({filteredCountries, countryChangeHandler}) => {
    if (filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length > 1) {
        return filteredCountries.map(
            country =>
                <p key={country.name.common}>{country.name.common}
                    <button onClick={() => countryChangeHandler(country)}>show</button>
                </p>
        );
    } else if (filteredCountries.length <= 0) {
        return <p>Nothing is found, specify another filter</p>;
    }

    return null;
};

export default CountriesList;
