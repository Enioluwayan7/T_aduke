import React, { Fragment } from "react";
import { images } from "../../utils/contants";

const Collections = () => {
  return (
    <Fragment>
      <h1 className="inspired">GET INSPIRED</h1>
      <div className="collections">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.src} alt={image.alt} className="col-img" />
            <div className="overlay-text">{image.text}</div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Collections;
