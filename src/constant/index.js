// Step 1: Import all images from src/assets
import blogImg4 from "../assets/BlogsImg4.png";
import moittImg from "../assets/images.jpeg";
import coffeeImg from "../assets/images (1).jpeg";

// Step 2: Assign them in the array
const projects = [
  {
    link: "https://cars-website-peach.vercel.app/",
    title: "Cars-Website",
    description:
      "Developed a responsive car website showcasing car models, features, and specifications with an intuitive, user-friendly design.",
    image: blogImg4,
  },
  {
    link: "https://github.com/projectsReports/Ministry-Of-Information-Technology-Telecommunication-Clone/",
    title: "Technology and Telecommunication (MoITT)",
    description:
      "The Ministry of Information Technology and Telecommunication (MoITT) promotes IT development, telecommunications, and digital infrastructure to drive economic growth and innovation in Pakistan.",
    image: moittImg,
  },
  {
    link: "https://coffee-website-virid-pi.vercel.app",
    title: "Coffee-Website",
    description:
      "A coffee website showcases coffee products, brewing guides, accessories, and related content. It offers a cozy design, providing an engaging platform for coffee enthusiasts to explore and purchase.",
    image: coffeeImg,
  },
];

export { projects };
