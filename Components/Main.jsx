"use client";
import Image from "next/image";
import ButtonBlue from "./ButtonBlue";
import styles from "@/Styles/main.module.css";
import Link from "next/link";

const Main = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const ele = document.getElementById('catalogue');
    ele.scrollIntoView({
        behavior: "smooth",
    })
  };


  return (
    <div className={styles.main}>
      <section className={styles.intro}>
        <h1 className={styles.intro_title}>
          Explore cars of your favourite brands and models with ease
        </h1>
        <p className={styles.intro_desc}>
          Streamline you car rental experience with our effortless booking
          process
        </p>
        <div >
          <ButtonBlue
            title="Explore Cars"
            handleClick={handleScroll}
            style_btn="button_blue"
          />
        </div>
      </section>
      <section className={styles.intro_img_blk}>
        <Image
          src="/hero.png"
          width={700}
          height={440}
          alt="car"
          className={styles.intro_img}
        />

        <div className={styles.intro_img_bg}>
          <Image src="/hero-bg.png" width={1100} height={650} alt="geargaze" />
        </div>
      </section>
    </div>
  );
};

export default Main;
