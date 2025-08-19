import Forecast from '../src/views/forecast/Forecast';
import MySwiper from './views/swiper/Swiper';
import News from '../src/views/news/News';

function App() {
  return (
    <div className="App">
      <MySwiper />
      <News />
      <Forecast />
    </div>
  );
}

export default App;
