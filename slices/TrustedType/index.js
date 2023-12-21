"use client";

/**
 * @typedef {import("@prismicio/client").Content.TrustedTypeSlice} TrustedTypeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TrustedTypeSlice>} TrustedTypeProps
 * @param {TrustedTypeProps}
 */
import { PrismicNextImage } from "@prismicio/next";
const TrustedType = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <section className="trusted-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="trusted-col">
                <div className="trusted-text">TRUSTED BY</div>
                <div className="trusted-logos">
                  {slice?.items?.map((elem) => {
                    return (
                      <div key={elem?.trustedimage1?.url}>
                        <PrismicNextImage
                         fallbackAlt=""
                          field={elem?.trustedimage1}
                        ></PrismicNextImage>
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

export default TrustedType;
