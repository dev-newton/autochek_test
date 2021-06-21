import { FaStar, FaStarHalf } from "react-icons/fa";
import { TiChevronRight } from "react-icons/ti";

import styles from "./FilterSection.module.css";

const FilterSection = ({ handleChange }) => {
  return (
    <div className={styles.cars_search_wrapper}>
      <p className={styles.search_header_text}>Search Here..</p>
      <div className={styles.search_wrapper}>
        <input
          type="text"
          className={styles.search_input}
          placeholder="Product name..."
          onChange={handleChange}
        />
        <button className={styles.button_wrapper}>
          <TiChevronRight fontSize="28" color="#fff" />
        </button>
      </div>
      <hr className={styles.hr1} />

      <div className={styles.search_section}>
        <p>Price</p>
        <p>Under $1,000</p>
        <p>$1,000 - $5,000</p>
        <p>$5,000 - $10,000</p>
        <p>$10,000 - $20,000</p>
        <p>$20,000 - $30,000</p>
        <p>Over $30,000</p>
      </div>
      <hr className={styles.hr1} />
      <div className={styles.search_section}>
        <p>Discount</p>
        <div className={styles.search_cover}>
          <input type="checkbox" className={styles.search_check} />
          <p>5% or More</p>
        </div>

        <div className={styles.search_cover}>
          <input type="checkbox" className={styles.search_check} />
          <p>10% or More</p>
        </div>
        <div className={styles.search_cover}>
          <input type="checkbox" className={styles.search_check} />
          <p>20% or More</p>
        </div>
        <div className={styles.search_cover}>
          <input type="checkbox" className={styles.search_check} />
          <p>30% or More</p>
        </div>
        <div className={styles.search_cover}>
          <input type="checkbox" className={styles.search_check} />
          <p>50% or More</p>
        </div>
        <div className={styles.search_cover}>
          <input type="checkbox" className={styles.search_check} />
          <p>60% or More</p>
        </div>
      </div>
      <hr className={styles.hr1} />
      <div className={styles.search_section}>
        <p>Customer Review</p>
        <div className={styles.search_cover}>
          <div className={styles.star_wrapper}>
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 15 }}
            />
          </div>
          <p>5.0</p>
        </div>
        <div className={styles.search_cover}>
          <div className={styles.star_wrapper}>
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 15 }}
            />
          </div>
          <p>4.0</p>
        </div>
        <div className={styles.search_cover}>
          <div className={styles.star_wrapper}>
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStarHalf
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 15 }}
            />
          </div>
          <p>3.5</p>
        </div>
        <div className={styles.search_cover}>
          <div className={styles.star_wrapper}>
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 15 }}
            />
          </div>
          <p>3.0</p>
        </div>
        <div className={styles.search_cover}>
          <div className={styles.star_wrapper}>
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStar
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 5 }}
            />
            <FaStarHalf
              color="#FFC107"
              cursor="pointer"
              fontSize="17"
              style={{ marginRight: 15 }}
            />
          </div>
          <p>2.5</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
