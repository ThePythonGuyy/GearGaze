import Catalogue from "@/Components/Catalogue";
import styles from "./page.module.css";
import Main from "@/Components/Main";
import Head from "next/head";
export default function Home({ searchParams }) {
  return (
    <div className={styles.main_page}>
      <Head>
        <link rel="shortcut icon" href="/facebook.svg" />
      </Head>
      <Main />
      <Catalogue searchParams={searchParams} />
    </div>
  );
}
