import { createBem } from "../../utils/createBem";
import styles from './news.module.scss';
import { useEffect, useState } from "react";
const API_KEY = "636bc89e1e7249d39e7b20aeb3c23c27"
const bem = createBem("news", styles); 
import NewsItem from "../../components/NewsItem";

const News = () => {
    const [page, setPage] = useState(1);
    const [news, setNews] = useState([]);

    const handleIncrement = (page) => {
        setPage(page => page + 1);
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://newsapi.org/v2/everything?q=weather&pageSize=4&page=${page}&apiKey=${API_KEY}`);
            const data = await response.json();
            console.log(data);
            setNews(data.articles);
        }
        fetchData();
    }, [page])

    return (
        <section className={bem("section")}>
            <div className="container">
                            <h1 className={bem("title")}>Interacting with our pets</h1>
            <ul className={bem("list")}>
                {news.map((item, index) => {
                    return <NewsItem title={item.title} image={item.urlToImage} url={item.url} key={index} />
                })}
            </ul>
            <button type="button" onClick={handleIncrement}>see more</button>
            </div>
        </section>
    )
}
export default News;
