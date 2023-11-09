import React, { useEffect } from "react";
import styles from "@/Styles/carDetailedSpecs.module.css";
import Image from "next/image";
import { generateCarImage } from "@/utils";

function CarDetailedSpecs({ exitCarDetails, Car}) {
  useEffect(() => {
    window.addEventListener("keydown", exitCarDetails);
    return () => {
      removeEventListener("keydown", exitCarDetails);
    };
  }, []);

  const textModify = (text) => {
    return text.replace('_' , ' ');
  }

  return (
    <div className={styles.moreSpecsDialogBox}>
      <div className={styles.moreSpecsDialog}>
        <section className={styles.carModelImage}>
          <div className={styles.carDisplayBg}>
            <Image
              style={{ borderRadius: "15px", position: "absolute" , zIndex: '0'}}
              src="/pattern.png"
              fill
              alt="carDisplay background"
            />
            <div className={styles.carModelView}>
              <Image src={generateCarImage(Car)} fill  />
            </div>
          </div>
          <div className={styles.carModelAngleViews}>
            <div>
              <Image src = {generateCarImage(Car,'29')} fill alt="car view angle" />
            </div>
            <div>
              <Image src = {generateCarImage(Car,'33')} fill alt="car view angle" />
            </div>
            <div>
              <Image src = {generateCarImage(Car,'13')} fill alt="car view angle" />
            </div>
          </div>
        </section>
        <section className={styles.carModelSpecs}>
          <h3>{Car.make} {Car.model}</h3>
          <div>
            { Car && 
            Object.keys(Car).map((spec) => (
              <div key={spec}>
                 <p>{textModify(spec)}</p>
                 <p>{Car[spec]}</p> 
              </div>
            ))}
          </div>
        </section>
        <div className={styles.closeIcon} onClick={() => exitCarDetails(null)} >
          <Image  src='/icons/closeIcon.svg' fill  />
        </div>
      </div>
    </div>
  );
}

export default CarDetailedSpecs;
