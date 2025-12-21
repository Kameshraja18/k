'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building2, ExternalLink, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

import { experiences } from '@/data/portfolio';

const Experience = () => {
	return (
		<section className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
			<div className="max-w-6xl mx-auto">
				<ScrollAnimation>
					<div className="mb-16">
						<h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6 flex items-center gap-4">
							<Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white" />
							Professional Experience
						</h2>
						<p className="text-gray-400 text-lg max-w-2xl">
							My professional journey and career milestones.
						</p>
					</div>
				</ScrollAnimation>

				<div className="space-y-12">
					{experiences.map((exp, index) => (
						<ScrollAnimation key={exp.title}>
							<div className="group relative bg-white/5 rounded-3xl overflow-hidden backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 border border-white/10 hover:border-white/30">
								<div className="grid grid-cols-1 lg:grid-cols-[1fr,350px]">
									<div className="p-8 sm:p-10">
										<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8">
											<div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors w-fit">
												<Building2 className="w-8 h-8 text-white" />
											</div>
											<div>
												<h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{exp.title}</h3>
												<p className="text-xl text-gray-300 font-medium">{exp.company}</p>
											</div>
										</div>

										<div className="flex flex-wrap items-center gap-4 text-gray-400 mb-8 text-sm sm:text-base font-medium">
											<div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
												<MapPin className="w-4 h-4" />
												<span>{exp.location}</span>
											</div>
											<span>•</span>
											<div className="px-3 py-1 bg-white/5 rounded-full border border-white/5">
												{exp.period}
											</div>
										</div>

										<ul className="space-y-4 mb-8">
											{exp.description.map((item, i) => (
												<li
													key={i}
													className="flex items-start gap-3 text-gray-300 text-base sm:text-lg leading-relaxed"
												>
													<div className="mt-2 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
													<span>{item}</span>
												</li>
											))}
										</ul>

										<motion.a
											href={exp.certificateUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="lg:hidden inline-flex items-center gap-2 px-6 py-3 text-black bg-white hover:bg-gray-200 rounded-xl transition-all duration-300 font-medium shadow-lg shadow-white/10"
											whileHover={{ scale: 1.02 }}
										>
											{exp.certificateUrl.endsWith('.pdf') ? 'View Certificate' : 'View Project'}
											<ExternalLink className="w-4 h-4" />
										</motion.a>
									</div>

									<div className="relative hidden lg:block h-full min-h-[300px]">
										<div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
											<img
												src={exp.image}
												alt={exp.company}
												className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
											/>
											<div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/50 to-black/80" />
										</div>
										<div className="relative h-full flex items-center justify-center p-8">
											<motion.a
												href={exp.certificateUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="px-8 py-4 text-white font-bold bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl flex items-center gap-3 transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 shadow-2xl"
												whileHover={{ y: -2 }}
											>
												{exp.certificateUrl.endsWith('.pdf') ? 'View Certificate' : 'View Project'}
												<ExternalLink className="w-5 h-5" />
											</motion.a>
										</div>
									</div>
								</div>
							</div>
						</ScrollAnimation>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;