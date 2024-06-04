"use client";
import React from "react";
import { Audio } from "react-loader-spinner";

export default function LoadingScreen() {
  return (
    <Audio
      height="20vh"
      width="20vw"
      color="black"
      ariaLabel="three-dots-loading"
      wrapperClass="loading-audio"
    />
  );
}
