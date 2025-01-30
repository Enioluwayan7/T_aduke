import React from "react";

const Collections = () => {
    //array of image objects with src, alt  and text
    const images = [
        {
            src: './images/Aduke.jpg',
            alt: 'Aduke',
            text: "Aduke black dress with aso-oke Rose"
        },
        {
            src: "./images/Ifelodun.jpg",
            alt: "Ifelodun",
            text: "Ifelodun Maxi Dress with asooke pocket and bush tassel"
        },
        {
            src: './images/Eve.jpg',
            alt: 'Eve',
            text: 'Eve Maxi Dress'
        },
        {
            src: './images/Rere.jpg',
            alt: 'Rere',
            text: 'Rere Maxi'
        },
        {
            src: './images/Funmilayo.jpg',
            alt: 'Funmilayo',
            text: 'FUNMILAYO reflective maxi dress'
        },
    ]
    return (
        <>
        <h1 className="inspired">GET INSPIRED</h1>
        <div className="collections">
            {images.map((image, index) => (
                <div key={index} className="image-container">
                    <img src={image.src} alt={image.alt} className= "col-img" />
                    <div className="overlay-text">{image.text}</div>
                </div>
            ))}
        </div>
        </>
    );
};

/*
        <main className="collections">
            <div>
                <img src="./images/Aduke.jpg" alt="Aduke" className="col-img" />
                <div className="note">
                    Aduke black dress with aso-oke Rose
                </div>
            </div>
            <div>
                <img src="./images/Ifelodun.jpg" alt="Ifelodun" className="col-img" />
                <div className="note">
                    Ifelodun maxi dress with asooke pocket and bush tassel
                </div>
            </div>
            <div>
                <img src="./images/Eve.jpg" alt="Eve" className="col-img" />
                <div className="note">
                    Eve maxi Dress
                </div>
            </div>
            <div>
                <img src="./images/Funmilayo.jpg" alt="Funmilayo" className="col-img" />
                <div  className="note">
                    FUNMILAYO reflective maxi dress
                </div>
            </div>
            <div>
                <img src="./images/Rere.jpg" alt="Rere" className="col-img" />
                <div  className="note">
                    RERE maxi dress
                </div>
            </div>
        </main>
        </>
    )
}
    */

export default Collections;