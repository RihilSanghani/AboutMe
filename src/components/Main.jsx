import React, { useEffect } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"



const Main = () => {
  // const scrollToContact = () => {
  //   window.scrollTo({
  //     top: 2700,
  //     behavior: "smooth",

  //   });
  // };

  // const scrollToContactM = () => {
  //   window.scrollTo({
  //     top: 3600,
  //     behavior: "smooth",

  //   });
  // };

  // const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div id='home' className='w-screen h-screen text-center px-8 bg-[#ecf0f3]'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <div data-aos="fade-down" data-aos-duration="1500">
            <p className='uppercase text-sm tracking-widest text-gray-600'>
              LET&#39;S BUILD SOMETHING TOGETHER
            </p>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1500">
            <h1 className='py-4 text-6xl font-bold text-gray-700'>
              Hi, I&#39;m <span className='text-[#5651e5]'> Rihil</span>
            </h1>
            <h1 className='py-2 text-6xl font-bold text-gray-700'>A Full-Stack Web Developer</h1>
            <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            "Innovative MERN Stack Developer creating user-focused, future-ready web solutions that deliver real impact and success."
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <a
                href='https://www.linkedin.com/in/rihil-sanghani/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href='https://github.com/RihilSanghani'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGithub />
                </div>
              </a>
              <a
                href='https://www.instagram.com/rihil_sanghani/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineInstagram />
                </div>
              </a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <Link exact to='/resume'>
                  <BsFillPersonLinesFill />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;