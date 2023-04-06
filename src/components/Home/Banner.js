import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide
         style={{width:"100%", height:"70px"}}
        >
          <div className="img-style">
            <img
              src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"
              alt=""
              className="w-full "
            />
          </div>
          <div className="md:text-style smTextStyle ">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ rotate: 90 }}
              className="md:text-5xl text-2xl font-bold font-serif  md:w-11/12"
            >
              Keep the Book . Grow Your Knowledge
            </motion.h1>
            <p className="md:w-6/12 font-serif my-3 ">
              Increases knowledge and vocabulary: Reading is a great way to
              learn new things and expand your knowledge. It can also help
              improve your vocabulary, language skills, and communication
              abilities.F
            </p>
            <Link href="/product">
              {" "}
              <button className="btn btn-primary">let`s start</button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" img-style ">
            <img
              src="https://images.unsplash.com/photo-1508169351866-777fc0047ac5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="w-full "
            />
          </div>
          <div className="  md:text-style smTextStyle ">
            <h1 className="md:text-5xl text-2xl font-bold font-serif  md:w-11/12">
              Keep the Book . Grow Your Knowledge
            </h1>
            <p className="md:w-6/12 font-serif my-3 text-lg">
              Increases knowledge and vocabulary: Reading is a great way to
              learn new things and expand your knowledge. It can also help
              improve your vocabulary, language skills, and communication
              abilities.F
            </p>
            <Link href="/product">
              {" "}
              <button className="btn btn-primary">let`s start</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-style">
            <img
              src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"
              alt=""
              className="w-full"
            />
          </div>
          <div className="  md:text-style smTextStyle ">
          <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ rotate: 90 }}
              className="md:text-5xl text-2xl font-bold font-serif   md:w-11/12"
            >
              Keep the Book . Grow Your Knowledge
            </motion.h1>
            <p className="md:w-6/12 font-serif my-3 text-lg">
              Increases knowledge and vocabulary: Reading is a great way to
              learn new things and expand your knowledge. It can also help
              improve your vocabulary, language skills, and communication
              abilities.F
            </p>
            <Link href="/product">
              {" "}
              <button className="btn btn-primary">let`s start</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="img-style">
            <img
              src="https://images.unsplash.com/photo-1615791287388-6f1bd87ace4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
              alt=""
              className="w-full"
            />
          </div>
          <div className=" md:text-style smTextStyle ">
          <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ rotate: 90 }}
              className="md:text-5xl text-2xl font-bold font-serif   md:w-11/12"
            >
              Keep the Book . Grow Your Knowledge
            </motion.h1>
            <p className="md:w-6/12 font-serif my-3 text-lg">
              Increases knowledge and vocabulary: Reading is a great way to
              learn new things and expand your knowledge. It can also help
              improve your vocabulary, language skills, and communication
              abilities.F
            </p>
            <Link href="/product">
              {" "}
              <button className="btn btn-primary">let`s start</button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
