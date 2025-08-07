import styles from "./main.module.scss"
import { createBem } from '@/utils/createBem';
const bem = createBem('main', styles); //* Створення початкового класу

const Main = () => {
  return (
    <main>
      <section className={bem()}>
        <h1 className={bem("title")}>Weather dashboard</h1>

        <div className={bem("main_info")}>
          <div className={bem("info_text")}>
            <p>Create your personal list of favorite cities and always be aware of the weather.</p>
          </div>

          <div className={bem("info_date")}>
            <p>October 2023</p>
            <p>Friday, 13<sup>th</sup></p>
          </div>
        </div>

        <div className={bem("search_box")}>
          <input className={bem("search_input")} type="text" placeholder="Search location..." />
          <button className={bem("search_button")} type="submit">
            <span role="img" aria-label="search">🔍</span>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;