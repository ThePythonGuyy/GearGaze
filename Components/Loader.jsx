import React from "react";
import styles from '@/Styles/loader.module.css'
export default function Loader() {
  return (
    <div className={styles.loading_wave} >
      <div className={styles.loading_bar}></div>
      <div className={styles.loading_bar}></div>
      <div className={styles.loading_bar}></div>
      <div className={styles.loading_bar}></div>
    </div>
  );
}
