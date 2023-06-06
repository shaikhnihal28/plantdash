import React from "react";
import "./Top.scss";

// react icons
import {
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
  AiOutlineArrowRight,
  AiOutlineQuestionCircle,
} from "react-icons/ai";

// image
import img1 from "../../../Assets/user(1).webp";
import img2 from "../../../Assets/01.png";

// video
import video from "../../../Assets/chidvideo.mp4";
const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Pranti.</h1>
          <p>Hello IsraTech, welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <AiOutlineSearch className="icon" />
        </div>

        <div className="adminDiv flex">
          <AiOutlineMessage className="icon" />
          <AiOutlineBell className="icon" />
          <div className="adminImage">
            <img src={img1} alt="User Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary products</h1>
          <p>
            The world's fast growing industry today are natural made products!
          </p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Seller</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Start</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>175 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my orders <AiOutlineArrowRight className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image Name" />
            </div>

            <div className="sideBarCard">
              <AiOutlineQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle1"></div>
                <h3>Help Center</h3>
                <p>
                  Having in Planti, please contact us from us from for more
                  question.
                </p>
                <button className="btn">Go to help center</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
