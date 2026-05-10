import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [isClosing, setIsClosing] = useState(false);

  // Fungsi untuk menangani penutupan dengan animasi
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  // Mencegah scroll di background saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-md flex justify-center items-center z-[999] p-4 transition-opacity duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        /* DITAMBAHKAN: overflow-x-hidden agar tidak bisa geser kanan-kiri */
        className={`bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[95vh] overflow-y-auto overflow-x-hidden no-scrollbar transform transition-transform duration-300 ${
          isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        {/* HEADER & CLOSE BUTTON */}
        <div className="sticky top-0 bg-zinc-900/80 backdrop-blur-md p-6 flex justify-between items-center z-10 border-b border-zinc-800">
          <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
            {project.title}
          </h2>
          <button
            onClick={handleClose}
            className="text-zinc-400 hover:text-white transition-colors p-2 rounded-full hover:bg-zinc-800"
          >
            <FiX size={30} />
          </button>
        </div>

        <div className="p-6 md:p-10">
          {/* --- GALLERY GRID (5 FOTO) --- */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 mb-10">
            {/* Foto 1 - Utama (Besar) */}
            <div className="md:col-span-4 md:row-span-2 overflow-hidden rounded-2xl h-[300px] md:h-[500px] bg-zinc-800">
              <img
                src={project.gallery?.[0] || project.image}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Main view"
              />
            </div>

            {/* Foto 2 & 3 - Samping Utama */}
            <div className="md:col-span-2 overflow-hidden rounded-2xl h-[145px] md:h-[245px] bg-zinc-800">
              <img
                src={project.gallery?.[1] || project.image}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                alt="Detail 1"
              />
            </div>
            <div className="md:col-span-2 overflow-hidden rounded-2xl h-[145px] md:h-[245px] bg-zinc-800">
              <img
                src={project.gallery?.[2] || project.image}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                alt="Detail 2"
              />
            </div>

            {/* Foto 4 & 5 - Baris Bawah */}
            <div className="md:col-span-3 overflow-hidden rounded-2xl h-[150px] md:h-[250px] bg-zinc-800">
              <img
                src={project.gallery?.[3] || project.image}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                alt="Detail 3"
              />
            </div>
            <div className="md:col-span-3 overflow-hidden rounded-2xl h-[150px] md:h-[250px] bg-zinc-800">
              <img
                src={project.gallery?.[4] || project.image}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                alt="Detail 4"
              />
            </div>
          </div>

          {/* --- DESKRIPSI SINGKAT --- */}
          <div className="space-y-4 max-w-3xl mx-auto text-center border-t border-zinc-800 pt-8 pb-4">
            <h3 className="text-zinc-500 text-sm font-semibold uppercase tracking-[0.3em]">
              Overview
            </h3>
            <p className="text-zinc-200 text-lg leading-relaxed italic font-light">
              "{project.fullDescription}"
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* Menyembunyikan scrollbar untuk Chrome, Safari dan Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Menyembunyikan scrollbar untuk IE, Edge dan Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
          overflow-x: hidden; /* DITAMBAHKAN: Kunci agar konten tidak bisa geser horizontal */
        }

        @keyframes scaleIn { 
          from { transform: scale(0.95); opacity: 0; } 
          to { transform: scale(1); opacity: 1; } 
        }
        .animate-in { 
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }

        @keyframes scaleOut { 
          from { transform: scale(1); opacity: 1; } 
          to { transform: scale(0.95); opacity: 0; } 
        }
        .animate-out { 
          animation: scaleOut 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;