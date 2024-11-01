import React from 'react';
import { Link } from 'react-scroll';
import Typewriter from './Typewriter'; // Make sure to import the Typewriter component

function Home() {
  return (
    <section 
      id="home" 
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-red-600 text-white text-center overflow-hidden"
    >
      <h1 className="text-5xl font-poppins md:text-6xl lg:text-7xl break-words">
        Hello! It's <br />
        <span className='font-poppins' style={{ minWidth: '300px', display: 'inline-block' }}>
          <Typewriter text="S.hubhayu!" speed={100} />
        </span>
      </h1>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl font-poppins break-words">
        And this is my portfolio!
      </p>
      <p className="mt-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl text-base md:text-lg font-poppins text-center break-words px-4">
        Use the navigation bar on top to jump between sections.
      </p>
      <Link 
        to="about" // ID of the My Skills section
        smooth={true} 
        duration={500} 
        className="mt-6 px-6 py-3 bg-yellow-500 text-gray-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300 cursor-pointer"
      >
        <span className="font-poppins"> Get Started With My Skills</span>
      </Link>
    </section>
  );
}

export default Home;
