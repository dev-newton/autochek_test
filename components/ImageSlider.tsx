import React from "react";
import Image from 'next/image'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { CSSProperties } from "react";

const styles={
  image1:{ 
    objectFit: "contain",
    // backgroundSize: "contain" ,
    width: '100%', 
    display:'flex',
    justifyContent:'center'
    }as CSSProperties
} 

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
            <div style={styles.image1}>
            <Image
              src={carmake.imageUrl}
              width="100%"
              height="520"
              alt={carmake.imageUrl}
             
            />
            </div>
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
