export default function FrontendSkills() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-100" id="skills">
      <div className="relative w-[450px] h-[450px] flex items-center justify-center">
        
        {/* Center Circle */}
        <div className="w-44 h-44 flex items-center justify-center text-center text-lg font-bold text-gray-900 border-8 border-cyan-400 rounded-full bg-white shadow-lg">
          Front End <br /> Developer <br /> Skills
        </div>

        {/* SVG Lines */}
        <svg className="absolute w-full h-full" viewBox="0 0 450 450">
          <line x1="225" y1="137" x2="225" y2="45" stroke="gray" strokeWidth="2" /> {/* HTML */}
          <line x1="280" y1="150" x2="360" y2="70" stroke="gray" strokeWidth="2" /> {/* CSS - aligned to CSS3 label */}
          <line x1="310" y1="195" x2="390" y2="170" stroke="gray" strokeWidth="2" /> {/* Bootstrap - slightly lowered */}
          <line x1="310" y1="255" x2="400" y2="305" stroke="gray" strokeWidth="2" />
          <line x1="225" y1="313" x2="225" y2="405" stroke="gray" strokeWidth="2" />
          <line x1="155" y1="285" x2="100" y2="370" stroke="gray" strokeWidth="2" />
          <line x1="135" y1="240" x2="50" y2="245" stroke="gray" strokeWidth="2" />
          <line x1="170" y1="150" x2="80" y2="80" stroke="gray" strokeWidth="2" />
        </svg>

        {/* Skill Labels - adjusted spacing */}
        <div className="absolute w-full h-full text-sm font-semibold">
          <div className="absolute" style={{ left: '202px', top: '10px' }}>
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-yellow-500">HTML5</div>
          </div>

          {/* CSS3 - line is now pointing more precisely to this spot */}
          <div className="absolute" style={{ right: '30px', top: '35px' }}>
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-orange-400">CSS3</div>
          </div>

          {/* Bootstrap - moved slightly down */}
          <div className="absolute" style={{ right: '20px', top: '160px' }}>
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-red-500">Bootstrap</div>
          </div>

          <div className="absolute" style={{ right: '10px', bottom: '115px' }}>
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-pink-400">Tailwind CSS</div>
          </div>
          <div className="absolute" style={{ left: '195px', bottom: '10px' }}>
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-gray-700">JavaScript</div>
          </div>
          <div className="absolute" style={{ left: '50px', bottom: '70px' }}>
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-purple-500">React.js</div>
          </div>
          <div className="absolute" style={{ left: '10px', top: '230px' }}>
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-green-500">API</div>
          </div>
          <div className="absolute" style={{ left: '35px', top: '45px' }}>
            <div className="bg-white px-3 py-1 rounded-full shadow-md border text-green-400">Problem Solving</div>
          </div>
        </div>
      </div>
    </div>
  );
}
