import { createBem } from "../utils/createBem";
import styles from "./ComponentName.module.scss";

const bem = createBem("header", styles); //* Створення початкового класу

const ComponentName = () => {
  return (
    <header className={bem()}> //* Присвоєння початковго класу 
      <h1 className={bem("title")}>Header</h1> //* Створення вкладеності класу
    </header>
  );
};
