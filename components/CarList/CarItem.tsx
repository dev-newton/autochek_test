import Image from "next/image";
import Link from "next/link";

import styles from "./CarList.module.css";

const CarItem = ({ car }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Link href="/car/[id]" as={`/car/${car.id}`}>
      <a>
        <div className={styles.car_item}>
          <div className={styles.car_image_wrapper}>
            <p
              className={
                car.sellingCondition === "local" ? styles.local : styles.foreign
              }
            >
              {car.sellingCondition && capitalizeFirstLetter(car.sellingCondition)}
            </p>
            <Image
              className={styles.car_image}
              src={car.imageUrl}
              width="auto"
              height="auto"
              alt={car.imageUrl}
            />
          </div>
          <hr />
          <p className={styles.car_name}>{car.title}</p>
          <div className={styles.car_price_cover}>
            <p className={styles.car_price}>
              &#8358;{car.marketplacePrice.toLocaleString()}
            </p>
            <p className={styles.car_price_old}>
              &#8358;{car.marketplaceOldPrice.toLocaleString()}
            </p>
          </div>
          <button className={styles.car_button}>ADD TO CART</button>
        </div>
      </a>
    </Link>
  );
};

export default CarItem;
