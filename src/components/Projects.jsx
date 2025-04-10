import React from "react";
import { Link } from "react-router-dom";
import { PinContainer } from "../components/ui/card";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with React and Tailwind CSS",
      gradient: "from-violet-500 via-purple-500 to-blue-500"
    },
    {
      title: "E-commerce App",
      description: "Full-stack e-commerce platform with payment integration",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    {
      title: "Task Manager",
      description: "Productivity app with drag-and-drop functionality",
      gradient: "from-rose-500 via-pink-500 to-fuchsia-500"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application",
      gradient: "from-amber-500 via-orange-500 to-red-500"
    },
    {
      title: "Social Media Clone",
      description: "Twitter-like platform with real-time updates",
      gradient: "from-indigo-500 via-blue-500 to-sky-500"
    },
    {
      title: "Recipe Finder",
      description: "AI-powered recipe recommendation engine",
      gradient: "from-lime-500 via-green-500 to-emerald-500"
    },
  ];

  return (
    <div className="min-h-screen text-white p-8 flex flex-col items-center">
      {/* Navigation - Fixed at top */}
      <nav className="w-full max-w-4xl flex justify-center gap-8 mb-18 text-gray-400">
  <Link 
    to="/" 
    className="group relative hover:text-white transition-colors"
  >
    Home
    <span className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
  </Link>
  
  <Link 
    to="/projects" 
    className="group relative text-white"
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

      {/* Scrollable Projects Container */}
      <div className="w-full overflow-y-auto h-[80vh]">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-center gap-8 h-[24rem]">
          {projects.slice(0, 3).map((project, index) => (
            <PinContainer 
              key={index}
              as="div"
              title={project.title}
              containerClassName="cursor-pointer w-full"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    {project.description}
                  </span>
                </div>
                <div className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`} />
              </div>
            </PinContainer>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row justify-center gap-8 h-[32rem]">
          {projects.slice(3, 6).map((project, index) => (
            <PinContainer 
              key={index + 3}
              as="div"
              title={project.title}
              containerClassName="cursor-pointer w-full"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    {project.description}
                  </span>
                </div>
                <div className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`} />
              </div>
            </PinContainer>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex flex-col md:flex-row justify-center gap-8 h-[24rem]">
          {projects.slice(0, 3).map((project, index) => (
            <PinContainer 
              key={index}
              as="div"
              title={project.title}
              containerClassName="cursor-pointer w-full"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    {project.description}
                  </span>
                </div>
                <div className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`} />
              </div>
            </PinContainer>
          ))}
        </div>

        {/* Row 4 */}
        <div className="flex flex-col md:flex-row justify-center gap-8 h-[24rem]">
          {projects.slice(3, 6).map((project, index) => (
            <PinContainer 
              key={index + 3}
              as="div"
              title={project.title}
              containerClassName="cursor-pointer w-full"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {project.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    {project.description}
                  </span>
                </div>
                <div className={`flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br ${project.gradient}`} />
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;