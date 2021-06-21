import Layout from "../components/Layout";
import { BASE_API_URL } from "../config";

import ImageSlider from "../components/ImageSlider";
import CarList from "../components/CarList/CarList";
import { GetServerSideProps } from "next";

export default function Home({ carMakes, carList }) {
  console.log('TEST 1: ',carList )
  return (
    <div>
      <Layout title="Autochek Test">
        <ImageSlider carMakes={carMakes} />
        <CarList carList={carList} />
      </Layout>
    </div>
  );
}

export const getServerSideProps:GetServerSideProps = async () => {
  const res = await fetch(`${BASE_API_URL}/car/search`);
  const res_1 = await fetch(`${BASE_API_URL}/make?popular=true`);


  const carList = await res.json();
  const carMakes = await res_1.json();

  return {
    props: {
      carList,
      carMakes,
    },
  };
};
