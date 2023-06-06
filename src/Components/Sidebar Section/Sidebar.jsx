import React from "react";
import "./Sidebar.scss";
//  imported Images
import clipart from "../../Assets/clipart-leaf.png";

// react icons
import {
  AiOutlineDashboard,
  AiOutlineRise,
  AiOutlineTrophy,
  AiOutlinePieChart,
  AiOutlineCompass,
  AiOutlineShoppingCart,
  AiOutlineContacts,
  AiOutlineAudit,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={clipart} alt="Image Name" />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a className="menuLink flex">
              <AiOutlineDashboard className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
          </li>
          <li className="listItem">
            <a className="menuLink flex">
              <AiOutlineShoppingCart className="icon" />
              <span className="smallText">My Orders</span>
            </a>
          </li>
          <li className="listItem">
            <a className="menuLink flex">
              <AiOutlineCompass className="icon" />
              <span className="smallText">Explore</span>
            </a>
          </li>
          <li className="listItem">
            <a className="menuLink flex">
              <AiOutlineTrophy className="icon" />
              <span className="smallText">Products</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <a className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>
          <li className="listItem">
            <a className="menuLink flex">
              <AiOutlineRise className="icon" />
              <span className="smallText">Trends</span>
            </a>
          </li>
          <li className="listItem">
            <a className="menuLink flex">
              <AiOutlineContacts className="icon" />
              <span className="smallText">Contact</span>
            </a>
          </li>
          <li className="listItem">
            <a className="menuLink flex">
              <AiOutlineAudit className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <AiOutlineQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>
            Having in Planti, please contact us from us from for more question.
          </p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
