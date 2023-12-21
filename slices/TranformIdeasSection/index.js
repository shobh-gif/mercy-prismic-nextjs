/**
 * @typedef {import("@prismicio/client").Content.TranformIdeasSectionSlice} TranformIdeasSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TranformIdeasSectionSlice>} TranformIdeasSectionProps
 * @param {TranformIdeasSectionProps}
 */
import Link from "next/link";
import React from "react";
import BtnArow from "../../public/btn-arrow-icon.svg";
import Image from "next/image";
const TranformIdeasSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="pt-32 pb-8 relative z-10 transform-section">
        <div className="container">
          <div
            className="transform-text service-text text-light text-center mb-5"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <span className="text-shadow ">Transform your ideas</span>&nbsp;into
            digital solutions that scale your business
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2
                className=" font-medium mb-5 text"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="700"
              >
                {slice?.primary?.subheading[0]?.text}
              </h2>

              <div
                className="hero-btn justify-center"
                data-aos="zoom-in-down"
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
          </div>
        </div>
      </section>
    </section>
  );
};

export default TranformIdeasSection;
