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

/* =====================================================
   IMPORT GAMBAR & VIDEO PROYEK
===================================================== */
import Proyek1 from "/assets/proyek/p1a.png";
import Proyek2 from "/assets/proyek/p2a.png";
import Proyek3 from "/assets/proyek/p3a.png";
import Proyek5 from "/assets/proyek/p5a.png"; // <--- IMPORT PROYEK 5 DI SINI
import Proyek10 from "/assets/proyek/p10a.png"; 

// --- IMPORT KHUSUS PROYEK 4 ---
import Proyek4Img from "/assets/proyek/p4a.png"; 
import Proyek4Vid1 from "/assets/proyek/video1.mp4"; // Ganti dengan nama file mp4 asli lu
import Proyek4Vid2 from "/assets/proyek/video2.mp4"; // Ganti dengan nama file mp4 asli lu
import Proyek4Vid3 from "/assets/proyek/video3.mp4"; // Ganti dengan nama file mp4 asli lu


/** * Fungsi Helper untuk menghasilkan array gallery secara otomatis
 * Menghasilkan: ["/assets/proyek/p1a.jpeg", "/assets/proyek/p1b.jpeg", ...]
 */
const generateGallery = (id) => {
  // Menggunakan /portofolio/ karena base URL di browser kamu memilikinya
  // Menggunakan .png sesuai dengan nama file di gambar kamu
  return ['a', 'b', 'c', 'd', 'e'].map(char => `/portofolio/assets/proyek/p${id}${char}.png`);
};

export const listProyek = [
  // --- PROYEK 1 (SUDAH FIX) ---
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
  // --- PROYEK 2 (SUDAH FIX) ---
  {
    id: 2,
    image: Proyek2,
    title: "SAGARA BALI",
    subtitle: "SAGARA BALI is a coastal villa concept designed for the serene atmosphere...",
    fullDescription: "SAGARA BALI is a coastal villa concept designed for the serene atmosphere of Canggu, Bali, embracing a seamless connection between architecture, nature, and the ocean. The design combines tropical modern aesthetics with warm natural materials such as timber, stone, and glass, creating an open and breathable living environment. Large openings, expansive terraces, and panoramic views enhance natural light and cross-ventilation, while the interior layout prioritizes comfort, privacy, and a strong visual relationship with the surrounding landscape. The concept reflects a refined balance between luxury living and the relaxed spirit of Bali’s coastal lifestyle.",
    gallery: generateGallery(2),
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "200",
  },
  // --- PROYEK 3 (SUDAH FIX) ---
  {
    id: 3,
    image: Proyek3,
    title: "The WOFL Karaoke",
    subtitle: "The WOFL Karaoke design adopts a luxury contemporary interior concept...",
    fullDescription: "The WOFL Karaoke design adopts a luxury contemporary interior concept, featuring textured fabric wall panels, acoustic materials, and refined wood and metal accents to create a warm, intimate, and exclusive atmosphere. Integrated indirect LED lighting enhances the spatial depth and adds a dramatic ambiance, while the use of dark grey and neutral tones maintains a modern, calm, and sophisticated character throughout the space.",
    gallery: generateGallery(3),
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/rissss21",
    dad: "300",
  },
  
  // ==========================================================
  // --- PROYEK 4 (CAMPURAN GAMBAR & VIDEO MP4) ---
  // ==========================================================
  {
    id: 4,
    image: Proyek4Img, // Cover luarnya pakai PNG
    title: "ARU BRAWA",
    subtitle: "ARU BRAWA is a contemporary tropical villa concept located in...",
    fullDescription: "ARU BRAWA is a contemporary tropical villa concept located in the Canggu-Brawa area, designed to harmonize with the lush natural surroundings while expressing a refined architectural identity. The design combines solid stone textures, vertical wooden screens, and clean geometric forms to create a strong yet elegant façade presence. Natural materials are integrated to enhance durability and climate responsiveness, while the strategic use of shading elements and layered volumes ensures privacy, ventilation, and visual comfort. ARU BRAWA reflects a balance between modern tropical architecture and the tranquil, nature-driven lifestyle of Bali’s coastal environment.",
    // ARRAY MANUAL: 1 PNG di depan, 3 MP4 di belakangnya
    gallery: [Proyek4Img, Proyek4Vid1, Proyek4Vid2, Proyek4Vid3], 
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
    dad: "400",
  },

  // ==========================================================
  // --- PROYEK 5 (SUDAH DIUPDATE KE p5a.png & GALERI OTOMATIS) ---
  // ==========================================================
  {
    id: 5,
    image: Proyek5, // <--- SUDAH MENGGUNAKAN GAMBAR PROYEK 5
    title: "Magnitude Bali", // Tinggal ganti nama proyeknya nanti
    subtitle: "Magnitude Bali embodies a modern tropical architectural vision...",
    fullDescription: "Magnitude Bali embodies a modern tropical architectural vision that seamlessly blurs the boundary between indoor and outdoor living, creating a serene and welcoming atmosphere through the interplay of natural light, earthy textured materials, and fluid connections between interior spaces, landscape, and water elements as a reflection of balance, tranquility, and understated luxury.",
    gallery: generateGallery(5), // <--- SUDAH PAKAI GENERATE GALLERY KARENA FOTO P5 LENGKAP
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "#",
    dad: "500",
  },

  // ==========================================================
  // --- PROYEK 6 sampai 9 (PLACEHOLDER MENGGUNAKAN PROYEK 1) ---
  // ==========================================================
  {
    id: 6,
    image: Proyek1, 
    title: "Project 6 (Coming Soon)",
    subtitle: "Waiting for client content...",
    fullDescription: "Detailed description for project 6 will be updated soon once the client provides the content.",
    gallery: generateGallery(1),
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
    dad: "600",
  },
  {
    id: 7,
    image: Proyek1, 
    title: "Project 7 (Coming Soon)",
    subtitle: "Waiting for client content...",
    fullDescription: "Detailed description for project 7 will be updated soon once the client provides the content.",
    gallery: generateGallery(1),
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "#",
    dad: "300",
  },
  {
    id: 8,
    image: Proyek1, 
    title: "Project 8 (Coming Soon)",
    subtitle: "Waiting for client content...",
    fullDescription: "Detailed description for project 8 will be updated soon once the client provides the content.",
    gallery: generateGallery(1),
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
    dad: "400",
  },
  {
    id: 9,
    image: Proyek1, 
    title: "Project 9 (Coming Soon)",
    subtitle: "Waiting for client content...",
    fullDescription: "Detailed description for project 9 will be updated soon once the client provides the content.",
    gallery: generateGallery(1),
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "#",
    dad: "500",
  },

  // ==========================================================
  // --- PROYEK 10 (SUDAH FIX) ---
  // ==========================================================
  {
    id: 10,
    image: Proyek10,
    title: "MR.YD HOUSE",
    subtitle: "MR.YD HOUSE is a modern luxury residence that combines elegant architecture...",
    fullDescription: "MR.YD HOUSE is a modern luxury residence that combines elegant architecture, refined materials, and warm contemporary interiors to create a harmonious living space filled with sophistication, comfort, and timeless beauty.",
    gallery: generateGallery(10), 
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/rissss21",
    dad: "600",
  },
];