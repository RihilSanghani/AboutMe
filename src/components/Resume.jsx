import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Resume = () => {
  const scrollToBack = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",

    });
  };
  return (
    <div id='resume' className='w-full p-2 mt-0 items-center bg-[#ecf0f3] py-10 px-8'>
      <p className='text-4xl tracking-widest uppercase text-[#5651e5]'>
        Resume
      </p>
      <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
        <h2 className='text-center'>Rihil Sanghani</h2>
        <div className='flex'>
          <a
            href='https://www.linkedin.com/in/rihil-sanghani-713255227'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
          </a>
          <a
            href='https://github.com/RihilSanghani'
            target='_blank'
            rel='noreferrer'
          >
            <FaGithub size={20} style={{ marginRight: '1rem' }} />
          </a>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 rounded inline-flex items-center">
            <a href='/Resume.pdf' download={true} className='underline cursor-pointer text-decoration-line: none;' rel="noreferrer" target='_blank'>
              Download
            </a>
          </button>
        </div>
      </div>
      <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
        <div className='hidden sm:block'>
          <p>
            Proven Leadership <span className='px-1'>|</span> Full-Stack Web Development{' '}
            <span className='px-1'>|</span> Complex Problem Solving
          </p>
        </div>
        <div className='block sm:hidden'>
          <p>Proven Leadership</p>
          <p className='py-2'>Web Development</p>
          <p>Complex Problem Solving</p>
        </div>
      </div>
      <p>
        Analytical, innovative, and motivated web development beginner. Adept at developing strategies and driving streamlined
        operations. Diverse analytical skills, team collaboration, and
        relationship building. Motivated leader with solid interpersonal abilities and complex problem-solving skills.
        Effective and proven track record of critical thinking, idea
        generation, and optimizing efficiencies.
      </p>

      {/* Skills */}
      <div className='text-center py-4'>
        <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
        <p className='py-2'>Python
          <span className='px-2'>|</span>Data Science
          <span className='px-2'>|</span>AI
          <span className='px-2'>|</span>ML
          <span className='px-2'>|</span>Web Scraping
          <span className='px-2'>|</span>React (MERN)
          <span className='px-2'>|</span>Asp .net
          <span className='px-2'>|</span>Django
        </p>
      </div>

      <h5 className='text-center underline text-[18px] py-4'>
        EDUCATION
      </h5>
      <div className="text-center">
        {/* EDUCATION */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Advanced Diploma In Information Technology
            </span>
            <span className='px-2'>|</span>Brampton, Canada
          </p>
          Sheridan collage
          <p className='py-1 italic'>2023-Running...</p>
          <ul className='px-7 py-1 list-disc list-inside leading-relaxed'>
            <li>
              Gained Advance knowledge of Data Science, AI, ML and Software Development.
            </li>
            {/* <li>
              Overall GPA : 8.75
            </li> */}
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Diploma In Information Technology
            </span>
            <span className='px-2'>|</span>Surat
          </p>
          Gujarat Technological University
          <p className='py-1 italic'>2019-2022</p>
          <ul className='px-7 py-1 list-disc list-inside leading-relaxed'>
            <li>
              Gained basic knowledge of I.T. Department.
            </li>
            <li>
              Overall GPA : 8.75
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Secondary School</span>
            <span className='px-2'>|</span>Surat
          </p>
          <p className='py-1 italic'>2018-2019</p>
          <ul className='list-disc list-inside px-7 py-1 leading-relaxed'>
            <li>
              Academic Excellence In Science, English, Social Science And Mathematics.
            </li>
            <li>
              Percentage: 79.33%
            </li>
            <li>
              Percentile Rank: 95.00%
            </li>
          </ul>
        </div>
        <Link to='/' onClick={scrollToBack}>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};


export default Resume;
