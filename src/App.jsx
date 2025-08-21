import Forecast from '../src/views/forecast/Forecast';
import MySwiper from './views/swiper/Swiper';
import News from '../src/views/news/News';
import React from 'react';
import Statistic from './components/Statistic';
import Cards from './views/weather-cards/Cards';
import { WeatherContext } from './context/weatherContext';
import { useContext } from 'react';
const App = () => {
  const {weeklyForecast} = useContext(WeatherContext)
  return (
    <div className="app-container">
      {/* <Statistic /> */}
    {/* <MySwiper />
      <News /> */}
      <Cards />
      {
        weeklyForecast && <Forecast/>
      }
    </div>
  );
};


export default App;
