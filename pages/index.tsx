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

  const res_1 = await fetch(`${BASE_API_URL}/car/search`);
  const res = await fetch(`${BASE_API_URL}/make?popular=true`);


  const carList = await res_1.json();
  const carMakes = await res.json();

  return {
    props: {
      carList:{ "result":[
        {
        "id": "ITJ3ubSuA",
        "title": "Toyota Camry",
        "imageUrl": "https://storage.googleapis.com/img.autochek.africa/2236c9d4-d869-42f6-a310-7b1b47325621-IMG.jpg",
        "year": 2009,
        "city": "Ikota, Lekki",
        "state": "Lagos",
        "gradeScore": 4.800000190734863,
        "sellingCondition": "foreign",
        "hasWarranty": false,
        "marketplacePrice": 3415000,
        "marketplaceOldPrice": 3115000,
        "hasFinancing": true,
        "mileage": 150429,
        "mileageUnit": "km",
        "installment": 159506,
        "depositReceived": false,
        "loanValue": 3906249,
        "websiteUrl": "https://autochek.africa/ng/car/camry-toyota-ref-ITJ3ubSuA",
        "stats": {
        "webViewCount": 54,
        "webViewerCount": 38,
        "interestCount": 0,
        "testDriveCount": 0,
        "appViewCount": 30,
        "appViewerCount": 11,
        "processedLoanCount": 1
        },
        "bodyTypeId": "8",
        "sold": false,
        "hasThreeDImage": false
        },
        {
          "id": "_j_sH3fA7",
          "title": "Toyota RAV 4",
          "imageUrl": "https://storage.googleapis.com/img.autochek.africa/7a06002d-37ce-4f0f-8dc6-d458873494e8-IMG.jpg",
          "year": 2006,
          "city": "Ikotun",
          "state": "Lagos",
          "gradeScore": 4.800000190734863,
          "sellingCondition": "foreign",
          "hasWarranty": false,
          "marketplacePrice": 8015000,
          "marketplaceOldPrice": 8015000,
          "hasFinancing": false,
          "mileage": 76382,
          "mileageUnit": "km",
          "installment": 0,
          "depositReceived": false,
          "loanValue": 0,
          "websiteUrl": "https://autochek.africa/ng/car/rav-4-toyota-ref-_j_sH3fA7",
          "stats": {
          "webViewCount": 49,
          "webViewerCount": 46,
          "interestCount": 0,
          "testDriveCount": 0,
          "appViewCount": 23,
          "appViewerCount": 21,
          "processedLoanCount": 0
          },
          "bodyTypeId": "3",
          "sold": true,
          "soldDate": "2021-06-21T08:33:04.704Z",
          "hasThreeDImage": false
          },
      ]},
      carMakes,
    
    },
  };
};
