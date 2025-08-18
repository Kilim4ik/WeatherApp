import MySwiper from './views/swiper/Swiper';
import News from '../src/views/news/News';
import Cards from './views/weather-cards/Cards';
import { WeatherProvider } from './context/weatherContext';
function App() {
  return (
    <div className="App">
      {/* <MySwiper />
      <News /> */}
      <WeatherProvider>
      <Cards />
      </WeatherProvider>
    </div>
  );
}

export default App;
