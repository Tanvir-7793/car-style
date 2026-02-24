"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Plus } from "lucide-react";
import BlurText from "./BlurText";
import ScrollFloat from "./ScrollFloat";

const premiumServices = [
    {
        title: "Premium Polish",
        description: "A comprehensive detailing package including deep interior cleaning and exterior protection for a showroom finish.",
        image: "/premium-services-img01.jpg",
        tag: "Bestseller",
        features: [
            "Interior Steam Wash",
            "Full Interior Deep cleaning",
            "All vacuum",
            "Seat/ Door / Roof / cleaning",
            "Dash Board polish",
            "Exterior plastic cleaning",
            "Engine cleaning",
            "Tyres cleaning & polish",
            "Hybrid Ceramic coat",
            "Car Polish"
        ]
    },
    {
        title: "Interior Detailing",
        description: "A deep sanitization and restoration process for your car's cabin, ensuring every corner is spotless and fresh.",
        image: "/premium-services-img2.jpg",
        tag: "Popular",
        features: [
            "Deep cleaning",
            "Foam Wash",
            "Floor Vacuum",
            "Dicky Vacuum",
            "Dash Board polish",
            "Door Polish",
            "Engine cleaning",
            "Exterior Plastic Polish",
            "Tyres Polish"
        ]
    },
    {
        title: "Paint Protection Film (PPF)",
        description: "A clear, durable polyurethane film applied to protect your car's exterior from damage like scratches, chips, and stains. Features self-healing properties and long-term warranties.",
        image: "/premium-services-img3.jpg",
        tag: "Latest",
        features: ["Self-healing Properties", "Stone Chip Protection", "Long-term Warranties"]
    },
    {
        title: "Ceramic Coating",
        description: "A liquid polymer that chemically bonds with the factory paint to create a durable, protective, and hydrophobic layer. Provides long-lasting protection against UV rays, dirt, and grime.",
        image: "/premium-services-img4.jpg",
        tag: "Premium",
        features: ["Chemical Bonding", "UV & Grime Protection", "Hydrophobic Finish"]
    },
    {
        title: "Glass Cleaning",
        description: "Professional glass detailing removing debris and applying specialized cleaners for a crystal-clear, streak-free finish. Includes water spot and minor scratch removal.",
        image: "/premium-services-img5.jpg",
        tag: "Essential",
        features: ["Streak-free Finish", "Water Spot Removal", "Scratch Removal"]
    },
    {
        title: "Glass Coating",
        description: "A ceramic-based protective layer that makes glass durable and hydrophobic. Resistant to acid rain and scratches, it enhances visibility and simplifies cleaning.",
        image: "/premium-services-img6.jpg",
        tag: "Premium",
        features: ["Hydrophobic Protection", "Acid Rain Resistance", "Enhanced Visibility"]
    },
    {
        title: "Graphene Coating",
        description: "An advanced paint protection service providing a durable, glossy shield. Offers superior resistance to UV rays, chemicals, and heat, surpassing traditional coatings in durability.",
        image: "/premium-services-img7.jpg",
        tag: "Advanced",
        features: ["Superior Heat Resistance", "UV & Scratch Shield", "Ultimate Durability"]
    },
    {
        title: "Teflon Coating",
        description: "A multi-step PTFE-based sealant application that provides a protective barrier against UV rays, dirt, and environmental damage. Buffed to a high gloss for a flawless finish.",
        image: "/premium-services-img8.jpg",
        tag: "Classic Protection",
        features: ["PTFE-based Sealant", "UV & Dirt Barrier", "High Gloss Finish"]
    },
    {
        title: "Headlight Cleaning",
        description: "A multi-step restoration process that removes oxidation and scratches to restore clarity. Includes sanding, polishing, and a UV protective coating for enhanced safety and shine.",
        image: "/premium-services-img9.jpg",
        tag: "Restoration",
        features: ["Oxidation Removal", "UV Protective Coating", "Clarity Enhancement"]
    },
    {
        title: "Headlight Restoration",
        description: "A professional process that removes oxidation and scratches from cloudy headlights via wet sanding and polishing. A cost-effective alternative to replacement that restores safety and visibility.",
        image: "/premium-services-img10.jpg",
        tag: "Safety",
        features: ["Wet Sanding", "Polishing & Buffing", "UV-Resistant Coating"]
    }
];

const PremiumServices = ({ view = "home" }: { view?: "home" | "full" }) => {
    const isFull = view === "full";
    const displayedServices = isFull ? premiumServices : premiumServices.slice(0, 2);

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <section id="services" className={`py-24 ${isFull ? 'bg-transparent' : 'bg-blue-50'}`}>
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
                    <ScrollFloat
                        animationDuration={0.1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=50%'
                        stagger={0.03}
                    >
                        <span className="text-primary font-bold uppercase tracking-widest text-sm block mb-4">Professional Detailing</span>
                        <BlurText
                            text="Our Premium Services"
                            delay={100}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-4xl md:text-5xl font-bold mb-6 justify-center"
                        />
                        <BlurText
                            text="Tailored solutions for every vehicle. From daily drivers to luxury vehicles, we offer best-in-class care that fits your needs."
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-gray-600 text-lg justify-center max-w-2xl"
                        />
                    </ScrollFloat>
                </div>

                <div className={`grid grid-cols-1 ${isFull ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8 transition-all duration-500`}>
                    {displayedServices.map((service, i) => (
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
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-5 border-t border-black/5 pt-3">
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

                {!isFull && (
                    <div className="mt-16 text-center">
                        <Link
                            href="/services"
                            className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-2 group shadow-lg shadow-primary/5"
                        >
                            See More Services
                            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PremiumServices;
