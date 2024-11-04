import React from 'react';
import SkillCard from './SkillCard';
import javaLogo from '../assets/logos/java.png';
import pythonLogo from '../assets/logos/python.png';
import cLogo from '../assets/logos/c.png';
import cppLogo from '../assets/logos/cpp.png';
import nodejsLogo from '../assets/logos/nodejs.png';
import htmlLogo from '../assets/logos/html.png';
import cssLogo from '../assets/logos/css.png';
import jsLogo from '../assets/logos/javascript.png';
import photoshopLogo from '../assets/logos/photoshop.png';
import vegasLogo from '../assets/logos/vegas.png';
import solidityLogo from '../assets/logos/solidity.png';
import reactLogo from '../assets/logos/react.png';
import tailwindLogo from '../assets/logos/tailwind.png';

// Make sure the logos are square and of 1000x1000 px
const skills = [
  {
    name: 'Java',
    logo: javaLogo, 
    description: 'A versatile, object-oriented programming language that can be compiled into bytecode that runs on any platform with a Java Virtual Machine (JVM).',
  },
  {
    name: 'Python',
    logo: pythonLogo,
    description: 'A programming language known for its simplicity and readability, widely used in data science, artificial intelligence, and more.',
  },
  {
    name: 'C',
    logo: cLogo,
    description: 'A powerful, low-level language known for its efficiency and control over hardware, making it ideal for system programming and embedded systems.',
  },
  {
    name: 'C++',
    logo: cppLogo,
    description: 'An extension of C, offering object-oriented and generic programming features, widely used for high-performance apps and game development.',
  },
  {
    name: 'JavaScript',
    logo: jsLogo,
    description: 'A versatile scripting language used to create interactive web pages, from simple animations to complex web apps and is often paired with HTML and CSS for web development.',
  },
  {
    name: 'NodeJS',
    logo: nodejsLogo,
    description: 'A JavaScript runtime environment that allows you to build server-side applications, like web servers, APIs, and real-time applications, using JavaScript.',
  },
  {
    name: 'HTML',
    logo: htmlLogo,
    description: 'A standard markup language for creating web pages. It defines the structure and content of a webpage, including headings, paragraphs, images, and links.',
  },
  {
    name: 'CSS',
    logo: cssLogo,
    description: 'A stylesheet language used to describe the presentation of HTML documents, controlling layout and design.',
  },
  {
    name: 'React',
    logo: reactLogo,
    description: 'A popular JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering.'
  },
  {
    name: 'Tailwind',
    logo: tailwindLogo,
    description: 'A utility-first CSS framework that enables rapid UI development by providing predefined classes for styling and customisation in design.',
  },
  {
    name: 'Solidity',
    logo: solidityLogo,
    description: 'A high-level programming language for writing smart contracts on various blockchains, most notably the Ethereum blockchain.',
  },
  {
    name: 'Vegas Pro',
    logo: vegasLogo,
    description: 'An application for advanced video and audio editing, colour grading and visual effects. It is known for being non-linear and has an intuitive interface.',
  },
  {
    name: 'Photoshop',
    logo: photoshopLogo,
    description: 'A powerful image editing software used for photo editing, graphic design, and digital art.',
  },  
];

const MySkills = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 font-roboto"><span className="bg-pink-200 p-2 rounded-md shadow-md">MY SKILLS</span></h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
