import React from "react";
import "./Activity.scss";

      // images 
import Mahi1 from "../../../Assets/mahi1.jpg";
import Mahi2 from "../../../Assets/mahi2.jpg";
import Mahi3 from "../../../Assets/mahi3.jpg";
import Mahi4 from "../../../Assets/mahi4.jpg";
import Mahi5 from "../../../Assets/mahi5.jpg";
import Mahi6 from "../../../Assets/mahi6.jpg";

      // React icons 
import {
  AiOutlineArrowRight,
} from "react-icons/ai";
const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All <AiOutlineArrowRight className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={Mahi1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Mahi Plant</span>
            <small>Ordered a new Plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={Mahi2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Mahi Plant</span>
            <small>Ordered a new Plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={Mahi3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Mahi Plant</span>
            <small>Ordered a new Plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={Mahi4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Mahi Plant</span>
            <small>Ordered a new Plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={Mahi5} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Mahi Plant</span>
            <small>Ordered a new Plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={Mahi6} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Mahi Plant</span>
            <small>Ordered a new Plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
