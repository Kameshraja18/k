'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, FileText, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import Image from 'next/image';
import { educationData } from '@/data/portfolio';

const Education = () => {


	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<GraduationCap className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Education</h2>
				</motion.div>
			</ScrollAnimation>

			<div className="space-y-12">
				{educationData.map((edu, index) => (
					<ScrollAnimation key={edu.school}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							className="relative bg-black border border-gray-800 rounded-xl overflow-hidden hover:border-white/30 transition-all group"
						>
							<div className="absolute top-0 right-0 bg-white z-20 text-black font-bold px-4 py-1 text-sm rounded-bl-lg tracking-widest">
								{edu.duration}
							</div>

							<div className="grid md:grid-cols-[300px,1fr]">
								{/* Left Column - Image with Tech HUD */}
								<div className="relative h-64 md:h-full border-r border-gray-800 bg-gray-900 overflow-hidden">
									{/* Scanline Effect */}
									<div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
										<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
										<div className="absolute top-0 left-0 right-0 h-0.5 bg-white/50 animate-scan" />
									</div>

									<Image
										src={edu.image}
										alt={edu.school}
										fill
										className="object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700"
										sizes="(max-width: 768px) 100vw, 300px"
										priority
										quality={90}
									/>

									<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

									<div className="absolute bottom-4 left-4 z-20">
										<div className="flex items-center gap-2 text-white/80 mb-1 text-xs font-mono uppercase tracking-wider">
											<MapPin className="w-3 h-3" />
											<span>{edu.location}</span>
										</div>
									</div>
								</div>

								{/* Right Column - Content */}
								<div className="p-8">
									<div className="mb-6">
										<h3 className="text-2xl font-bold text-white mb-2">{edu.school}</h3>
										<div className="flex items-center gap-2 text-gray-400">
											<BookOpen className="w-4 h-4" />
											<h4 className="text-lg">{edu.degree}</h4>
										</div>
									</div>

									<div className="flex items-center gap-3 mb-6 p-3 bg-white/5 rounded-lg border border-white/10 w-fit">
										<Award className="w-5 h-5 text-white" />
										<span className="text-gray-200 font-mono">{edu.grade}</span>
									</div>

									<div className="flex items-start gap-3 text-gray-400 mb-6 leading-relaxed">
										<FileText className="w-5 h-5 mt-1 flex-shrink-0 text-white/50" />
										<p>{edu.description}</p>
									</div>

									{(edu.coursework || edu.subjects) && (
										<div className="pt-4 border-t border-gray-800">
											<p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Key Subjects</p>
											<div className="flex flex-wrap gap-2">
												{(edu.coursework || edu.subjects)?.map((item) => (
													<span
														key={item}
														className="px-2 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors"
													>
														{item}
													</span>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Education;