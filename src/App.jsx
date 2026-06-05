import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from 'aos';
import OverflowText from "./components/OverflowText";
import ChatRoom from "./components/ChatRoom";
import 'aos/dist/aos.css';

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
              <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit py-0 px-3 rounded-2xl">
                <img src="/assets/jasom3.png" className="w-8 scale-120 rounded-md " alt="Icon" />
                <q className="text-xs font-small">Never Give Up to Grow</q>
              </div>
              <h1 className="text-3xl font-bold mb-6">
                <ShinyText text="Hi I'm Muhammad Jasoma" disabled={false} speed={3} className='custom-class' />
              </h1>
              <BlurText
                text="I am an architectural designer specializing in creative concept development. I am highly motivated, detail-oriented, and capable of working both independently and collaboratively. With strong expertise in architectural design, I am proficient in multiple design software tools to deliver high-quality 2D, 3D, and animation-based projects."
                delay={150}
                animateBy="words"
                direction="top"
                className=" mb-6"
              />
              <div className="flex items-center sm:gap-4 gap-2">
                <a 
                  href="/assets/CV.pdf" 
                  download="Muhammad_Jasoma_CV.pdf" 
                  className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
                >
                  <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
                </a>

                <a href="#project" className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors">
                  <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
                </a>
              </div>

            </div>
            <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
              <ProfileCard
                name="Jasoma"
                title="Architecture"
                handle="muhammad_jesen14"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/assets/jasom1.jpeg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>
          </div>
          
          <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6" id="about">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
                <div className="flex-1 text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                    About Me
                  </h2>

                  <BlurText
                    text="I’m Muhammad Jasoma, an Architectural Planner passionate about designing functional and sustainable spaces. I specialize in developing creative architectural concepts, combining aesthetics, technical precision, and spatial planning to deliver impactful designs. With experience in residential and public facility projects, I focus on producing high-quality 2D, 3D, and visualization-based architectural works."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="text-base md:text-lg leading-relaxed mb-4 text-gray-300"
                  />

                  {/* ============================================================== */}
                  {/* BENTO BOX STATS DIMULAI DARI SINI */}
                  {/* ============================================================== */}
                  <div className="grid grid-cols-2 gap-3 md:gap-4 w-full my-8">
                    
                    {/* Box 1: Projects */}
                    <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5 flex flex-col items-center justify-center text-center backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-black/20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                        15<span className="text-violet-500">+</span>
                      </h3>
                      <p className="text-[11px] md:text-sm text-zinc-400 font-medium uppercase tracking-wider">
                        Project Finished
                      </p>
                    </div>

                    {/* Box 2: Experience */}
                    <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5 flex flex-col items-center justify-center text-center backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-black/20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                        4<span className="text-violet-500">+</span>
                      </h3>
                      <p className="text-[11px] md:text-sm text-zinc-400 font-medium uppercase tracking-wider">
                        Years Experience
                      </p>
                    </div>

                    {/* Box 3: GPA & Quote (Full Width) */}
                    <div className="col-span-2 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 shadow-lg shadow-black/20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                      
                      {/* Angka GPA */}
                      <div className="text-center sm:text-left flex-shrink-0">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-1 flex items-baseline justify-center sm:justify-start">
                          3.55<span className="text-violet-500 text-xl md:text-2xl ml-1">/4.00</span>
                        </h3>
                        <p className="text-[11px] md:text-sm text-zinc-400 font-medium uppercase tracking-wider">
                          GPA
                        </p>
                      </div>
                      
                      {/* Garis pemisah buat di HP */}
                      <div className="w-16 h-[1px] bg-zinc-700/50 sm:hidden my-1"></div>
                      
                      {/* Quote */}
                      <div className="text-center sm:text-right">
                        <ShinyText
                          text="Working with heart, creating with mind."
                          disabled={false}
                          speed={3}
                          className="text-sm md:text-base text-violet-400 italic font-light"
                        />
                      </div>

                    </div>
                  </div>
                  {/* ============================================================== */}
                  {/* BENTO BOX STATS SELESAI */}
                  {/* ============================================================== */}

                </div>
              </div>

              <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center ">
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
              </div>
            </div>

          </div>
          <div className="tools mt-32">
            <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" >Tools & Technologies</h1>
            {/* PERBAIKAN: w-2/5 menjadi w-full sm:w-2/5 agar teks tidak terpotong di HP */}
            <p className="w-full sm:w-2/5 text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">My Profesional Skills</p>
            
            {/* PERBAIKAN: grid-cols-1 diubah menjadi grid-cols-2, dan gap-nya disesuaikan */}
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 sm:gap-4">

              {listTools.map((tool) => (
                <div
                  key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true"
                  // PERBAIKAN: p-4 menjadi p-3 sm:p-4 untuk menyesuaikan ruang di HP
                  className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 border border-zinc-700 rounded-xl overflow-hidden"
                >
                  <img
                    src={tool.gambar}
                    alt="Tools Image"
                    // PERBAIKAN: w-16 menjadi dinamis w-10 sm:w-16, dan flex-shrink-0 agar logo tidak gepeng
                    className="w-10 h-10 sm:w-16 sm:h-16 flex-shrink-0 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                  />
                  <div className="flex flex-col min-w-0">
                    <div className="truncate">
                      <ShinyText
                        text={tool.nama}
                        disabled={false}
                        speed={1}
                        // PERBAIKAN: text-lg menjadi dinamis text-sm sm:text-lg
                        className="text-sm sm:text-lg font-semibold block"
                      />
                    </div>
                      <OverflowText text={tool.ket} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BAGIAN PROYEK (MASONRY GRID STYLE) */}
        {/* ============================================================== */}
        <section id="project" className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6">

            <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              Project
            </h1>

            <p className="text-base/loose text-center opacity-50 mb-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
              Showcasing a selection of projects that reflect my skills, creativity, and passion for building meaningful digital experiences.
            </p>

            <div className="mt-1 flex justify-center">
              <div className="w-full max-w-[1400px] bg-[#0b0b0b] rounded-3xl p-6 sm:p-10 md:px-14 md:py-12">
                
                {/* 1 ChromaGrid untuk menampung seluruh 10 data. 
                    Masonry CSS akan otomatis menyusun jatuhnya gambar dengan estetik! */}
                <ChromaGrid
                  items={listProyek.slice(0, 10)}
                  onItemClick={handleProjectClick}
                  radius={500}
                  damping={0.45}
                  fadeOut={0.6}
                  ease="power3.out"
                />

              </div>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* BAGIAN KONTAK */}
        {/* ============================================================== */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-1 bg-zinc-800 p-6 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
             <ChatRoom />
            </div>

            <div className="flex-1">
              <form
                action="https://formsubmit.co/Muhammadjasoma14@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  )
}

export default App