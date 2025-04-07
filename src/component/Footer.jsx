import { FaGithub } from "react-icons/fa"; // Import GitHub icon

export default function Footer() {
  return (
    <footer className="bg-cyan-100 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-start grid grid-cols-1 md:grid-cols-3 gap-8  sm:text-start md:text-left">
        {/* Useful Links */}
        <div className="text-black">
          <h3 className="text-lg font-semibold mb-3 text-cyan-400">
            USEFUL LINKS
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#about" className="hover:text-cyan-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400">
                Project
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-cyan-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-black">
          <h3 className="text-lg font-semibold mb-3 text-cyan-400">
            NEWSLETTER
          </h3>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-cyan-300 mb-4"
          />
          <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition-all">
            SUBSCRIBE NOW
          </button>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-cyan-400">CONTACT</h3>
          <p className="text-gray-600">
            Commercial Market Satellite Town Block B
          </p>
          <p className="text-gray-600">Rawalpindi, Pakistan</p>

          <div className="flex flex-col justify-center md:justify-start space-x-6 mt-6 text-black">
            {/* GitHub Link */}
            <a
              href="https://github.com/Saif-Bangash" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-xl hover:text-cyan-400 transition-all flex items-center gap-2"
            >
              <FaGithub className="inline-block text-2xl" />
              GitHub Link
            </a>

            {/* Phone Number */}
            <div className="flex flex-col   sm:text-left md:items-start py-5">
              <span className="text-gray-500 ">Phone:</span>
              <p className="text-gray-400 mt-2 ">+92 332 6767 615</p>
            </div>

            {/* Email */}
            <div className="flex flex-col   md:items-start">
              <span className="text-gray-500">Email:</span>
              <p className="text-gray-400 mt-2">saifbangash480@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-center py-4 mt-8">
        <p className="text-gray-400">
          &copy; 2025 Saif ullah Bangash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
