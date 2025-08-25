import Forecast from '../src/views/forecast/Forecast';
import MySwiper from './views/swiper/Swiper';
import News from '../src/views/news/News';
import React from 'react';
import Statistic from './components/Statistic';

const App = () => {
  return (
    <div className="app-container">
      <Statistic />
    <MySwiper />
      <News />
      <Forecast />
    </div>
  );
};


export default App;
