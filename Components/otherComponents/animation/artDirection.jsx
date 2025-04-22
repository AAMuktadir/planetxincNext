"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function ArtDirerctionAnimation() {
  return (
    <>
      <div className="py-20">
        <div className="flex flex-col items-center justify-center">
          <h2>This is a example Page</h2>
          <Spline scene="https://prod.spline.design/IRs-hpEoDY7olt0e/scene.splinecode" />
        </div>
      </div>

      {/* <div className="relative w-full h-[70vh]">
        <Spline scene="https://prod.spline.design/2r19GCkdH3VL6Dwc/scene.splinecode" />

        <div className="absolute inset-0 flex items-center justify-center text-white pointer-events-none">
          <Link
            href="https://atnation.live/"
            target="_blank"
            className="pointer-events-auto text-lg"
          >
            My link
          </Link>
        </div>
      </div> */}

      {/* https://prod.spline.design/ooQyfzKBciGmqVyR/scene.splinecode */}
    </>
  );
}
