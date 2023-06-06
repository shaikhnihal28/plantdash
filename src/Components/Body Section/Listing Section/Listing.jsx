import React from "react";
import "./listing.scss";

// images
import Img1 from "../../../Assets/annual vince.png";
import Img2 from "../../../Assets/housplant.png";
import Img3 from "../../../Assets/potted1.png";
import Img4 from "../../../Assets/spider Plant.png";

// Mahi Image ====>
import Mahi3 from "../../../Assets/mahi3.jpg";
import Mahi4 from "../../../Assets/mahi4.jpg";
import Mahi5 from "../../../Assets/mahi5.jpg";
import Mahi6 from "../../../Assets/mahi6.jpg";

import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineArrowRight,
} from "react-icons/ai";
const Listing = () => {
  return (
    <div className="lisitingScetion">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <AiOutlineArrowRight className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Img1} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={Img2} alt="Image Name" />
          <h3>Potted Tree</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={Img3} alt="Image Name" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={Img4} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Seller</h3>
            <button className="btn flex">
              See All <AiOutlineArrowRight className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={Mahi6} alt="User Image" />
              <img src={Mahi5} alt="User Image" />
              <img src={Mahi3} alt="User Image" />
              <img src={Mahi4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                14,556 Plant Sold <br />
                <small>
                  21 Seller
                  <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Seller</h3>
            <button className="btn flex">
              See All <AiOutlineArrowRight className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={Mahi5} alt="User Image" />
              <img src={Mahi6} alt="User Image" />
              <img src={Mahi4} alt="User Image" />
              <img src={Mahi3} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                26,556 Plant Sold <br />
                <small>
                  26 Seller
                  <span className="date">31 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
