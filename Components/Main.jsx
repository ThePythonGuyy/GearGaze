"use client"
import Image from "next/image";
import ButtonBlue from "./ButtonBlue";
import styles from '@/Styles/main.module.css'

const Main = () => {

    const handleScroll = (e) => {
        e.preventDefault();
    }
    
  return (
    <div className={styles.main}>
        <section className={styles.intro}>
            <h1 className={styles.intro_title}>Find, book, rent a car- quick and super easy!</h1>
            <p className={styles.intro_desc}>
                Streamline you car rental experience with our effortless booking process
            </p>
            <ButtonBlue title='Explore Cars' handleClick={handleScroll} style_btn='button_blue' />
        </section>
        <section className={styles.intro_img_blk}>
            <Image src='/hero.png' width={700} height={440} alt='car' className={styles.intro_img} />

            <div className={styles.intro_img_bg}>
                <Image src='/hero-bg.png'  width={1100} height={650} alt="geargaze" />
            </div>    
        </section>
        
    </div>
  )
}



export default Main
