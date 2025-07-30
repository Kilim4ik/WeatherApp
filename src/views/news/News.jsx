import { createBem } from "../../utils/createBem";
import styles from './news.module.scss';
import { useEffect, useState } from "react";
const API_KEY = "636bc89e1e7249d39e7b20aeb3c23c27"
const bem = createBem("news", styles); 
import NewsItem from "../../components/NewsItem";

const News = () => {
    const newsShown = 4;
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
            const json = await data.json();
            console.log(json);
            setNews(json.articles);
        }
        fetchData();
    }, [])

    return (
        <section className={bem("section")}>
            <h1 className={bem("title")}>Interacting with our pets</h1>
            <ul className={bem("list")}>
                {news.slice(0, newsShown).map((item, index) => {
                    return <NewsItem title={item.title} image={item.urlToImage} url={item.url} key={index} />
                })}
            </ul>
        </section>
    )
}
export default News;
