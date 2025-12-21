'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const certificates = [
	{
		title: "Intel Unnati Industrial Program",
		issuer: "Intel",
		date: "May-July 2024",
		link: "/certificates/intel_unnati.png",
		description: "Covers TypeScript fundamentals, including syntax, types. Includes practical examples and real-world applications.",
		skills: ["TypeScript", "JavaScript", "Frontend Development", "Backend Development"]
	},
	{
		title: "Web Development Intern",
		issuer: "OneYes InfoTech Solution",
		date: "April 2025",
		link: "/experience/oneyes Infotech solution.pdf",
		description: "Covers the Web Development stack includes ui/ux, backend like node.js,Mongo DB.These all make help to build a entire real world problems like smart waste management.",
		skills: ["UI/UX", "Backend development", "API Management", "Fullstack development"]
	},
	{
		title: "Thozil Internship",
		issuer: "Thozil",
		date: "2024",
		link: "/experience/thozil intern.pdf",
		description: "Intensive internship program focused on practical skill development and industry-standard workflows.",
		skills: ["Internship", "Professional Development", "Industry Skills"]
	}
];

const Certificates = () => {
	return (
		<div className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
			<div className="max-w-7xl mx-auto">
				<ScrollAnimation>
					<div className="mb-16 space-y-4">
						<h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 flex items-center gap-3">
							<Award className="w-10 h-10 text-white" />
							Certifications
						</h2>
						<p className="text-gray-400 text-lg max-w-2xl">
							Credentials and recognitions from industry leaders.
						</p>
					</div>
				</ScrollAnimation>

				<div className="grid md:grid-cols-2 gap-8">
					{certificates.map((cert, index) => (
						<ScrollAnimation key={cert.title}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="group relative bg-black border border-gray-800 p-6 flex flex-col h-full hover:border-white/30 transition-all duration-300"
							>
								{/* Tech Decoration */}
								<div className="absolute top-0 right-0 p-2 opacity-50">
									<div className="flex gap-1">
										<div className="w-1 h-1 bg-white rounded-full animate-pulse" />
										<div className="w-1 h-1 bg-white/50 rounded-full" />
										<div className="w-1 h-1 bg-white/20 rounded-full" />
									</div>
								</div>

								{/* Corner Brackets */}
								<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/20 group-hover:border-white/80 transition-colors duration-300" />
								<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/20 group-hover:border-white/80 transition-colors duration-300" />

								{/* Content */}
								<div className="relative z-10 flex flex-col h-full">
									<div className="flex justify-between items-start mb-4">
										<div>
											<h3 className="text-xl font-bold text-white mb-1 group-hover:text-gray-200 transition-colors">
												{cert.title}
											</h3>
											<span className="text-sm font-mono text-gray-500 uppercase tracking-widest">
												{cert.issuer}
											</span>
										</div>
										<div className="flex items-center gap-2 text-xs font-mono text-white/60 bg-white/5 px-2 py-1 rounded border border-white/10">
											<Calendar className="w-3 h-3" />
											{cert.date}
										</div>
									</div>

									<p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
										{cert.description}
									</p>

									<div className="space-y-6 mt-auto">
										<div className="flex flex-wrap gap-2">
											{cert.skills.map((skill) => (
												<span
													key={skill}
													className="px-2 py-1 text-[10px] uppercase font-bold text-black bg-white/90 hover:bg-white transition-colors tracking-wider"
												>
													{skill}
												</span>
											))}
										</div>

										<motion.a
											href={cert.link}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-white/20 pb-1 hover:border-white transition-all group-hover:translate-x-1"
										>
											VERIFY_CREDENTIAL
											<ExternalLink className="w-3 h-3" />
										</motion.a>
									</div>
								</div>
							</motion.div>
						</ScrollAnimation>
					))}
				</div>
			</div>
		</div>
	);
};

export default Certificates;