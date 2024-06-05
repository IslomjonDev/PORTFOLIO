import React from 'react'
import './Skills.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithubSquare ,FaReact  , FaHtml5 , FaCss3Alt , FaBootstrap} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill , RiNextjsFill } from "react-icons/ri";

const Skills = () => {
  return (
    <>
      <div className="skills">
         <div className="container">
            <h1>Skills</h1>
         <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <FaHtml5 />
          <p>HTML</p>
        </SwiperSlide>
        <SwiperSlide>
            <FaCss3Alt />
            <p>CSS</p>
        </SwiperSlide>
        <SwiperSlide>
             <IoLogoJavascript />
            <p>JavaScript</p>
        </SwiperSlide>
        <SwiperSlide>
             <FaReact />
            <p>React</p>
        </SwiperSlide>
        <SwiperSlide>
            <FaBootstrap />
            <p>Bootstrap</p>
        </SwiperSlide>
        <SwiperSlide>
             <SiTypescript />
            <p>TypeScript</p>
        </SwiperSlide>
        <SwiperSlide>
            <RiTailwindCssFill />
            <p>Tailwind</p>
        </SwiperSlide>
        <SwiperSlide>
            <FaGithubSquare />
            <p>GitHub</p>
        </SwiperSlide>
        <SwiperSlide>
          <RiNextjsFill />
            <p>NextJs</p>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
    </>
  )
}

export default Skills;
