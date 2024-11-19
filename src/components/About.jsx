import React from 'react';
import AboutImg from '../assets/About1.jpg';
// import { Link } from 'react-scroll';

const About = () => {
  return (
    <div id='about' className='w-screen bg-[#ecf0f3] md:h-screen p-2 flex items-center py-16 px-8'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <div data-aos="flip-down" data-aos-duration="2000">
            <p className='uppercase text-4xl tracking-widest text-[#5651e5]'>
              About
            </p>
            <h2 className='py-4'>Who I Am</h2>
          </div>
          <div data-aos="fade-right" data-aos-duration="2000">
            <p className='py-2 text-gray-600'>
            I’m Rihil Sanghani, a passionate software developer with over two years of experience specializing in building responsive web applications and crafting seamless user interfaces using the MERN stack. I thrive on solving complex challenges, developing scalable solutions, and delivering applications that provide exceptional user experiences. Currently pursuing a diploma in Computer Programming at Sheridan College, I have honed my skills in React, Node.js, and MongoDB, while staying updated with the latest technologies and industry trends.
            </p>
            <p className='py-2 text-gray-600'>
            My journey in software development has been marked by a dedication to innovation and quality. I’ve worked on award-winning projects like BookMyTable, which was recognized as a top-ranked project at both college and university levels. With a focus on best practices and continuous learning, I aim to create impactful solutions that not only meet but exceed user expectations. Whether it’s developing scalable architectures or crafting engaging front-end designs, I’m committed to making technology accessible and meaningful.
            </p>
            {/* <p className='py-2 text-gray-600'>
              Recent graduate student looking for an opportunity in Web Development. Highly
              poised and dedicated with a strong education in design principles and
              programming languages. I have always had a knack for technology and working with computers. In 2019 I started working
              with HTML and CSS to make some minor edits. What I thought was just a few small edits turned into a love for programming.
            </p>
            <p className='py-2 text-gray-600'>
              Fascinated with how intricate programming can be I was quickly drawn
              to learn more. I started learning javascript and was even more
              enthused with making websites interactive. I am now spending my time building projects with React JS, Firebase, and
              learning new technologies.
            </p> */}
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <div className='w-100 h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <img src={AboutImg} className='rounded-xl' alt='/' />
          </div>
        </div>
      </div>
    </div >
  );
};

export default About;
