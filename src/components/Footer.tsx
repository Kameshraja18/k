'use client';


import Link from 'next/link';
import { Code2, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { aboutData } from '@/data/portfolio';

import { navLinks } from '@/data/navigation';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	// Split links into columns of 3
	const column1 = navLinks.slice(0, 3);
	const column2 = navLinks.slice(3, 6);
	const column3 = navLinks.slice(6, 9);

	return (
		<footer className="relative mt-24">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
					{/* Column 1: Branding & About */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center gap-3">
							<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10">
								<span className="text-base font-bold text-white">KR</span>
							</div>
							<span className="text-xl font-bold text-white tracking-tight">Kameshraja</span>
						</Link>
						<p className="text-sm text-gray-400 max-w-xs leading-relaxed">
							Software Developer based in Villupuram, India. Specialized in building modern, scalable web applications.
						</p>
					</div>

					{/* Column 2: Quick Links */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h3>
						<div className="grid grid-cols-2 gap-x-4 gap-y-2">
							{navLinks.map(link => (
								<Link
									key={link.path}
									href={link.path}
									className="text-sm text-gray-400 hover:text-white transition-colors hover:translate-x-1 duration-200 inline-block"
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>

					{/* Column 3: Social & Contact */}
					<div className="space-y-6">
						<div className="space-y-4">
							<h3 className="text-sm font-semibold text-white tracking-wider uppercase">Social</h3>
							<div className="flex gap-3">
								<a
									href={aboutData.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/10"
									aria-label="GitHub"
								>
									<Github className="w-5 h-5" />
								</a>
								<a
									href={aboutData.linkedinUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-white/10 transition-all border border-white/5 hover:border-white/10"
									aria-label="LinkedIn"
								>
									<Linkedin className="w-5 h-5" />
								</a>
								<a
									href="mailto:k.s.kameshraja@gmail.com"
									className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-red-400 hover:bg-white/10 transition-all border border-white/5 hover:border-white/10"
									aria-label="Email"
								>
									<Mail className="w-5 h-5" />
								</a>
							</div>
						</div>

						<div className="space-y-2">
							<a href="mailto:k.s.kameshraja@gmail.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
								<Mail className="w-4 h-4" />
								k.s.kameshraja@gmail.com
							</a>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-white/10 py-8 mt-12">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-sm text-gray-500" suppressHydrationWarning>
							© {currentYear} Kameshraja K. All rights reserved.
						</p>
						<p className="text-sm text-gray-500">
							Designed & Built with Next.js
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;