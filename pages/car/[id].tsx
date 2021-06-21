import Image from "next/image";
import Link from "next/link";
import { FaGasPump, FaCarSide } from "react-icons/fa";
import { GiGearHammer, GiSteeringWheel } from "react-icons/gi";

import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import Layout from "../../components/Layout";
import { BASE_API_URL } from "../../config";
import InspectionArea from "../../components/InspectionArea/InspectionArea";

import styles from "./Car.module.css";
import { GetServerSideProps } from "next";

const Car = ({ car, carMedia }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <Layout title={`${car.year} ${car.model.make.name} ${car.model.name} `}>
        <div className={styles.image_style}>
          <Image src={car.model.make.imageUrl} width="auto" height="300" alt={car.model.make.imageUrl} />
        </div>
        <div className={styles.breadcrumb_wrapper}>
          <Link href="/">
            <a>
              <h3>Home &nbsp; &nbsp;</h3>
            </a>
          </Link>
          <p>
            {" "}
            / &nbsp; &nbsp;
            {`${car.model.make.name} ${car.model.name} ${car.year}`}
          </p>
        </div>
        <div className={styles.car_container}>
          <div className={styles.image_wrapper}>
            <div className={styles.sold_style}>SOLD</div>
            <div style={{ width: 600, height: 465 }}>
              <ImageCarousel carMedia={carMedia} />
            </div>
            <div className={styles.overview_wrapper}>
              <div className={styles.overview_text1}>General Information</div>
              <div className={styles.gen_info_wrapper}>
                <p className={styles.geninfo_start}>Make</p>
                <p className={styles.geninfo_end}>{car.model.make.name}</p>
              </div>
              <hr className={styles.geninfo_hr} />
              <div className={styles.gen_info_wrapper}>
                <p className={styles.geninfo_start}>Year</p>
                <p className={styles.geninfo_end}>{car.year}</p>
              </div>
              <hr className={styles.geninfo_hr} />
              <div className={styles.gen_info_wrapper}>
                <p className={styles.geninfo_start}>Mileage</p>
                <p className={styles.geninfo_end}>
                  {car.mileage.toLocaleString()}
                  {car.mileageUnit}
                </p>
              </div>
              <hr className={styles.geninfo_hr} />
              <div className={styles.gen_info_wrapper}>
                <p className={styles.geninfo_start}>Location</p>
                <p className={styles.geninfo_end}>
                  {car.city}, {car.address}, {car.country}
                </p>
              </div>
              <hr className={styles.geninfo_hr} />
              <div className={styles.gen_info_wrapper}>
                <p className={styles.geninfo_start}>Engine Type</p>
                <p className={styles.geninfo_end}>{car.engineType}</p>
              </div>
              <hr className={styles.geninfo_hr} />
              <div className={styles.gen_info_wrapper}>
                <p className={styles.geninfo_start}>Color</p>
                <p className={styles.geninfo_end}>{car.exteriorColor}</p>
              </div>
              <hr className={styles.geninfo_hr} />
              <div className={styles.gen_info_wrapper}>
                <p className={styles.geninfo_start}>Reason for Selling</p>
                <p className={styles.geninfo_end}>{car.reasonForSelling}</p>
              </div>
              <hr className={styles.geninfo_hr} />
            </div>
          </div>
          <div className={styles.details_wrapper}>
            <div className={styles.nameprice_wrapper}>
              <div className={styles.name}>
                {`${car.year} ${car.model.make.name} ${car.model.name} `}
              </div>
              <div className={styles.price}>
                &#8358; {car.price.toLocaleString()}
              </div>
            </div>
            <div className={styles.condition_wrapper}>
              {car.isFeatured && (
                <div className={styles.used_type1}>{"Featured"}</div>
              )}
              <div className={styles.used_type}>
                {capitalizeFirstLetter(car.sellingCondition)}
              </div>
              {car.isFeatured && (
                <div className={styles.used_type1}>
                  {car.model.popular && "Popular"}
                </div>
              )}
            </div>
            <div className={styles.viewer_count}>
              {car.stats ? car.stats.webViewCount : 0} buyers have viewed this
              vehicle.
            </div>
            <div className={styles.overview_wrapper}>
              <div className={styles.overview_text}>Overview</div>
              <div className={styles.overview_details_wrapper}>
                <div className={styles.overview}>
                  <FaCarSide color="#0879c9" fontSize="20" />
                  <p>{car.bodyType.name}</p>
                </div>
                <div className={styles.overview}>
                  <FaGasPump color="#0879c9" fontSize="20" />
                  <p>{capitalizeFirstLetter(car.fuelType)}</p>
                </div>
                <div className={styles.overview}>
                  <GiGearHammer color="#0879c9" fontSize="20" />
                  <p>{capitalizeFirstLetter(car.transmission)}</p>
                </div>
                <div className={styles.overview}>
                  <GiSteeringWheel color="#0879c9" fontSize="20" />
                  <p>{car.model.wheelType}</p>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.overview_text2}>Inspection</div>
              <InspectionArea car={car} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Car;

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { id } = context.query;

  const res = await fetch(`${BASE_API_URL}/car/${id}`);
  const res_1 = await fetch(`${BASE_API_URL}/car_media?carId=${id}`);

  const data = await res.json();
  const data_1 = await res_1.json();

  return {
    props: {
      car: data,
      carMedia: data_1,
    },
  };
};
