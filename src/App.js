import React from "react";
import "./detailEarphone.css";
import Product from "./components/assets/product-yx1-earphones/desktop/image-product.jpg";
import Gallery1 from "./components/assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import Gallery2 from "./components/assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import Gallery3 from "./components/assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import Headphonexx99 from "./components/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import Headphonexx59 from "./components/assets/product-xx59-headphones/desktop/image-product.jpg";
import Speakerzx9 from "./components/assets/product-zx9-speaker/desktop/image-product.jpg";
import Bringing from "./components/Bringing/Bringing";

const detailEarphone = () => {
  return (
    <div>
      <p> Header Component</p>
      <p> Go Back</p>

      <div className="tabel-1">
        <div className="image-1">
          <img src={Product} alt="img" />
        </div>
        <div className="information">
          <h7>NEW PRODUCT</h7>
          <h1>YXI WIRELESS</h1>
          <h1>EARPHONES</h1>

          <div className="information-2">
            <p>Tailor your listening experience with bespoke dynamic drivers </p>
            <p>from the new YX1 Wireless Earphones. Enjoy incredible </p>
            <p>high-fidelity sound even in noisy environments with its active </p>
            <p>noise cancellation feature. </p>
          </div>

          <div className="ear-price">$ 599</div>

          <div className="cart-button">
            <div className="add-button">
              <div className="counter">
                <div className="counter-min">-</div>
                <div>1</div>
                <div className="counter-max">+</div>
              </div>
            </div>
            <button className="addcart-button">ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className="table-2">
        <div className="colomn">
          <h1 className="table-title">
            FEATURES
          </h1>
          <p className="row-info">
              Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
          </p>
          <p className="row-info">
            The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
          </p>
        </div>

        <div className="colomn">
          <h1 className="table-title">IN THE BOX</h1>
          <p>
            <span className="item">2x</span> Earphone Unit
          </p>
          <p>
            <span className="item">6x</span> Multisize Earplugs
          </p>
          <p>
            <span className="item">1x</span> User Manual
          </p>
          <p>
            <span className="item">1x</span> USB-C Charging Cable
          </p>
          <p>
            <span className="item">1x</span> Travel Pouch
          </p>
        </div>
      </div>

      <div className="table-3">
        <div className="colomn-3">
          <img src={Gallery1} className="gallery1" alt="img" />
          <img src={Gallery2} className="gallery2" alt="img" />
        </div>

        <div>
          <img src={Gallery3} className="gallery3" alt="img" />
        </div>
      </div>

      <div className="table-4">YOU MAY ALSO LIKE</div>

      <div className="box-1">
        <div className="box-2">
          <img src={Headphonexx99} alt="img" className="xx-model" />
          <p className="xx-name">XX99 MARK I</p>
          <button className="addcart-button">SEE PRODUCT</button>
        </div>

        <div className="box-2">
          <img src={Headphonexx59} alt="img" className="xx-model" />
          <p className="xx-name">XX59</p>
          <button className="addcart-button">SEE PRODUCT</button>
        </div>

        <div className="box-2">
          <img src={Speakerzx9} alt="img" className="xx-model" />
          <p className="xx-name">ZX9 SPEAKER</p>
          <button className="addcart-button">SEE PRODUCT</button>
        </div>
      </div>

      <div className="ccd">
        from landing page components
      </div>
      <div>
        <Bringing />
      </div>
      <div>footer</div>
    </div>
  );
};

export default detailEarphone;