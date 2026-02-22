"use client";
import Image from "next/image";

import LogoLoop from "@/components/LogoLoop";
import {
  SiBmw,
  SiMercedes,
  SiAudi,
  SiToyota,
  SiHonda,
  SiTesla,
  SiFord,
  SiVolkswagen,
  SiHyundai,
  SiNissan
} from "react-icons/si";

const carLogos = [
  { node: <SiBmw className="text-gray-600 hover:text-primary transition-colors duration-300" />, title: "BMW" },
  { node: <SiMercedes className="text-gray-600 hover:text-primary transition-colors duration-300" />, title: "Mercedes" },
  { node: <SiAudi className="text-gray-600 hover:text-primary transition-colors duration-300" />, title: "Audi" },
  { node: <SiToyota className="text-gray-600 hover:text-primary transition-colors duration-300" />, title: "Toyota" },
  { node: <SiHonda className="text-gray-600 hover:text-primary transition-colors duration-300" />, title: "Honda" },
  { node: <SiTesla className="text-gray-600 hover:text-primary transition-colors duration-300" />, title: "Tesla" },
  { node: <SiFord className="text-gray-600 hover:text-primary transition-colors duration-300" />, title: "Ford" },
  { node: <SiVolkswagen className="text-gray-600 hover:text-primary transition-colors duration-300" />, title: "Volkswagen" },
  { node: <SiHyundai className="text-gray-600 hover:text-primary transition-colors duration-300" />, title: "Hyundai" },
  { node: <SiNissan className="text-gray-600 hover:text-primary transition-colors duration-300" />, title: "Nissan" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-space selection:bg-primary selection:text-white">
      {/* Top Info Bar */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2 text-xs text-gray-500 border-b border-black/5 bg-gray-50">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">📞</span> (555) 123-WASH
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">📍</span> 123 Clean Street, City, State 12345
          </div>
        </div>
        <div className="flex gap-4">
          Mon-Sat: 8AM-8PM | Sun: 9AM-5PM
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-morphism border-b border-black/5 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3 w-full">
          <div className="flex items-center gap-3">
            <Image
              src="/logo1.PNG"
              alt="CAR STYLE Logo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="text-[10px] text-gray-400 uppercase tracking-widest ml-1 hidden sm:inline border-l border-black/10 pl-3">Premium Detailing</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#" className="hover:text-primary transition-colors">Services</a>
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <button className="bg-black text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-primary transition-all shadow-md active:scale-95">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative min-h-[calc(100vh-120px)] flex flex-col justify-center px-8 lg:px-24 pt-24 md:pt-0 overflow-hidden">
        {/* Background Image with Light Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundPosition: '60% center'
          }}
        >
          {/* Lighter gradient for light mode */}
          <div className="absolute inset-0 bg-gradient-to-r  to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 text-white">
            Premium Car <br />
            <span className="text-primary">Washing Services</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            Professional car care that keeps your vehicle looking pristine.
            We use eco-friendly products and advanced techniques for the best results.
          </p>

          <div className="flex flex-wrap gap-4 mb-20">
            <button className="bg-primary hover:bg-blue-600 text-white px-10 py-4 rounded font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/30">
              Book Your Wash
            </button>
            <button className="border border-black/10 hover:border-black/30 text-black px-10 py-4 rounded font-bold transition-all bg-white/50 backdrop-blur-sm">
              View Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-black/10">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-yellow-600 font-bold text-2xl">
                <span>⭐</span> 4.9
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Average Rating</p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-black font-bold text-2xl text-white">
                <span className="text-primary font-bold">👤</span> 5000+
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold text-gray-300">Happy Customers</p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-black font-bold text-2xl text-white">
                <span className="text-primary font-bold">🏅</span> 10+
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Bottom Right PDF indicator (as seen in screenshot) */}
        <div className="absolute bottom-8 right-8 hidden lg:block opacity-70 hover:opacity-100 transition-opacity">
          <div className="bg-red-600 p-3 rounded shadow-xl">
            <span className="text-xl font-bold text-white">A</span>
          </div>
        </div>
      </main>

      {/* Brand Logos Subsection */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <LogoLoop
            logos={carLogos}
            speed={40}
            gap={80}
            logoHeight={48}
            direction="left"
            scaleOnHover
            fadeOut
            fadeOutColor="#f9fafb"
          />
        </div>
      </section>
    </div>
  );
}

