"use client";
/**
 * @typedef {import("@prismicio/client").Content.UserProfileSlice} UserProfileSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<UserProfileSlice>} UserProfileProps
 * @param {UserProfileProps}
 */
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";
const UserProfile = ({ slice }) => {

  const [showMore,setShowMore]=useState(false)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="whois-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="flex-row items-center ">
                <div
                  className="bio-content  hero-content"
                  data-aos="zoom-in-up"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <div className="text-5xl font-thin mb-4">
                    <PrismicRichText field={slice.primary.textfieldname} />
                  </div>
                  <h1 className="big-text font-light mb-12">
                    {slice?.primary?.userfield[0]?.text}
                  </h1>
                  {slice?.items
                    ? slice?.items?.map((userData, key) => {
                        return (
                          key < 2 && (
                            <p className="font-light mb-4 hero-text" key={key}>
                              {userData?.userinfo
                                ? userData?.userinfo[0]?.text
                                : ""}
                            </p>
                          )
                        );
                      })
                    : ""}
                  {showMore && slice?.items
                    ? slice?.items?.map((userData, key) => {
                        return (
                          key >= 2 && (
                            <p className="font-light mb-4 hero-text" key={key}>
                              {userData?.userinfo
                                ? userData?.userinfo[0]?.text
                                : ""}
                            </p>
                          )
                        );
                      })
                    : ""}
                  <p
                    className="font-light mb-4 hero-text cursor-pointer"
                    onClick={() => {
                      setShowMore(!showMore);
                    }}
                  >
                    {showMore === false ? "See more ..." : "See less"}
                  </p>
                </div>
                <div
                  className="hero-img"
                  data-aos="zoom-in-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <PrismicNextImage
                    field={slice?.primary?.profilepick}
                    fallbackAlt="image"
                  ></PrismicNextImage>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default UserProfile;
