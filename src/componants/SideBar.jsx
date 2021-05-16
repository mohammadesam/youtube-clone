import React from "react";
import "../styles/sideBar.css";
export default function SideBar() {
  return (
    <div className="con">
      <div className="topSection section">
        <div className="link selected">
          <img src="/icons/house.svg" width="20" height="20" alt="" />{" "}
          <span>Home</span>
        </div>

        <div className="link">
          <img src="/icons/explore (1).svg" width="20" height="20" alt="" />{" "}
          <span>explore</span>
        </div>

        <div className="link">
          <img src="/icons/explore (1).svg" width="20" height="20" alt="" />{" "}
          <span>explore</span>
        </div>
      </div>

      <div className="middleSection section">
        <div className="link">
          <img src="/icons/library.svg" width="20" height="20" alt="" />
          <span>library</span>
        </div>

        <div className="link">
          <img src="/icons/history.svg" width="15" height="15" alt="" />
          <span>History</span>
        </div>

        <div className="link">
          <img src="/icons/youtube (1).svg" width="15" height="15" alt="" />
          <span>Your Videos</span>
        </div>

        <div className="link">
          <img src="/icons/clock.svg" width="15" height="15" alt="" />
          <span>Watch Later</span>
        </div>

        <div className="link">
          <img src="/icons/like.svg" width="15" height="15" alt="" />
          <span>Liked Videos</span>
        </div>

        <div className="link ">
          <img
            src="/icons/arrow-down-sign-to-navigate.svg"
            width="15"
            height="15"
            alt=""
          />
          <span>Show More</span>
        </div>
      </div>

      <div className="bottomSection section">
        <div className="link title">SUBSCRIPTIONS</div>

        <div className="link unwatched">
          <img src="/logo192.png" width="15" height="15" alt="" />
          <span>Liked Videos</span>
        </div>

        <div className="link unwatched">
          <img src="/logo192.png" width="15" height="15" alt="" />
          <span>Liked Videos</span>
        </div>

        <div className="link unwatched">
          <img src="/logo192.png" width="15" height="15" alt="" />
          <span>Liked Videos</span>
        </div>
      </div>
    </div>
  );
}
