import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = ({ carMakes }) => {
  return (
    <div className="slide-container">
      <Slide>
        {carMakes.makeList.map((carmake, i) => (
          <div
            key={i}
            className="each-fade"
            style={{ backgroundColor: "#000" }}
          >
            <img
              src={carmake.imageUrl}
              width="100%"
              height="520"
              style={{ objectFit: "contain", backgroundSize: "contain" }}
            />
            <div>
              <p
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 28,
                  letterSpacing: 10,
                }}
              >
                {carmake.name}
              </p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;
