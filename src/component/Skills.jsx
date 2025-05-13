export default function FrontendSkills() {
  return (
    <div
      id="skills"
      className="flex items-center justify-center min-h-screen bg-cyan-100 px-2"
    >
      <div className="relative w-full max-w-xs sm:max-w-xl h-[400px] sm:h-[450px] flex items-center justify-center mx-auto">
        {/* Center Circle */}
        <div className="w-24 h-24 sm:w-44 sm:h-44 flex items-center justify-center text-center text-[10px] sm:text-lg font-bold text-gray-900 border-8 border-cyan-400 rounded-full bg-white shadow-lg z-10">
          Front End <br /> Developer <br /> Skills
        </div>

        {/* SVG Lines - Shortened for mobile */}
        <svg className="absolute w-full h-full" viewBox="0 0 450 450">
          <line x1="225" y1="157" x2="225" y2="40" stroke="gray" strokeWidth="2" />
          <line x1="270" y1="170" x2="360" y2="80" stroke="gray" strokeWidth="2" />
          <line x1="280" y1="210" x2="370" y2="200" stroke="gray" strokeWidth="2" />
          <line x1="270" y1="255" x2="360" y2="335" stroke="gray" strokeWidth="2" />
          <line x1="225" y1="280" x2="225" y2="390" stroke="gray" strokeWidth="2" />
          <line x1="200" y1="260" x2="80" y2="350" stroke="gray" strokeWidth="2" />
          <line x1="150" y1="230" x2="30" y2="230" stroke="gray" strokeWidth="2" />
          <line x1="170" y1="170" x2="60" y2="50" stroke="gray" strokeWidth="2" />
        </svg>

        {/* Skill Labels - mobile positions only changed */}
        <div className="absolute w-full h-full text-[10px] sm:text-sm font-semibold">
          <div className="absolute left-[43%] top-[8%] sm:top-[2%]">
            <div className="bg-white px-2 py-1 rounded-full shadow-md border text-yellow-500">HTML5</div>
          </div>
          <div className="absolute right-[8%] sm:right-[16%] top-[17%] sm:top-[11%]">
            <div className="bg-white px-2 py-1 rounded-full shadow-md border text-orange-400">CSS3</div>
          </div>
          <div className="absolute right-[0%] sm:right-[8%] top-[40%]">
            <div className="bg-white px-2 py-[2px] rounded-full shadow-md border text-red-500">Bootstrap</div>
          </div>
          <div className="absolute right-[2%] sm:right-[8%] top-[70%] sm:top-[73%]">
            <div className="bg-white px-2 py-1 rounded-full shadow-md border text-pink-400">Tailwind CSS</div>
          </div>
          <div className="absolute right-[38%] sm:right-[42%] bottom-[13%] sm:bottom-[6%]">
            <div className="bg-white px-2 py-1 rounded-full shadow-md border text-gray-700">JavaScript</div>
          </div>
          <div className="absolute left-[6] sm:left-[10%] bottom-[22%] sm:bottom-[16%]">
            <div className="bg-white px-2 py-1 rounded-full shadow-md border text-purple-500">React.js</div>
          </div>
          <div className="absolute left-[0%] sm:left-[6%] top-[48%]">
            <div className="bg-white px-2 py-1 rounded-full shadow-md border text-green-500">API</div>
          </div>
          <div className="absolute top-[12%] sm:top-[10%]  sm:left-[6%]">
            <div className="bg-white px-2 py-1 rounded-full shadow-md border text-green-400">Problem Solving</div>
          </div>
        </div>
      </div>
    </div>
  );
}
