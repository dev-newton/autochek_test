import Layout from "../components/Layout";
import { BASE_API_URL } from "../config";

import ImageSlider from "../components/ImageSlider";
import CarList from "../components/CarList/CarList";

export default function Home({ carMakes, carList }) {
  return (
    <div>
      <Layout title="Autochek Test">
        <ImageSlider carMakes={carMakes} />
        <CarList carList={carList} />
      </Layout>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${BASE_API_URL}/make?popular=true`);
  const res_1 = await fetch(`${BASE_API_URL}/car/search`);

  const carMakes = await res.json();
  const carList = await res_1.json();

  return {
    props: {
      carMakes,
      carList,
    },
  };
};
