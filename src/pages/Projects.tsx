'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, FolderOpen } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { projectsData } from '@/data/portfolio';

const Projects = () => {
	return (
		<section className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
			<div className="max-w-7xl mx-auto">
				<ScrollAnimation>
					<div className="mb-16 space-y-4">
						<h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 flex items-center gap-3">
							<FolderOpen className="w-10 h-10 text-white" />
							Featured Projects
						</h2>
						<p className="text-gray-400 text-lg max-w-2xl">
							A showcase of my latest work, featuring full-stack applications, experiments, and open-source contributions.
						</p>
					</div>
				</ScrollAnimation>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projectsData.map((project, index) => (
						<ScrollAnimation key={project.title}>
							<motion.div
								className="group relative h-full bg-black border border-gray-800 p-2 flex flex-col hover:border-white/30 transition-all duration-300"
								whileHover={{ y: -5 }}
							>
								{/* Image Container with Tech Frame */}
								<div className="relative aspect-video overflow-hidden border border-gray-800 bg-gray-900 group-hover:border-gray-600 transition-colors">
									{/* Scanning Line & Grid Overlay */}
									<div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
										<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
										<div className="absolute top-0 left-0 right-0 h-0.5 bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.5)] animate-scan" />
									</div>

									{/* Corner Brackets */}
									<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white z-30 transition-all duration-300 opacity-0 group-hover:opacity-100" />
									<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white z-30 transition-all duration-300 opacity-0 group-hover:opacity-100" />
									<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white z-30 transition-all duration-300 opacity-0 group-hover:opacity-100" />
									<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white z-30 transition-all duration-300 opacity-0 group-hover:opacity-100" />

									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700"
									/>

									{/* Tech Overlay info */}
									<div className="absolute bottom-2 left-2 right-2 flex justify-between items-end z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="text-[10px] font-mono text-white/80 bg-black/50 px-1">SYS.IMG.0{index + 1}</div>
										<div className="flex gap-1">
											<div className="w-1 h-3 bg-white/50" />
											<div className="w-1 h-3 bg-white/30" />
											<div className="w-1 h-3 bg-white/10" />
										</div>
									</div>

									{/* Floating Links */}
									<div className="absolute top-2 right-2 z-30 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="p-1.5 bg-black border border-white text-white hover:bg-white hover:text-black transition-colors"
											title="View Code"
										>
											<Github className="w-4 h-4" />
										</a>
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="p-1.5 bg-black border border-white text-white hover:bg-white hover:text-black transition-colors"
											title="Live Demo"
										>
											<ArrowUpRight className="w-4 h-4" />
										</a>
									</div>
								</div>

								{/* Content */}
								<div className="p-6 flex-1 flex flex-col">
									<h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
										{project.title}
									</h3>
									<p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
										{project.description}
									</p>

									{/* Tags */}
									<div className="flex flex-wrap gap-2 mt-auto">
										{project.tags.map(tag => (
											<span
												key={tag}
												className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 border border-white/10 rounded-full"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</motion.div>
						</ScrollAnimation>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;