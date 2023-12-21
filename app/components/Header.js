"use client";
import React,{useState,useEffect} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

export default  function Header() {
  const [homepage,setHomePage]=useState("")
  useEffect(()=>
  {
    const client = createClient();
     client.getSingle("homepage").then((res)=>
     {
      setHomePage(res)
     }).catch((err)=>
     {
      console.log("err");
     })
  },[])

  return (
    <>
      <div className="container">
        <Navbar collapseOnSelect expand="lg" className="text-white navbar-dark">
          <Navbar.Brand>
            <Link className="logo" href="/">
              <PrismicNextImage
                fallbackAlt=""
                field={homepage?.data?.sitelogo[0].logo}
              ></PrismicNextImage>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="custom-nav" id="responsive-navbar-nav">
            <Nav className="m-auto navbar-menu">
              {homepage?.data?.navbar.map(({ link, label }) => {
                return (
                  <Link className="nav-link" href="/" key={label}>
                    {label}
                  </Link>
                );
              })}
            </Nav>

            <Link
              href="#contact-us"
              className=" font-bold btn rounded-full bg-white hover:bg-cyan-100 text-black text-base"
            >
              <Nav className="btn-nav">
                Contact Us
              </Nav>
              {/* <Nav className="btn-nav">{homepage?.data?.contactus[0]?.label}</Nav> */}
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
