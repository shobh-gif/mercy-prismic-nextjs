"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollContainer from "react-indiana-drag-scroll";

/**
 * @typedef {import("@prismicio/client").Content.ServicesSlice} ServicesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ServicesSlice>} ServicesProps
 * @param {ServicesProps}
 */

import ServiceBg from "../../public/service-bg.svg";
import ArrowWhite from "../../public/arrow-white.svg";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
export default  function Services({ slice }) {
  const client = createClient();
  const page =client.getSingle("homepage");
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="pt-8">
        <div className="container ">
          <div className="service-text text-light">
            <span className="text-shadow ">Our</span> Services
          </div>
        </div>
        <div className="container-1920">
          <div className="row">
            <div className="col-lg-12 relative -top-16 mob-position">
              <ScrollContainer className="plugin-scroll" hideScrollbars={true}>
                {slice?.items?.map((item) => {
                  return (
                    <div
                      className="card card-service"
                      key={item?.servicetext[0]?.text}
                    >
                      <div className="card-front ">
                        <h3 className="font-light">
                          {item?.servicetext[0]?.text}
                        </h3>
                      </div>
                      <div className="card-back ">
                        <PrismicNextImage
                          fallbackAlt=""
                          field={item?.serviceimage}
                        />
                        <div className="card-content-bg">
                          <ul className="case-study-section flex pl-0 mb-0 gap-3">
                            {page?.data?.slices[5]?.items?.map((elem) => {
                              return (
                                <li className="nav-tabs" key={elem?.title}>
                                  <Link href="" className="nav-link">
                                    {elem?.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>

                          <div className="flex justify-between bg-btm-text mt-3">
                            <h3 className="font-light text-5xl mb-0">
                              {item?.servicetext[0]?.text}
                            </h3>
                            <Link href="/">
                              <Image src={ArrowWhite} alt="image" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="card card-service active-card">
                  <div className="card-front ">
                    <h3 className="font-light">Web Development</h3>
                  </div>
                  <div className="card-back ">
                    <Image alt="image" src={ServiceBg} />
                    <div className="card-content-bg">
                      <ul className="case-study-section flex pl-0 mb-0 gap-3">
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            IOS
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Android
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            React Native
                          </Link>
                        </li>
                        <li className="nav-tabs">
                          <Link href="" className="nav-link">
                            Windows
                          </Link>
                        </li>
                      </ul>

                      <div className="flex justify-between bg-btm-text mt-3">
                        <h3 className="font-light text-5xl mb-0">
                          Web Development
                        </h3>
                        <Link href="/">
                          <Image src={ArrowWhite} alt="image" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollContainer>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
