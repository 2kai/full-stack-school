import React from 'react';
import Country from "./Country";

const CountryFilter = ({countries, filter}) => {
    const filteredCountries = filter.length > 0
        ? countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
        : [];
    if (filteredCountries.length > 10) {
        return <p>Too many matches, specify another filter</p>;
    } else if (filteredCountries.length > 1) {
        return filteredCountries.map(country => <p>{country.name.common}</p>);
    } else if (filteredCountries.length <= 0) {
        return <p>Nothing is found, specify another filter</p>;
    } else {
        return <Country country={filteredCountries[0]}/>;
    }
};

export default CountryFilter;
