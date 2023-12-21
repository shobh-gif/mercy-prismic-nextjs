/**
 * @typedef {import("@prismicio/client").Content.TopSectionSlice} TopSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TopSectionSlice>} TopSectionProps
 * @param {TopSectionProps}
 */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../public/hero-img.png";
import HeroBubble from "../../public/hero-bubble.svg";
import BtnArow from "../../public/btn-arrow-icon.svg";
const TopSection = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-section-row">
              {/* <img src={slice?.primary?.topimage?.url}/> */}
              <Image className="position-bubble-img" alt="" src={HeroBubble} />
              <div
                className="row-flex items-center "
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <div className=" hero-content">
                  <h1 className="big-text font-light">
                    {slice?.primary?.topheading[0]?.text}
                  </h1>
                  <p className="font-light mb-4 hero-text">
                    {slice?.primary?.subheading[0]?.text}
                  </p>
                  <div className="hero-btn">
                    <Link
                      className=" font-bold btn rounded-full bg-white hover:bg-cyan-100 text-black text-base"
                      href="/"
                    >
                      <span>Get started now</span>{" "}
                      <span>
                        <Image alt="" src={BtnArow} />
                      </span>
                    </Link>
                    {/* <Link
                      className="video-btn font-bold btn rounded-full bg-transparent text-black text-base"
                      href="/"
                    >
                      <Image alt="" src={PlayVideoBtn} />
                    </Link> */}
                  </div>
                </div>
                <div
                  className="hero-img"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="700"
                >
                  <Image src={HeroImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
