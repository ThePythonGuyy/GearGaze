import styles from "@/Styles/catalogue.module.css";
import SearchFilter from "./SearchFilter";
import CustomFilter from "./CustomFilter";
import { fetchCars } from "@/utils";
import CarCard from "./CarCard";
// import { useState } from "react";

const Catalogue = async ({searchParams}) => {
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || '',
    year: searchParams?.year || 2022,
    fuel: searchParams?.fuel || '',
    limit: searchParams?.limit || 9,
    model: searchParams?.model || '',
  });
  console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div className={styles.parent}>
      <div className={styles.head}>
        <h1>Car Catalogue</h1>
        <p>Explore out cars you might like</p>
      </div>
      <div className={styles.filters}>
        <div>
          <SearchFilter />
        </div>
        <div className={styles.customFilter}>
          <CustomFilter value="fuel" />
          <CustomFilter value="year" />
        </div>
      </div>
      <div className={isDataEmpty? styles.cars_notFound : styles.cars_list}>
        {!isDataEmpty ? (
          allCars?.map((car, key) => (
            <CarCard Car={car} key = {key} />
          ))
        
        ) : (
          <span >No models found</span>
        )}
      </div>
    </div>
  );
};

export default Catalogue;
