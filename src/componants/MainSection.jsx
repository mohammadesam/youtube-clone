import React from "react";
import VideoCard from "./VideoCard";
import "../styles/mainSection.css";
export default function MainSection() {
  return (
    <div className="MainSectionContainer">
      <VideoCard
        thumbImage="/thumb.jpg"
        title="how to make test"
        date={randomDate()}
        views={Math.floor(Math.random() * 1000000)}
        channel="some Channel"
      ></VideoCard>

      <VideoCard
        thumbImage="/thumb.jpg"
        title="how to make test"
        date={randomDate()}
        views={Math.floor(Math.random() * 1000000)}
        channel="some Channel"
      ></VideoCard>

      <VideoCard
        thumbImage="/thumb.jpg"
        title="how to make test"
        date={randomDate()}
        views={Math.floor(Math.random() * 1000000)}
        channel="some Channel"
      ></VideoCard>

      <VideoCard
        thumbImage="/thumb.jpg"
        title="how to make test"
        date={randomDate()}
        views={Math.floor(Math.random() * 1000000)}
        channel="some Channel"
      ></VideoCard>

      <VideoCard
        thumbImage="/thumb.jpg"
        title="how to make test"
        date={randomDate()}
        views={Math.floor(Math.random() * 1000000)}
        channel="some Channel"
      ></VideoCard>
    </div>
  );
}

function randomDate() {
  let year = Math.floor(Math.random() * 15) + 2007;
  let month = Math.floor(Math.random() * 11);
  let day = Math.floor(Math.random() * 29);

  return new Date(year, month, day);
}
