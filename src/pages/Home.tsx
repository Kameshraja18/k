'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, MessageCircle, Mail, ArrowRight, FileDown, User, Check, Copy } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { aboutData } from '@/data/portfolio';

const Home = () => {
    const [copied, setCopied] = useState(false);
    const email = 'k.s.kameshraja@gmail.com';
    const whatsappNumber = '+919585459935';
    const displayRepos = "10+";

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleEmailClick = (e: React.MouseEvent) => {
        if (window.innerWidth <= 640) {
            window.location.href = `mailto:${email}`;
            e.preventDefault();
        } else {
            copyToClipboard();
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Column: Text & Actions */}
                <motion.div
                    className="flex flex-col space-y-10 text-left z-10"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Hero Text */}
                    <div className="space-y-6">
                        <motion.h2
                            className="text-2xl font-medium text-gray-400 tracking-wide"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            Hello, I'm
                        </motion.h2>
                        <motion.h1
                            className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {aboutData.name}
                        </motion.h1>
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            {aboutData.title}
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed pt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Software Developer specializing in Full Stack Development with expertise in Next.js, Node.js, and modern Web Technologies.
                        </motion.p>
                    </div>

                    {/* Buttons */}
                    <motion.div
                        className="flex flex-wrap gap-6 pt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a
                            href={aboutData.cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-lg shadow-white/10 text-lg"
                        >
                            <FileDown className="w-6 h-6" />
                            Download CV
                        </a>
                        <Link
                            href="/about"
                            className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-3 text-lg"
                        >
                            <User className="w-6 h-6" />
                            About Me
                        </Link>
                    </motion.div>

                    {/* Social/Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        {/* GitHub */}
                        <a
                            href={aboutData.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-start gap-2 group cursor-pointer"
                        >
                            <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                            <div>
                                <span className="block text-xl font-bold text-white">{displayRepos}</span>
                                <span className="text-sm text-gray-500 group-hover:text-gray-400">Projects</span>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href={aboutData.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-start gap-2 group cursor-pointer"
                        >
                            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                            <div>
                                <span className="block text-xl font-bold text-white">Connect</span>
                                <span className="text-sm text-gray-500 group-hover:text-gray-400">LinkedIn</span>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-start gap-2 group cursor-pointer"
                        >
                            <MessageCircle className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                            <div>
                                <span className="block text-xl font-bold text-white">24/7</span>
                                <span className="text-sm text-gray-500 group-hover:text-gray-400">WhatsApp</span>
                            </div>
                        </a>

                        {/* Email */}
                        <button
                            onClick={handleEmailClick}
                            className="flex flex-col items-start gap-2 group cursor-pointer text-left"
                        >
                            <div className="flex items-center gap-2">
                                <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                                {copied && <Check className="w-4 h-4 text-white" />}
                            </div>
                            <div>
                                <span className="block text-xl font-bold text-white">Email</span>
                                <span className="text-sm text-gray-500 group-hover:text-gray-400">Get in touch</span>
                            </div>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Column: Visual */}
                <motion.div
                    className="relative hidden md:flex justify-center items-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="relative w-full max-w-md aspect-[4/5] perspective-1000"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Futuristic Frame Container */}
                        <div className="relative w-full h-full bg-black border border-gray-800 p-2 overflow-hidden group">

                            {/* Scanning Line & Grid Overlay (Tech Effects) */}
                            <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
                                <div className="absolute top-0 left-0 right-0 h-1 bg-white/50 shadow-[0_0_20px_rgba(255,255,255,0.5)] animate-scan" />
                            </div>

                            {/* Corner Brackets */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-white z-30 transition-all duration-300 group-hover:w-16 group-hover:h-16" />
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-white z-30 transition-all duration-300 group-hover:w-16 group-hover:h-16" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-white z-30 transition-all duration-300 group-hover:w-16 group-hover:h-16" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white z-30 transition-all duration-300 group-hover:w-16 group-hover:h-16" />

                            {/* Main Image */}
                            <div className="relative w-full h-full bg-gray-900 border border-gray-800">
                                <img
                                    src={aboutData.profileImage}
                                    alt={aboutData.name}
                                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                                {/* Tech Stack / Data Display */}
                                <div className="absolute bottom-0 left-0 right-0 m-6 z-20 font-mono">
                                    <div className="flex items-center gap-2 text-xs text-white/60 mb-3 tracking-widest uppercase">
                                        <span className="w-2 h-2 bg-white animate-pulse shadow-[0_0_10px_white]" />
                                        System Status: Online
                                    </div>
                                    <div className="space-y-2 border-l-2 border-white/20 pl-4 backdrop-blur-sm bg-black/20 py-2">
                                        <p className="text-white font-bold text-lg tracking-wider">TECH_STACK</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['REACT', 'NEXT.JS', 'NODE', 'TYPESCRIPT'].map((tech) => (
                                                <span key={tech} className="text-[10px] font-bold text-black bg-white px-2 py-0.5 tracking-wider">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back-plate Decoration */}
                        <div className="absolute -z-10 top-4 -right-4 w-full h-full border border-gray-800 bg-gray-900/50" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
