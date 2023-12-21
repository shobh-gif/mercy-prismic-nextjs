/**
 * @typedef {import("@prismicio/client").Content.SetsApartSlice} SetsApartSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SetsApartSlice>} SetsApartProps
 * @param {SetsApartProps}
 */
import ApartImg from "../../public/apart-img.png";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";
const SetsApart = ({ slice }) => {
  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="pt-16 stets-apart-section relative z-10 case-study-section ">
        <div className="container">
          <h1
            className="big-text mr-0 font-light mb-12 text-center"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            What sets us apart?
          </h1>
          <div className="row">
            <div className="col-lg-12">
              <Tabs
                defaultActiveKey="Industry-expertise"
                id="casestudy-tab"
                className="mb-3"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="700"
              >
                <Tab eventKey="Industry-expertise" title="Industry expertise">
                  <div>
                    <div
                      className="flex-content flex-apart-content"
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="700"
                    >
                      <div className="apart-img">
                        <img
                          alt=""
                          src={slice?.primary?.industryexpertiseimage?.url}
                        />
                      </div>
                      <div className="apart-content">
                        <p className="card-no text-14">
                          <span className="bg-red-100 text-black-100">01</span>
                        </p>
                        <h2 className=" font-normal mb-4">
                          {slice?.primary?.industryexpertiseheading[0]?.text}
                        </h2>
                        <p className="card-text font-light mb-0">
                          {slice?.primary?.industryexpertisesubheading[0]?.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="User First" title="User First">
                  <div>
                    <div
                      className="flex-content flex-apart-content"
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="700"
                    >
                      <div className="apart-img">
                        <img
                          alt=""
                          src={slice?.primary?.uniquebrandimage?.url}
                        />
                      </div>
                      <div className="apart-content">
                        <p className="card-no text-14">
                          <span className="bg-red-100 text-black-100">02</span>
                        </p>
                        <h2 className=" font-normal mb-4">
                          {slice?.primary?.uniquebrandheading[0]?.text}
                        </h2>
                        <p className="card-text font-light mb-0">
                          {slice?.primary?.uniquebrandsubheading[0]?.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="Unique-Brand" title="Unique Brand">
                  <div>
                    <div
                      className="flex-content flex-apart-content"
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="700"
                    >
                      <div className="apart-img">
                        <img alt="" src={slice?.primary?.userfirstimage?.url} />
                      </div>
                      <div className="apart-content">
                        <p className="card-no text-14">
                          <span className="bg-red-100 text-black-100">03</span>
                        </p>
                        <h2 className=" font-normal mb-4">
                          {slice?.primary?.userfirstheading[0]?.text}
                        </h2>
                        <p className="card-text font-light mb-0">
                          {slice?.primary?.userfirstsubheading[0]?.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SetsApart;
