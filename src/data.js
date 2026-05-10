import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/Autocad.png";
import Tools2 from "/assets/tools/sketchup.png";
import Tools3 from "/assets/tools/endscape.png";
import Tools4 from "/assets/tools/lumion.png";
import Tools5 from "/assets/tools/vray.png";
import Tools6 from "/assets/tools/ms.office.png";
import Tools7 from "/assets/tools/ps.png";
import Tools8 from "/assets/tools/ai.png";


export const listTools = [
  { id: 1, gambar: Tools1, nama: "AutoCad", ket: "2D Drafting", dad: "100" },
  { id: 2, gambar: Tools2, nama: "SketchUp", ket: "3D Modeling", dad: "200" },
  { id: 3, gambar: Tools3, nama: "EndScape", ket: "Real-Time Visualization", dad: "300" },
  { id: 4, gambar: Tools4, nama: "Lumion", ket: "Architectural Rendering & Animation", dad: "400" },
  { id: 5, gambar: Tools5, nama: "V-Ray", ket: "Photorealistic Rendering", dad: "500" },
  { id: 6, gambar: Tools6, nama: "Microsoft Office", ket: "Documentation & Presentation", dad: "600" },
  { id: 7, gambar: Tools7, nama: "Photoshop", ket: "Image Editing", dad: "700" },
  { id: 8, gambar: Tools8, nama: "AI", ket: "Rendering", dad: "800" },
];

import Proyek1 from "/assets/proyek/p1a.png";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.jpg";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.jpg";
import Proyek6 from "/assets/proyek/proyek6.jpg";

/** 
 * Fungsi Helper untuk menghasilkan array gallery secara otomatis
 * Menghasilkan: ["/assets/proyek/p1a.jpeg", "/assets/proyek/p1b.jpeg", ...]
 */
const generateGallery = (id) => {
  // Menggunakan /portofolio/ karena base URL di browser kamu memilikinya
  // Menggunakan .jpeg sesuai dengan nama file di gambar kamu
  return ['a', 'b', 'c', 'd', 'e'].map(char => `/portofolio/assets/proyek/p${id}${char}.png`);
};

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "JT. HOUSE",
    subtitle: "This grand Neo-classical residence exudes timeless elegance through...",
    fullDescription: "This grand Neo-classical residence exudes timeless elegance through its perfectly symmetrical facade and iconic mansard roof. The sophisticated contrast between the graceful white columns and the rugged black natural stone base creates a commanding visual presence. Every detail—from the intricate stained glass entrance to the classical sculptures—marks this building as an architectural masterpiece of unparalleled luxury.",
    gallery: generateGallery(1),
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "IoT Air Quality Monitoring",
    subtitle: "A smart IoT system designed to measure and analyze air quality...",
    fullDescription: "A smart IoT system designed to measure and analyze air quality using sensors connected to a mobile application. The app provides real-time updates on air quality levels, empowering users to make healthier lifestyle decisions based on environmental conditions. This project showcases the potential of IoT in addressing environmental and public health issues.",
    gallery: generateGallery(2),
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "IoT Heartbeat Monitoring System",
    subtitle: "An IoT-based healthcare project developed to measure and monitor...",
    fullDescription: "An IoT-based healthcare project developed to measure and monitor heart rate in real-time. The system connects sensors to a local web server, enabling users and healthcare providers to track data directly from a web interface. This project highlights the integration of hardware and software to create efficient medical solutions that can be applied in local clinics or personal health monitoring.",
    gallery: generateGallery(3),
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Personal Web Portfolio",
    subtitle: "An interactive web portfolio showcasing my professional journey...",
    fullDescription: "An interactive web portfolio showcasing my professional journey, skills, and projects. Designed with a clean yet modern aesthetic, the portfolio highlights my technical expertise in web development, software engineering, and IoT. The site also serves as a central hub for potential employers and collaborators to explore my works, reflecting both my creativity and technical precision.",
    gallery: generateGallery(4),
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Color Blindness Detection App",
    subtitle: "A cross-platform application available on both mobile and desktop...",
    fullDescription: "A cross-platform application available on both mobile and desktop, created to help identify different types of color blindness through color recognition tests. The app provides users with instant results, making it useful for educational, medical, and self-assessment purposes. Its intuitive design and accessibility aim to support individuals in understanding and managing color vision deficiencies.",
    gallery: generateGallery(5),
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "Coffee Shop Website",
    subtitle: "A fully functional website designed for a coffee shop, enabling...",
    fullDescription: "A fully functional website designed for a coffee shop, enabling customers to explore the menu, learn about the shop’s story, and place orders online. The project focused on creating an attractive and modern interface, integrating responsive design for mobile and desktop, and ensuring smooth navigation for users. This website not only improved customer experience but also supported the coffee shop’s digital presence and business growth.",
    gallery: generateGallery(6),
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "600",
  },
  {
    id: 7,
    image: Proyek3,
    title: "IoT Heartbeat Monitoring System 2",
    subtitle: "An IoT-based healthcare project developed to measure and monitor...",
    fullDescription: "An IoT-based healthcare project developed to measure and monitor heart rate in real-time.",
    gallery: generateGallery(7),
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "300",
  },
  {
    id: 8,
    image: Proyek4,
    title: "Personal Web Portfolio 2",
    subtitle: "An interactive web portfolio showcasing my professional journey...",
    fullDescription: "An interactive web portfolio showcasing my professional journey.",
    gallery: generateGallery(8),
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "400",
  },
  {
    id: 9,
    image: Proyek5,
    title: "Color Blindness Detection App 2",
    subtitle: "A cross-platform application available on both mobile and desktop...",
    fullDescription: "A cross-platform application available on both mobile and desktop.",
    gallery: generateGallery(9),
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "500",
  },
  {
    id: 10,
    image: Proyek6,
    title: "Coffee Shop Website 2",
    subtitle: "A fully functional website designed for a coffee shop, enabling...",
    fullDescription: "A fully functional website designed for a coffee shop.",
    gallery: generateGallery(10),
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "600",
  },
];