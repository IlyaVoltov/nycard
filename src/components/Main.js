import React from "react";
import "./main.css";
import video from "./assets/video.mp4";

export const Main = () => {
  return (
    <div className="main_container">
      <video src={video} autoPlay loop muted />

      <h1 className="title">
        Управление разработки ПО поздравляет всех коллег с наступающим Новым
        Годом!
      </h1>

      <p className="subtitle">Всем хороших праздников!</p>
    </div>
  );
};
