"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function TestAnimation() {
  return (
    <div className="relative w-full h-screen">
      <Spline scene="https://prod.spline.design/J-29532UxVlnfs-Q/scene.splinecode" />

      <div className=" absolute bottom-12 flex items-center justify-center text-white w-full">
        <Link
          href={"https://atnation.live/"}
          target="_blank"
          className="text-white uppercase text-xl font-medium hover:text-footer duration-300 hover:underline"
        >
          click here
        </Link>
      </div>
    </div>
  );
}
