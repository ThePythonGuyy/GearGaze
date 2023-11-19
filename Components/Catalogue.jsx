import styles from "@/Styles/catalogue.module.css";
import SearchFilter from "./SearchFilter";
import CustomFilter from "./CustomFilter";
import { fetchCars } from "@/utils";
import CarCard from "./CarCard";
import { fuels, yearsOfProduction } from "@/Constants/details";
import ButtonBlue from "./ButtonBlue";
import ShowMore from "./ShowMore";
// import { useState } from "react";

const Catalogue = async ({ searchParams }) => {
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || "",
    year: searchParams?.year || 2022,
    fuel: searchParams?.fuel || "",
    limit: searchParams?.limit || 9,
    model: searchParams?.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className={styles.parent} id="catalogue">
      <div className={styles.head}>
        <h1>Car Catalogue</h1>
        <p>Explore out cars you might like</p>
      </div>
      <div className={styles.filters}>
        <div>
          <SearchFilter />
        </div>
        {/* <div style={{flexGrow: '1', height: '100%'}}> */}
        <div className={styles.customFilter}>
          <div>
            <CustomFilter title="fuel" options={fuels} />
          </div>
          <div>
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className={isDataEmpty ? styles.cars_notFound : styles.cars_list}>
        {!isDataEmpty ? (
          allCars?.map((car, key) => <CarCard Car={car} key={key} />)
        ) : (
          <span>No models found</span>
        )}
      </div>
      {!isDataEmpty && <ShowMore />}
    </div>
  );
};

export default Catalogue;
