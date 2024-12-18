import React, { useEffect, useState } from 'react';

const About: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  // Trigger the fade-in animation on mount
  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div
      className={`m-5 max-w-4xl mx-auto bg-gradient-to-r from-[#1F2937] via-[#1F2937] to-[#1F2937] text-white p-8 rounded-2xl shadow-xl hover:scale-105 transform transition-all duration-300 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-6 tracking-wider animate__animated animate__fadeInUp animate__delay-500ms">
        Deepfake Detection Using Deep Learning
      </h1>
      <h2 className="text-2xl font-semibold text-center text-teal-200 mb-4 animate__animated animate__fadeInUp animate__delay-700ms">
        Team: C5
      </h2>
      <p className="text-lg text-center text-gray-200 mb-6 animate__animated animate__fadeInUp animate__delay-900ms">
        Mentor: Subramanian
      </p>

      <div className="space-y-6">
        <div className="flex justify-between items-center p-4 bg-white text-black rounded-lg shadow-md hover:bg-teal-100 transition-colors animate__animated animate__fadeInUp animate__delay-1100ms">
          <span className="font-medium">Rojith M</span>
          <span className="text-gray-500">Reg: 714022104125</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-white text-black rounded-lg shadow-md hover:bg-teal-100 transition-colors animate__animated animate__fadeInUp animate__delay-1300ms">
          <span className="font-medium">Sudhakaran</span>
          <span className="text-gray-500">Reg: 714022104150</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-white text-black rounded-lg shadow-md hover:bg-teal-100 transition-colors animate__animated animate__fadeInUp animate__delay-1500ms">
          <span className="font-medium">Thirunavu Karasu V A</span>
          <span className="text-gray-500">Reg: 714022104166</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-white text-black rounded-lg shadow-md hover:bg-teal-100 transition-colors animate__animated animate__fadeInUp animate__delay-1700ms">
          <span className="font-medium">Vishwa R</span>
          <span className="text-gray-500">Reg: 714022104178</span>
        </div>
      </div>
    </div>
  );
};

export default About;
