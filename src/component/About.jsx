export default function About() {
  return (
    <section className="bg-gray-900 text-white py-33 px-6 md:px-16 lg:px-32" id="about">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 mb-6">
            I'm a   Frontend Developer with one year experience in building
            modern and responsive web applications. I specialize in React,
            Tailwind CSS, and creating intuitive UI/UX designs.
          </p>
          <p className="text-gray-400 mb-6">
            I am always eager to learn new technologies and take on challenging
            projects. Let's build something great together!
          </p>
          <a
            href="#contact"
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-600 transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Neon Glow Effect */}
            <div className="absolute inset-0 bg-cyan-500 rounded-lg blur-xl opacity-50"></div>

            {/* Profile Image with Hexagonal Shape */}
            <div className="relative w-60 h-60 bg-gray-800 rounded-lg flex items-center justify-center">
              <img
                src="src/assets/profile-logo.jpg" // Make sure image is placed in `public/assets/`
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
                style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
