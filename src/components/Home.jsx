import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Music2, Sun } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen text-white p-8 flex flex-col items-center">
      {/* Navigation */}
      <nav className="w-full max-w-4xl flex justify-center gap-8 mb-24 text-gray-400">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="hover:text-white transition-colors">Projects</a>
        <a href="#" className="hover:text-white transition-colors">Music</a>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-2xl flex flex-col items-center text-center mt-24">
        {/* Hero Section */}
        <h1 className="text-7xl font-bold mb-6">Ajith Reddy</h1>
        <p className="text-xl text-gray-300 mb-8">
          Hey! I'm <span className="text-white">Ajith</span>,{' '}
          <div className="bg-gradient-to-r to-yellow-400 from-orange-500 text-black w-max text-[4vw] sm:text-sm lg:text-base py-1 px-2 rounded font-bold"><Typewriter
            options={{
              strings: ['Front-end Developer', 'Cyber Security Intern', 'Soc Analyst', ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
          </div>
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mb-12">
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