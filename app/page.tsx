"use client";
import React, { useState, useEffect } from "react";
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
import {
  CheckCircle2,
  Star,
  Users,
  Award,
  Clock,
  Droplets,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ChevronRight
} from "lucide-react";

const carLogos = [
  { node: <SiBmw className="text-gray-400/80 hover:text-white transition-colors duration-300" />, title: "BMW" },
  { node: <SiMercedes className="text-gray-400/80 hover:text-white transition-colors duration-300" />, title: "Mercedes" },
  { node: <SiAudi className="text-gray-400/80 hover:text-white transition-colors duration-300" />, title: "Audi" },
  { node: <SiToyota className="text-gray-400/80 hover:text-white transition-colors duration-300" />, title: "Toyota" },
  { node: <SiHonda className="text-gray-400/80 hover:text-white transition-colors duration-300" />, title: "Honda" },
  { node: <SiTesla className="text-gray-400/80 hover:text-white transition-colors duration-300" />, title: "Tesla" },
  { node: <SiFord className="text-gray-400/80 hover:text-white transition-colors duration-300" />, title: "Ford" },
  { node: <SiVolkswagen className="text-gray-400/80 hover:text-white transition-colors duration-300" />, title: "Volkswagen" },
  { node: <SiHyundai className="text-gray-400/80 hover:text-white transition-colors duration-300" />, title: "Hyundai" },
  { node: <SiNissan className="text-gray-400/80 hover:text-white transition-colors duration-300" />, title: "Nissan" },
];

