/**
 * @typedef {import("@prismicio/client").Content.RightProcessSlice} RightProcessSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RightProcessSlice>} RightProcessProps
 * @param {RightProcessProps}
 */
import React from "react";
import PositionBg1 from "../../public/position-bg-2-1.svg";
import PositionBg2 from "../../public/position-bg-2-2.svg";
import GradientBg from "../../public/gradients-bg.png";
import BtnArow from "../../public/btn-arrow-icon.svg";
import Image from "next/image";
import Link from "next/link";
const RightProcess = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative pb-8 right-process">
        <div className="position-bg-img">
          <Image
            className="position-bg position-bg-img-one z-0 mob-d-none"
            alt="image"
            src={PositionBg1}
          />
          <Image
            className="position-bg position-bg-img-two mob-d-none"
            alt="image"
            src={PositionBg2}
          />
          <Image
            className="position-bg position-bg-img-two desktop-d-none"
            alt="image"
            src={GradientBg}
          />
        </div>
        <section className="pt-8 pb-8 relative z-10">
          <div className="container">
            <div
              className="get-things-text service-text text-light text-center mb-5"
              data-aos="zoom-in"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <span className="text-shadow ">Get things done</span> with the
              right process
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="image-content right-img">
                  <div className="flex-content">
                    <div
                      className="get-content"
                      data-aos="zoom-in-up"
                      data-aos-easing="linear"
                      data-aos-duration="1000"
                    >
                      <div className="get-content-icon mb-2">
                        <img src={slice?.primary?.rightProcessIcon?.url} />
                      </div>
                      <h4 className=" font-medium mb-3">
                        {slice?.primary?.rightprocesstext1[0]?.text}
                      </h4>
                      <p className="card-text font-light mb-3">
                        {slice?.primary?.rightprocesstext2[0]?.text}
                      </p>
                    </div>
                    <div
                      className="get-img"
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-duration="700"
                    >
                      <img src={slice?.primary?.rightProcessImage?.url} />

                      {/* <Image alt="" src={GetImg1} /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="image-content left-img">
                  <div className="flex-content">
                    <div
                      className="get-img"
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="700"
                    >
                      <img src={slice?.primary?.leftprocessimage?.url} />
                    </div>
                    <div
                      className="get-content"
                      data-aos="fade-left"
                      data-aos-easing="linear"
                      data-aos-duration="700"
                    >
                      <div className="get-content-icon mb-2">
                        <img src={slice?.primary?.leftprocessicon?.url} />
                        {/* <Image alt="" src={leftprocessicon} /> */}
                      </div>
                      <h4 className=" font-medium mb-2 mb-3">
                        {slice?.primary?.leftprocesstext1[0]?.text}
                      </h4>
                      <p className="card-text font-light mb-3">
                        {slice?.primary?.leftprocesstext2[0]?.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hero-btn justify-center pt-16"
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <Link
                className=" font-bold btn rounded-full bg-white hover:bg-cyan-100 text-black text-base"
                href="/"
              >
                <span>Get started now</span>{" "}
                <span>
                  <Image alt="" src={BtnArow} />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default RightProcess;
