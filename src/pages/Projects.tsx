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
								className="group relative h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 flex flex-col"
								whileHover={{ y: -5 }}
							>
								{/* Image Container */}
								<div className="relative aspect-video overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10" />
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
									/>

									{/* Floating Links on Hover (Desktop) or visible (Mobile) */}
									<div className="absolute top-4 right-4 z-20 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors border border-white/10"
											title="View Code"
										>
											<Github className="w-5 h-5" />
										</a>
										<a
											href={project.live}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors border border-white/10"
											title="Live Demo"
										>
											<ArrowUpRight className="w-5 h-5" />
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