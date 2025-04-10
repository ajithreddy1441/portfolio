import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Music2, Sun } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import profileImage from '../assets/Dp.jpg';
import { Link } from 'react-router-dom';

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Function to open resume
  const openResume = () => {
    fetch('/Ajith Reddy.pdf')
      .then(response => {
        if (response.ok) {
          window.open('/Ajith Reddy.pdf', '_blank');
        } else {
          console.error('PDF not found - Status:', response.status);
          alert('Resume file not found on server');
        }
      })
      .catch(err => console.error('Failed to fetch PDF:', err));
  };

  return (
    <div className="min-h-screen text-white p-8 flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full max-w-4xl flex justify-center gap-8 mb-24 text-gray-400">
  <Link 
    to="/" 
    className="group relative text-white"
  >
    Home
    <span className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
  </Link>
  
  <Link 
    to="/projects" 
    className="group relative hover:text-white transition-colors"
  >
    Projects
    <span className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 ${location.pathname === '/projects' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
  </Link>
  
  <Link 
    to="#" 
    className="group relative hover:text-white transition-colors"
  >
    Skills
    <span className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 ${location.pathname === '#' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
  </Link>
</nav>

      {/* Main Content */}
      <main className="w-full max-w-2xl flex flex-col items-center text-center mt-18">
        {/* Hero Section */}
        <img
          src={profileImage}
          alt="Ajith Reddy"
          className="w-32 h-32 rounded-full border-4 border-yellow-300 mb-6 object-cover"
        />
        <p className="text-xl text-white mb-6">
          Hey! I'm <span className="text-yellow-300 font-bold">Ajith Reddy,</span>
        </p>
        <div className="bg-gradient-to-r to-blue-400 from-purple-500 text-black w-max text-[4vw] sm:text-sm lg:text-base py-1 px-2 rounded font-bold mb-4">
          <Typewriter
            options={{
              strings: ['Front-end Developer', 'Cyber Security Intern', 'SOC Analyst'],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mb-10 mt-4">
          <button
            onClick={openResume}
            className="bg-blue-400 text-white py-2 px-6 rounded hover:bg-purple-600 transition-colors font-bold"
          >
            Resume
          </button>
          <button
            onClick={() => alert('About Section Placeholder')}
            className="bg-blue-400 text-white py-2 px-6 rounded hover:bg-purple-600 transition-colors font-bold"
          >
            About
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-10">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Music2 size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        
        {/* Status Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <Sun size={18} className="text-yellow-500" />
            <span>
              {currentTime.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • {currentTime.toLocaleTimeString()}
            </span>
          </div>
          <p className="text-gray-300">
            32.9 °C with haze in <span className="text-white">Visakhapatnam</span>.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;