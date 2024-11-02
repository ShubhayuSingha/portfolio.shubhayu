import React, { useState, useEffect } from 'react';
import myFirstWebsiteImage from '../assets/images/ProjectThumbnails/myFirstWebsite.png';

const projects = [
  {
    id: 1,
    title: 'My First Website',
    description: 
`This is my first website, which I developed with both front-end and back-end components.

The most challenging sections were: "See Previous Visitors" and "Play Hangman." 

Visit it at <a href="https://shubhayu.onrender.com" target="_blank" style="color: blue">shubhayu.onrender.com</a>
(If the website fails to load within a few seconds, wait a few moments. The free tier hosting of render shuts the website off sometimes.)

If you want to see the technical stuffs, check out - 
<a href="https://github.com/ShubhayuSingha/shubhayu" target="_blank" style="color: blue">GITHUB</a>`,
    thumbnail: myFirstWebsiteImage,
  },
  // {
  //   id: 2,
  //   title: 'Coming soon...',
  //   description: 'You will soon see it.',
  //   thumbnail: myFirstWebsiteImage,
  // }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const createMarkup = (description) => {
    return { __html: description.replace(/\n/g, '<br />') };
  };

  // Effect to manage body overflow when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = ''; // Restore scrolling
    }
    // Clean up function to restore overflow on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-r from-yellow-200 to-yellow-600 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold font-roboto text-center mb-8">
        <span className="bg-pink-200 p-2 rounded-md shadow-md">PROJECTS</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-300 bg-white p-6 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 w-full max-w-xs"
            onClick={() => openModal(project)}
          >
            <img
              src={project.thumbnail}
              alt={`${project.title} Thumbnail`}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold font-poppins">{project.title}</h3>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 font-poppins"
          onClick={closeModal}
        >
          <div
            className="bg-white text-gray-800 p-6 rounded-lg mx-4 sm:mx-6 md:mx-8 lg:mx-10 max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto max-h-[80%] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p dangerouslySetInnerHTML={createMarkup(selectedProject.description)} className="whitespace-pre-wrap" />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
