import React from "react";
import "../styles/header.css";
export default function Header() {
  return (
    <header>
      <ul>
        {/* left side  */}
        <li className="leftSide">
          <div className="menu">
            <img src="/icons/menu (1).svg" width="20" height="20" alt="" />
          </div>
          <div className="youtube">
            {" "}
            <img src="/icons/test.svg" width="120" height="25" alt="" />
          </div>
        </li>
        {/* centeral side  */}
        <li>
          <div className="searchBarCon">
            <input type="text" placeholder="Search" />
            <div className="searchBtn">
              <img src="/icons/search.svg" width="13" height="13" alt="" />
            </div>
            <div className="voiceSearch">
              <img src="/icons/microphone.svg" width="18" height="18" alt="" />
            </div>
          </div>
        </li>
        {/* right side */}
        <li className="rightSide">
          <div className="search hide">
            <img src="/icons/search white.svg" width="20" height="20" alt="" />
          </div>
          <div className="addVideo">
            <img src="/icons/video-camera.svg" width="25" height="25" alt="" />
          </div>
          <div className="appsMenu">
            <img src="/icons/apps menu.svg" width="17" height="17" alt="" />
          </div>

          <div className="notificationIcon">
            <img src="/icons/bell.svg" width="20" height="20" alt="" />
          </div>

          <div className="accountImage">
            <img src="/logo192.png" alt="" />
          </div>
        </li>
      </ul>

      <div className="catagoriesBar">
        <span className="label selected">All</span>
        <span className="label">FIFA 21</span>
        <span className="label">Televison serious</span>
      </div>
    </header>
  );
}
