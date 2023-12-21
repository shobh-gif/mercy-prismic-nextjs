"use client";
import React,{useEffect,useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import PositionBg1 from "../public/position-bg-1.svg";
import PositionBg2 from "../public/position-bg-2.svg";
import PositionMobBg2 from "../public/position-mob-bg-2.svg";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Loader from "./components/Loader";
const page =  () => {
  const client = createClient();
  const [page,setpage]=useState("")
  const [loaderState,setLoaderState]=useState(false)
  useEffect(()=>
  {
    setLoaderState(true)
  client
   .getSingle("homepage")
   .then((res) => {
    setLoaderState(false)
     setpage(res);
   })
   .catch((err) => {
    setLoaderState(false)
     console.log("hello");
   });
  
  },[])
   
 useEffect(() => {
   AOS.init();
 }, []);
  return (
    <>
      {loaderState&&
      <Loader />}
      <div className="bg-bubble">
        <div className="position-bg-img">
          <Image
            className="position-bg position-bg-img-one mob-d-none"
            alt="image"
            src={PositionBg1}
          />
          <Image
            className="position-bg position-bg-img-two mob-d-none"
            alt="image"
            src={PositionBg2}
          />
          <Image
            className="position-bg position-bg-img-two desktop-d-none"
            alt="image"
            src={PositionMobBg2}
          />
        </div>
        <SliceZone slices={page?.data?.slices} components={components} />
      </div>
    </>
  );
};

export default page;
