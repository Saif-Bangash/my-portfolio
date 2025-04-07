export default function FrontendSkills() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-100" id="skills">
      <div className="relative w-full h-[450px] flex items-center justify-center max-w-xl mx-auto">
        
        {/* Center Circle */}
        <div className="w-30 h-30 sm:w-44 sm:h-44 flex items-center justify-center text-center text-sm sm:text-lg font-bold text-gray-900 border-8 border-cyan-400 rounded-full bg-white shadow-lg">
          Front End <br /> Developer <br /> Skills
        </div>

        {/* SVG Lines */}
        <svg className="absolute w-full h-full" viewBox="0 0 450 450">
          <line x1="225" y1="137" x2="225" y2="45" stroke="gray" strokeWidth="2" /> {/* HTML */}
          <line x1="280" y1="150" x2="360" y2="70" stroke="gray" strokeWidth="2" /> {/* CSS - aligned to CSS3 label */}
          <line x1="300" y1="205" x2="420" y2="195" stroke="gray" strokeWidth="2" /> {/* Bootstrap - slightly lowered */}
          <line x1="300" y1="275" x2="400" y2="355" stroke="gray" strokeWidth="2" />
          <line x1="225" y1="313" x2="225" y2="405" stroke="gray" strokeWidth="2" />
          <line x1="155" y1="285" x2="60" y2="370" stroke="gray" strokeWidth="2" />
          <line x1="135" y1="230" x2="10" y2="235" stroke="gray" strokeWidth="2" />
          <line x1="170" y1="150" x2="80" y2="80" stroke="gray" strokeWidth="2" />
        </svg>

        {/* Skill Labels - adjusted spacing */}
        <div className="absolute w-full h-full text-sm font-semibold">
          <div className="absolute left-35 top-16 sm:left-62 sm:top-0"  >
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-yellow-500">HTML5</div>
          </div>

          {/* CSS3 - line is now pointing more precisely to this spot */}
          <div className="absolute right-2 top-22 sm:right-25 sm:top-8"  >
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-orange-400">CSS3</div>
          </div>

          {/* Bootstrap - moved slightly down */}
          <div className="absolute right-0 top-48 sm:right-0 sm:top-44"  >
            <div className="bg-white px-2 py-[2px] rounded-full shadow-md border text-red-500">Bootstrap</div>
          </div>

          <div className="absolute right-0 top-77 sm:right-0 sm:top-90"  >
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-pink-400">Tailwind CSS</div>
          </div>
          <div className="absolute  right-25 bottom-16 sm:right-58 sm:top-105"  >
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-gray-700">JavaScript</div>
          </div>
          <div className="absolute left-0 bottom-25 sm:left-5 sm:bottom-12"  >
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-purple-500">React.js</div>
          </div>
          <div className="absolute left-0 bottom-52 sm:left-3 sm:top-55"  >
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-green-500">API</div>
          </div>
          <div className="absolute top-20 sm:left-3 sm:top-10"  >
            <div className="bg-white px-2 py-1 rounded-full shadow-md border text-green-400 text-xs sm:text-lg">Problem Solving</div>
          </div>
        </div>
      </div>
    </div>
  );
}
