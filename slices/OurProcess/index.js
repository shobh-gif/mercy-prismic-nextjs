"use client";

/**
 * @typedef {import("@prismicio/client").Content.OurProcessSlice} OurProcessSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurProcessSlice>} OurProcessProps
 * @param {OurProcessProps}
 */
const OurProcess = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="process-section">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="card-row-bg">
                <div className="trusted-text text-center uppercase mb-5">
                  Our Process
                </div>
                <div className="card-row">
                  {slice?.items?.map((elem) => {
                    return (
                      <div className="card-col" key={elem?.index}>
                        <p className="card-no text-14">
                          <span className={`${elem?.colorclassname}`}>
                            {elem?.index}
                          </span>
                        </p>
                        <div className="card-content">
                          <h3 className="font-light">
                            {elem?.processtextfield[0]?.text}
                          </h3>
                          <p className="text-base font-light">
                            {elem?.processdescriptionfield[0]?.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OurProcess;
