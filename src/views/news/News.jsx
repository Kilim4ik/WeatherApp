import { createBem } from '../../utils/createBem';
import styles from './news.module.scss';
import { useEffect, useState } from 'react';
const NEWS_API = import.meta.env.VITE_API_KEY;
const bem = createBem('news', styles);
import NewsItem from '../../components/NewsItem';

const News = () => {
  const [pageCards, setPageCards] = useState(1);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleIncrement = () => {
    setPageCards((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=weather&pageSize=4&page=${pageCards}&apiKey=${NEWS_API}`
        );
        const data = await response.json();
        setNews([...news, ...data.articles] || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageCards]);

  return (
    <section className={bem('section')}>
      <div className="container">
        <h1 className={bem('title')}>Interacting with our pets</h1>
        {
          news.length !== 0 && (
                      <ul className={bem('list')}>
            {news.map((item, index) => (
              <NewsItem title={item.title} image={item.urlToImage} url={item.url} key={index} />
            ))}
          </ul> 
          )
        }
        {loading && <div className={styles.loader}></div>}

        <button type="button" className={bem('button')} onClick={handleIncrement}>
          See more
        </button>
      </div>
    </section>
  );
};

export default News;
