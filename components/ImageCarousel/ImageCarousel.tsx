import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import styles from "./ImageCarousel.module.css";

const ImageCarousel = ({ carMedia }) => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    fontSize: 30,
    cursor: "pointer",
    background: "transparent",
    border: "none",
  };

  const indicatorStyles = {
    background: "#fff",
    width: 8,
    height: 8,
    borderRadius: "50%",
    display: "inline-block",
    margin: "0 8px",
    cursor: "pointer",
  };

  return (
    <Carousel
      showThumbs={false}
      swipeable
      emulateTouch
      infiniteLoop
      showArrows
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 15 }as React.CSSProperties}
          >
            <AiFillCaretLeft color="#fff" />
          </button>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 15 }as React.CSSProperties}
          >
            <AiFillCaretRight color="#fff" />
          </button>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: "#000" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {carMedia.carMediaList.map((cml, i) => (
        <div key={i}>
          {cml.type === "image/jpeg" ? (
            <>
              <Image width="600" height="465" src={cml.url} />
              <p className={styles.legend}>{cml.name}</p>
            </>
          ) : (
            cml.type === "video/mp4" && (
              <div>
                <video width="600" height="465" controls autoPlay muted>
                  <source src={cml.url} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
              </div>
            )
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
