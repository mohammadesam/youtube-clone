import React from "react";
import "../styles/mainSection.css";

export default function VideoCard(props) {
  return (
    <div className="videoCard">
      <div className="thumb">
        <img src={props.thumbImage} alt="" />
      </div>
      <div className="title">
        <img src="/test.jpg" width="36" height="36" alt="" />
        <p> {props.title}</p>
      </div>

      <div className="bottomCardSection">
        <div className="channelName">{props.channel}</div>
        <div className="status">
          <p> {formateViews(`${props.views}`)} </p>
          <p>.</p>
          <p>{formateDate(props.date)}</p>
        </div>
      </div>
    </div>
  );
}

function formateDate(uploadDate) {
  console.log(uploadDate);
  let currentDate = new Date();
  let formatedDate = {};
  if (currentDate.getFullYear() != uploadDate.getFullYear()) {
    formatedDate =
      currentDate.getFullYear() - uploadDate.getFullYear() + "-Year";
  } else if (currentDate.getMonth() != uploadDate.getMonth()) {
    formatedDate = currentDate.getMonth() - uploadDate.getMonth() + "-month";
  } else if (currentDate.getDate() != uploadDate.getDate()) {
    formatedDate = currentDate.getDate() - uploadDate.getDate() + "-day";
  } else if (currentDate.getHours() != currentDate.getHours()) {
    formatedDate = currentDate.getHours() - uploadDate.getHours() + "-hour";
  } else if (currentDate.getMinutes() != uploadDate.getMinutes()) {
    formatedDate =
      currentDate.getMinutes() - uploadDate.getMinutes() + "-minute";
  }

  let unpackeddate = formatedDate.split("-");
  let differnceValue = Number(unpackeddate[0]);
  let correctedDate = unpackeddate.join(" ");
  if (differnceValue > 1) {
    correctedDate += "s ago";
  } else {
    correctedDate += " ago";
  }

  return correctedDate;
}

function formateViews(views) {
  let unpackedViews = views.split("");
  let viewsNumber = Number(views);
  console.log(views);
  if (viewsNumber < 1000) {
    return views;
  } else if (viewsNumber >= 1000 && viewsNumber < 1000000) {
    unpackedViews.splice(unpackedViews.length - 3, 3);

    return unpackedViews.join("") + "K";
  } else if (viewsNumber >= 1000000 && viewsNumber < 1000000000) {
    unpackedViews.splice(unpackedViews.length - 6, 6);

    return unpackedViews.join("") + "M";
  } else if (viewsNumber >= 1000000000 && viewsNumber < 1000000000000) {
    unpackedViews.splice(unpackedViews.length - 9, 9);
    return unpackedViews.join("") + "B";
  }
}
