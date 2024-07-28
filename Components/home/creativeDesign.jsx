import React from "react";
import Image from "next/image";

export default function CreativeDesign() {
  return (
    <>
      <div className="bg-[#FEFEFE] py-12 px-4 sm:px-28">
        <section className="sm:flex items-center justify-between">
          <h3 className="text-6xl sm:text-8xl">CREATIVE DESIGN</h3>
          <div className="pt-8 sm:pt-0">
            {/* <Image
              src={"/image/creativeDesign2.png"}
              width={500}
              height={500}
              alt="img"
            /> */}

            <Image
              src={"/image/anim/creativeDesign.gif"}
              width={600}
              height={600}
              alt={"logo"}
            />

            {/* <video width="500" height="500" autoPlay loop muted className="">
              <source
                src="/image/anim/creativeDesignAnim.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video> */}
          </div>
        </section>
      </div>
      <div className="border-t border-black w-full pb-8 bg-[#FEFEFE]"></div>
      <section className="bg-[#FEFEFE] flex justify-center items-center pb-12">
        <span className="px-4 sm:px-0 w-full sm:w-[450px]">
          <h3 className="-skew-x-12">CREATIVE DESIGN</h3>
          We do not do cookie-cutter solutions. Our user-centred design
          encourages productivity and boosts revenue.
        </span>
      </section>
    </>
  );
}
