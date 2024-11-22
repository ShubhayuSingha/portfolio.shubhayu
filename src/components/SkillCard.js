import React, { useState } from 'react';

const SkillCard = ({ skill }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative w-48 h-64 m-4 perspective cursor-pointer" 
      onClick={toggleFlip}
    >
      <div 
        className={`relative w-full h-full transform-style-preserve transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-white text-gray-800 border rounded-lg shadow-lg backface-hidden">
          <img src={skill.logo} alt={skill.name} className="w-40 h-40 mb-2" />  {/* Increased size */}
          <h3 className="text-xl font-semibold font-poppins">{skill.name}</h3>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-pink-600 text-white border rounded-lg shadow-lg rotate-y-180 backface-hidden">
          <p className="text-center p-4 font-poppins">{skill.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
