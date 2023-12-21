

// "use client";
/**
 * @typedef {import("@prismicio/client").Content.OurServicesSlice} OurServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurServicesSlice>} OurServicesProps
 * @param {OurServicesProps}
 */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import ArrowWhite from "../../public/arrow-white.svg";
import { PrismicNextImage } from "@prismicio/next";
const OurServices = ({ slice }) => {
   const settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1,
   };

  return (
    <section
      className=""
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="pt-8 relative z-10">
        <div className="container">
          <div
            className="service-text text-light text-center"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <span className="text-shadow ">Our</span> Services
          </div>
          <div className="row relative -top-16 mob-position">
            <div className="col-lg-12 mob-services relative">
              <Slider {...settings}>
                {slice?.items?.map((services, index) => {
                  return (
                    <div key={index}>
                      <div className="card our-ser-card text-white">
                        <img alt="" src={services?.serviceimage?.url} />
                        <div className="card-body card-body-text">
                          <div className="flex justify-between bg-btm-text mt-3 flex-wrap">
                            <h3 className=" font-light ">
                              {services?.serviceheading[0]?.text}
                            </h3>
                            <Link className=" block" href="/">
                              <Image src={ArrowWhite} alt="image" />
                            </Link>
                          </div>
                          <h4 className=" font-medium mb-4" >
                            {services?.servicesubheading[0]?.text}
                          </h4>
                          <p className="card-text font-light mb-3">
                            {services?.paragraph1[0]?.text}
                          </p>
                          <p className="card-text font-light mb-3">
                            {services?.paragraph2[0]?.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            {slice?.items?.map((services, index) => {
              return (
                <>
                  <div
                    className="col-lg-4 col-md-6 mb-4 desktop-services"
                    key={index}
                  >
                    <div className="card our-ser-card text-white">
                      <img
                        alt=""
                        src={services.serviceimage?.url}
                        data-aos="flip-left"
                        data-aos-easing="linear"
                        data-aos-duration="700"
                      />
                      <div className="card-body card-body-text">
                        <div
                          className="flex justify-between bg-btm-text mt-3 flex-wrap"
                          data-aos="zoom-in-up"
                          data-aos-easing="linear"
                          data-aos-duration="1000"
                        >
                          <h3 className=" font-light ">
                            {services?.serviceheading[0]?.text}
                          </h3>
                          <Link className=" block" href="/">
                            <Image src={ArrowWhite} alt="image" />
                          </Link>
                        </div>
                        <h4 className=" font-medium mb-4">
                          {services?.servicesubheading[0]?.text}
                        </h4>
                        <p className="card-text font-light mb-3">
                          {services?.paragraph1[0]?.text}
                        </p>
                        <p className="card-text font-light mb-3">
                          {services?.paragraph2[0]?.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurServices;
