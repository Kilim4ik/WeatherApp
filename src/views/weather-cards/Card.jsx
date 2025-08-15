import { useEffect, useState } from 'react';
import styles from './Cards.module.scss';
import { createBem } from '@/utils/createBem';
import fetchWeather from '@/api/openWeather';

const bem = createBem('weather-cards', styles);

function timeNow() {
  return new Date().toLocaleTimeString('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Card() {
  const [weather, setWeather] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [cities, setCities] = useState(['Kyiv']);
  const [favorites, setFavorites] = useState([]);
  const [time, setTime] = useState(timeNow());

  const date = new Date();
  const dayOfWeek = date.getDay();

  const getWeather = async () => {
    try {
      const promises = cities.map(city => fetchWeather(city));
      const data = await Promise.all(promises);
      setWeather(data);
    } catch (err) {
      console.error('Failed to fetch weather data:', err);
    }
  };
  useEffect(() => {
    getWeather();
  }, [cities]);

  const handleSearch = async () => {
    const newCity = inputValue.trim();
    if (!newCity || cities.includes(newCity)) return;

    setInputValue('');
    try {
      const newWeather = await fetchWeather(newCity);
      setWeather(prev => [...prev, newWeather]);
      setCities(prev => [...prev, newCity]);
    } catch (err) {
      console.error('Failed to fetch new city weather:', err);
    }
  };
const handleRefresh = () =>{
  getWeather()
  setTime(timeNow())
}
  const handleDelete = (cityName) => {
    setCities(prev => prev.filter(name => name !== cityName));
    setWeather(prev => prev.filter(item => item.name !== cityName));
    setFavorites(prev => prev.filter(name => name !== cityName));
  };

  const handleAddToFavorites = (e, cityName) => {
    const className = bem("icon-heart--active");
    const isActive = e.target.classList.contains(className);

    if (isActive) {
      e.target.classList.remove(className);
      setFavorites(prev => prev.filter(name => name !== cityName));
    } else {
      e.target.classList.add(className);
      setFavorites(prev => [...prev, cityName]);
    }
  };

  if (weather.length === 0) {
    return <p className={bem('loading')}>Loading...</p>;
  }

  return (
    <>
      <div className={bem('search')}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter city"
          className={bem('input')}
        />
        <button onClick={handleSearch} className={bem('button')}>
          Add City
        </button>
      </div>

      <ul className={bem()}>
        {weather.map((item, index) => {
          const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
          const countryName = regionNames.of(item.sys.country);

          const isFavorite = favorites.includes(item.name);

          return (
            <li key={index} className={bem('item')}>
              <div className={bem('country-info-container')}>
                <p className={bem('country-info')}>{item.name}</p>
                <p className={bem('country-info')}>{countryName}</p>
              </div>

              <p className={bem('weather__time')}>{time}</p>

              <div className={bem('button-wrapper')}>
                <button className={bem('button')}>Hourly forecast</button>
                <button className={bem('button')}>Weekly forecast</button>
              </div>

              <div className={bem('date-wrapper')}>
                <p className={bem('date')}>{date.toLocaleDateString('uk-UA')}</p>
                <hr className={bem('date__line')} />
                <p className={bem('date')}>{daysOfWeek[dayOfWeek]}</p>
              </div>

              <div className={bem('img-wrapper')}>
                <img
                  className={bem('img')}
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt="weather icon"
                />
              </div>

              <p className={bem('temperature')}>{item.main.temp.toFixed()}°C</p>

              <div className={bem('icons-wrapper')}>
                <button onClick={handleRefresh} className={`${bem('icon-button')} ${bem('icon-button--spinner')}`}>
                  <svg className={`${bem('icon')} ${bem('icon--spinner')}`}>
                    <use href="/images/weather-cards/sprite.svg#icon-spinner"></use>
                  </svg>
                </button>

                <button
                  onClick={(e) => handleAddToFavorites(e, item.name)}
                  className={`${bem('icon-button')} ${bem('icon-button--heart')} ${isFavorite ? bem('icon-heart--active') : ''}`}
                >
                  <svg className={`${bem('icon')} ${bem('icon--heart')}`}>
                    <use href="/images/weather-cards/sprite.svg#icon-heart"></use>
                  </svg>
                </button>

                <button className={`${bem('button')} ${bem('button-more')}`}>
                  See more
                </button>

                <button
                  onClick={() => handleDelete(item.name)}
                  className={`${bem('icon-button')} ${bem('icon-button--trash')}`}
                >
                  <svg className={`${bem('icon')} ${bem('icon--trash')}`}>
                    <use href="/images/weather-cards/sprite.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
} 