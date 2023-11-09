import Catalogue from "@/Components/Catalogue";
import styles from "./page.module.css";
import Main from "@/Components/Main";

export default function Home() {
  return (
    <div className={styles.main_page}>
      <Main />
      <Catalogue />
    </div>
  );
}