const bgImages = [
  "/bg1.jpg",
  "/bg2.jpg",
  "/bg3.jpg",
  "/hero-bg.png"
];

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-space selection:bg-primary selection:text-white scroll-smooth">
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
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#why-us" className="hover:text-primary transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <button className="bg-black text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-primary transition-all shadow-md active:scale-95">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="home" className="relative min-h-[calc(100vh-120px)] flex flex-col justify-center px-8 lg:px-24 pt-24 md:pt-0 overflow-hidden">
        {/* Background Images Loop */}
        <div className="absolute inset-0 z-0 bg-black">
          {bgImages.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 bg-cover bg-[50%_center] max-md:bg-[60%_center] max-md:scale-110 transition-opacity duration-1000 ${index === currentBg ? "opacity-100" : "opacity-0"
                }`}
              style={{
                backgroundImage: `url('${img}')`,
              }}
            />
          ))}
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-linear-to-r from-black/100 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-5 md:mb-1 text-white">
            <span className="font-dm-serif">CAR STYLE</span> <br />
            <span className="font-dm-serif-100 text-blue-400 text-5xl md:text-6xl ">Premium Detailing Studio</span>
          </h1>

          <p className="text-lg md:text-2sm text-gray-300 mb-10 leading-relaxed max-w-xl">
            Your Car Deserves The Best Care !
            Professional car care that keeps your vehicle looking pristine.
          </p>

          <div className="flex flex-wrap gap-4 mb-18 md:mb-5">
            <button className="bg-primary hover:bg-blue-600 text-white px-10 py-4 rounded font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/30">
              Book Your Wash
            </button>
            <button className="border border-black/10 hover:border-black/30 text-black px-10 py-4 rounded font-bold transition-all bg-white/50 backdrop-blur-sm">
              View Services
            </button>
          </div>


        </div>

        {/* Brand Logos Integrated into Hero Background */}
        <div className="relative z-10 mt-1 md:mt-5 -mx-8 lg:-mx-24 border-t border-white/10 pt-8">
          <LogoLoop
            logos={carLogos}
            speed={40}
            gap={80}
            logoHeight={50}
            direction="left"
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
          />
        </div>

      </main>

      {/* Standard Car Wash Section */}
      <section id="about" className="py-8 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12">
            <div className="lg:w-1/2">
              <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-2">Essential Care</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Standard Car Wash</h2>

              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Expert care for your everyday drive. A thorough cleaning of your vehicle's exterior and interior.
              </p>

              {/* Compact Pricing Grid */}
              <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5">
                {[
                  { size: "Small Cars", price: "450" },
                  { size: "Medium Cars", price: "550" },
                  { size: "Large Cars", price: "650" }
                ].map((tier, i) => (
                  <div key={i} className="bg-gray-50 p-2 md:p-3 rounded-lg border border-black/5 text-center group hover:bg-primary transition-all duration-300">
                    <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-wider mb-0.5 text-gray-400 group-hover:text-white/70">{tier.size}</div>
                    <div className="text-sm md:text-base font-bold text-gray-900 group-hover:text-white">Rs.{tier.price}</div>
                  </div>
                ))}
              </div>

              {/* Compressed 2-Column Service List for Mobile */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
                {[
                  "Interior Vacuum Seats",
                  "Exterior Wax Foam",
                  "Wheelhouse Cleaning",
                  "Alloy & Tyre Detail",
                  "Interior Wipe Down",
                  "Door Edge Wipe",
                  "Body Drying",
                  "Tyre Polish",
                  "Windows Cleaning",
                  "Dashboard Polish"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 group border-b border-black/5 pb-0.5">
                    <CheckCircle2 className="text-primary w-3.5 h-3.5 shrink-0" />
                    <span className="text-[11px] md:text-[13px] font-semibold text-gray-700 truncate">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-primary hover:bg-blue-600 text-white px-8 py-2.5 rounded-lg font-bold transition-all inline-flex items-center gap-2 group shadow-lg shadow-primary/20 text-xs md:text-sm">
                Book This Wash
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-black/5">
                <Image
                  src="/car-washing-img1.jpg"
                  alt="Standard Car Wash Service"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover max-h-[300px] md:max-h-[400px]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Grid */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Professional Detailing</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Services</h2>
            <p className="text-gray-600 text-lg">
              Tailored solutions for every vehicle. From daily drivers to luxury vehicles, we offer best-in-class care that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Express Wash",
                description: "A quick yet thorough exterior cleaning and drying process for when you're short on time but still want your car to look its best.",
                image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2062&auto=format&fit=crop",
                tag: "Bestseller",
                features: ["High-Pressure Pre-wash", "Eco-friendly Soap", "Wheel Cleaning"]
              },
              {
                title: "Interior Detail",
                description: "Deep steam cleaning, vacuuming, and sanitization that leave the inside of your car looking and smelling like new.",
                image: "https://images.unsplash.com/photo-1599256621730-535171e28e50?q=80&w=2071&auto=format&fit=crop",
                tag: "Popular",
                features: ["Leather Conditioning", "Odor Elimination", "Stain Removal"]
              },
              {
                title: "Ceramic Coating",
                description: "Long-lasting paint protection and extreme hydrophobicity that keeps your car cleaner for longer with a mirror-like finish.",
                image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=2071&auto=format&fit=crop",
                tag: "Premium",
                features: ["9H Hardness", "UV Protection", "Gloss Enhancement"]
              }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-black/5 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {service.tag}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8 border-t border-black/5 pt-6">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full border border-black/10 py-3 rounded-lg font-bold hover:bg-black hover:text-white transition-all text-sm uppercase tracking-widest leading-none flex items-center justify-center gap-2">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">The Difference</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Why Car Owners Trust Us</h2>

            <div className="space-y-10">
              {[
                {
                  title: "Eco-Friendly Products",
                  desc: "We use biodegradable soaps and water-saving techniques to protect the environment while protecting your car.",
                  icon: Droplets
                },
                {
                  title: "Expert Detailers",
                  desc: "Our team consists of certified detailing professionals who understand the science of car care.",
                  icon: ShieldCheck
                },
                {
                  title: "Quick Turnaround",
                  desc: "We respect your time. Our efficient processes ensure high-quality results in record time.",
                  icon: Clock
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="bg-primary/5 p-4 rounded-xl shrink-0 h-fit">
                    <item.icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative px-8 py-8">
            <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
                alt="Detailed Car Close-up"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0b0b0b] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/logo1.PNG"
                alt="CAR STYLE Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              CAR STYLE is your premier car wash and detailing destination. Providing high-end care for vehicles since 2012. We bring the shine back to your drive.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-colors hover:scale-110"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-colors hover:scale-110"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary transition-colors hover:scale-110"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Operating Hours</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Mon-Sat:</span>
                <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-white font-medium">9:00 AM - 5:00 PM</span>
              </li>
              <li className="mt-8">
                <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest text-center">Open Today</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex gap-4">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span>123 Clean Street, <br />City, State 12345</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <span>+91 987 654 3210 <br />+91 123 456 7890</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <span>info@carstyle.in<br />booking@carstyle.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 pt-12 border-t border-white/5 text-center text-gray-500 text-xs">
          <p>© 2026 CAR STYLE Detailer Studio. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
