import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Weather = ({country, apiKey}) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (country) {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${country.capital},${country.cca2}&units=metric&appid=${apiKey}`;
            axios
                .get(url)
                .then(response => setWeather(response.data))
                .catch(error => console.log(error));
        }
    }, [country, apiKey]);

    if (!country || !weather) {
        return null;
    }

    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            <p><strong>temperature</strong> {weather.main.temp}&#8451;</p>
            <p><strong>weather</strong> {weather.weather[0].main} ({weather.weather[0].description})</p>
            <p>
                <img
                    alt={weather.weather[0].main}
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                />
            </p>
            <p><strong>wind</strong> {weather.wind.speed} m/s, direction {weather.wind.deg}</p>
        </div>
    );
};

export default Weather;
