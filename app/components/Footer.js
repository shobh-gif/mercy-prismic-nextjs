"use client";
import { Listbox } from "@headlessui/react";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
const Footer = () => {
  const [homepage, setHomepage] = useState();
  const client = createClient();
console.log("homepage", homepage);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.getSingle("homepage");
        return setHomepage(data);
      } catch (error) {
        alert("Something went wrong!!!");
      
      }
    }
    fetchData();
  }, []);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <footer id="contact-us" className="pt-16">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-12">
              <h1 className="text-6xl font-light mb-12 text-center">
                Get started with Richbayo today
              </h1>
            </div>
          </div>
          <form className="pb-28" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    {...register("name", {
                      required: true,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <span className="text-red-600 absolute text-sm error">
                      Name is required
                    </span>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Your Email"
                    {...register("email", {
                      required: true,
                      pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, // regular expression for email addresses
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <span className="text-red-600 absolute text-sm error">
                      Email is required
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-red-600 absolute text-sm error">
                      Enter a valid email address
                    </span>
                  )}
                </div>
              </div>
              <div className="col-lg-6 relative">
                <Controller
                  name="selectedOption"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Please select an option" }}
                  render={({ field }) => (
                    <Listbox
                      as="div"
                      className="space-y-2"
                      value={field.value}
                      onChange={(value) => field.onChange(value)}
                    >
                      {({ open }) => (
                        <>
                          <Listbox.Button className="form-control ">
                            {field.value
                              ? field.value.name
                              : "Select an option"}
                          </Listbox.Button>
                          <Listbox.Options
                            className={`mt-2 ${
                              open ? "block option-list" : "hidden"
                            }`}
                          >
                            {homepage?.data?.services?.map((option) => (
                              <Listbox.Option key={option.value} value={option}>
                                {({ active, selected }) => (
                                  <div
                                    className={`${
                                      active ? "text-blue " : " text-blue"
                                    } cursor-pointer select-none relative`}
                                  >
                                    {option.name}
                                    {selected && (
                                      <span
                                        className={`${
                                          active
                                            ? "text-white"
                                            : "text-blue-600"
                                        } absolute inset-y-0 left-0 flex items-center pl-3`}
                                      >
                                        &#10003;
                                      </span>
                                    )}
                                  </div>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </>
                      )}
                    </Listbox>
                  )}
                />
                {errors.selectedOption && (
                  <span className="text-red-600 absolute text-sm error select-error">
                    {errors.selectedOption.message}
                  </span>
                )}
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Message"
                    {...register("message", {
                      required: true,
                    })}
                  />
                  {errors.message?.type === "required" && (
                    <span className="text-red-600 absolute text-sm error ">
                      Message is required
                    </span>
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="hero-btn mt-2 text-center">
                  <button
                    type="submit"
                    className=" w-full m-auto font-bold justify-center  btn rounded-full bg-white hover:bg-cyan-100 text-black text-base"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </form> */}
          <div className="row text-center ">
            <div className="col-lg-12  ">
              <Link className="w-auto inline-block m-auto" href="/">
                <PrismicNextImage
                  fallbackAlt=""
                  field={homepage?.data?.footer_logo}
                />
              </Link>
              <p className="opacity-50 pt-4">
                26 Jakande Crescent. Victoria Island, Lagos NG 101251
              </p>
            </div>
            <div className="col-lg-12 pt-0">
              <ul className="footer-menu font-light">
                {homepage?.data?.footersection.map((item, key) => {
                  return (
                    <li key={key}>
                      <Link href={item?.link?.url ? item?.link?.url : ""}>
                        {item.label[0]?.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-12 pt-4 pb-5 pt-5 ">
              <div className="footer-copyright font-light">
                <div className="footer-col opacity-50 text-left">
                  © Copyright - Richbayo {new Date().getFullYear()}
                </div>
                <div className="footer-col social-link">
                  {homepage?.data?.social_account_icons.map((item) => {
                    return (
                      <div key={item.icon.url}>
                        <Link
                          href={
                            item?.socialmedialink?.url
                              ? item?.socialmedialink?.url
                              : ""
                          }
                        >
                          <PrismicNextImage field={item.icon} fallbackAlt="" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="footer-col opacity-50">
                  <ul className="terms-menu footer-menu font-light justify-end">
                    <li>
                      <Link href="">App Development</Link>
                    </li>
                    <li>
                      <Link href="">Web Development</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
