import React from "react";

function Collections () {
    return (
        <>
        <h1 className="inspired">GET INSPIRED</h1>
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
            <div className="note">
                <img src="./images/Funmilayo.jpg" alt="Funmilayo" className="col-img" />
                <div>
                    FUNMILAYO reflective maxi dress
                </div>
            </div>
            <div className="note">
                <img src="./images/Rere.jpg" alt="Rere" className="col-img" />
                <div>
                    RERE maxi dress
                </div>
            </div>
        </main>
        </>
    )
}

export default Collections;