"use client";
import React from "react";

const StarsBg = () => {
  return (
    <div
      className="bg-animation w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(to top, #000000, hsla(349, 67%, 51%, 0.15) 80%, #000000 100%)",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div className="h-[100vh] overflow-hidden">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
    </div>
  );
};

export default StarsBg;
