import { createBem } from "../utils/createBem";
import { useState } from "react";
import styles from '../views/news/news.module.scss';
const bem = createBem("news", styles); 

const NewsItem = ({image, title, url}) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  const handleError = () => {
    setImageLoaded(false);
  };

  if (!image || !imageLoaded) return null;
  return (
    <li className={bem("item")}>
      <a href={url}>
        <img src={image} alt={title} className={bem("image")} onError={handleError} />
      </a>
            <p className={bem("description")}>{title}</p>

        </li>
    )
}
export default NewsItem;