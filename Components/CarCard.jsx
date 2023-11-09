"use client"
import React, { useState } from "react";
import styles from "@/Styles/carCard.module.css";
import { calCarRent, generateCarImage } from "@/utils";
import Image from "next/image";
import ButtonBlue from "./ButtonBlue";
import CarDetailedSpecs from "./CarDetailedSpecs";
import { enableBodyScroll, disableBodyScroll } from '@funboxteam/diamonds';

export default function CarCard({ Car }) {
  const carRent = calCarRent(Car.city_mpg, Car.year);
  const [isOpen, setIsOpen] = useState(false);
  const viewMore = (e) => {
    setIsOpen((prev) => !prev);
    disableBodyScroll({savePosition: true})
  }

  const stylesOverride = {
    width: '100%',
    height: '100%',
    borderRadius: '20px',
  }

  const exitCarDetails = (e) => {

    if (e) {
    if (e.key == 'Escape') {
      console.log(e.key);
        enableBodyScroll();
        setTimeout(() => {
          setIsOpen((prev) => !prev);
        }, 200);
      
     }} else {
       enableBodyScroll();
       setIsOpen((prev) => !prev);
     }
}

  const btn_icon = () => {
    return (
      <span 
      style={{position: 'absolute',
              width: '28px',
              height: '28px',
              right: '7%',
              top: '13%'    
      }}>
        <Image  src='/icons/right_arrow.svg' alt="right arrow" fill />
        </span>
    )
  }
  return (
    <div className={styles.carCard_container}>
      <section className={styles.carCard_content}>
        <h2>
          {Car.make} {Car.model}
        </h2>
      </section>
      <p className={styles.carRentValue}>
        <span className={styles.carRentRupeeSymbol}>₹</span>
        <span className={styles.carRentRupees}>{carRent}</span>
        <span className={styles.carRentSub}>/Day</span>
      </p>
      <div className={styles.carImg_container}>
        <Image src={generateCarImage(Car)} alt="car model" fill priority />
      </div>

      <div className={styles.carSpecs}>
        <div className={styles.carSpecsInfo}>
          <div>
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p>{Car.transmission === "a" ? "automatic" : "manual"}</p>
          </div>
          <div>
            <Image
              src="/tire.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p>{Car.drive.toUpperCase()}</p>
          </div>
          <div>
            <Image src="/gas.svg" width={20} height={20} alt="steering wheel" />
            <p>{Car.city_mpg}</p>
          </div>
        </div>
        <div className={styles.carSpecsViewMore}>
          <ButtonBlue title="View More" style_btn='button_blue' handleClick={viewMore} stylesOverride={stylesOverride} btn_icon={btn_icon} />
        </div>
      </div>
      <div>
        {isOpen && 
         <CarDetailedSpecs exitCarDetails={exitCarDetails} Car={Car} />
        }
      </div>
    </div>
  );
}
