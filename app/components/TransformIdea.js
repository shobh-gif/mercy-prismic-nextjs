import Link from 'next/link';
import React from 'react'
import BtnArow from "../../public/btn-arrow-icon.svg";
import Image from 'next/image';
const TransformIdea = () => {
  return (
    <>
      <section className="pt-32 pb-8 relative z-10">
        <div className="container">
          <div className="transform-text service-text text-light text-center mb-5">
            <span className="text-shadow ">Transform your ideas</span>&nbsp;into
            digital solutions that scale your business
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className=" font-medium mb-5 text">
                Get sustainable growth with smart products.
              </h2>

              <div className="hero-btn justify-center">
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
    </>
  );
}

export default TransformIdea