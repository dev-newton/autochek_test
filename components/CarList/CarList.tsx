import { useState } from "react";

import styles from "./CarList.module.css";
import CarItem from "./CarItem";
import FilterSection from "../FilterSection/FilterSection";

const CarList = ({ carList }) => {
  const [search, setSearch] = useState("");

  const allCars = carList.result.filter((car) => {
    return car.title.toLowerCase().includes(search.toLowerCase());
  });

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <>
      <div className={styles.car_list_container}>
        <h1 className={styles.car_list_header}>
          <span className={styles.car_list_header_colored}>O</span>ur{" "}
          <span className={styles.car_list_header_colored}>N</span>ew{" "}
          <span className={styles.car_list_header_colored}>P</span>roducts
        </h1>
      </div>
      <div className={styles.cars_section}>
        <div className={styles.cars_wrapper}>
          <h2>New Brand Autos</h2>
          <div className={styles.car_list_wrapper}>
            {allCars.map((car, i) => (
              <CarItem key={i} car={car} />
            ))}
          </div>
        </div>
        <FilterSection handleChange={handleChange} />
      </div>
    </>
  );
};

export default CarList;
