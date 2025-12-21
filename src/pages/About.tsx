'use client';

import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Award, Globe, User, Palette, Lightbulb } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import { achievements, interests, aboutData } from '@/data/portfolio';

const iconMap = {
	projects: <Code2 className="w-6 h-6 text-white" />,
	internships: <Briefcase className="w-6 h-6 text-white" />,
	academics: <GraduationCap className="w-6 h-6 text-white" />
};

const About = () => {
	return (
		<section className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20 overflow-hidden">
			<div className="max-w-7xl mx-auto space-y-24">

				{/* Intro Section */}
				<div className="grid lg:grid-cols-2 gap-16 items-start">
					{/* Image Column */}
					<ScrollAnimation>
						<div className="relative aspect-square max-w-md mx-auto lg:max-w-none w-full animate-float">
							<div className="absolute inset-0 bg-gradient-to-tr from-gray-600/30 to-gray-400/30 rounded-[2rem] blur-2xl transform -rotate-6" />
							<div className="relative h-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
								<img
									src={aboutData.profileImage}
									alt="Kameshraja K"
									className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
								/>
							</div>
						</div>
					</ScrollAnimation>

					{/* Content Column */}
					<div className="space-y-8">
						<ScrollAnimation>
							<h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
								About Me
							</h2>
						</ScrollAnimation>

						<ScrollAnimation>
							<div className="space-y-6 text-lg text-gray-400 leading-relaxed text-justify">
								{aboutData.description.map((desc, index) => (
									<p key={index}>{desc}</p>
								))}
							</div>
						</ScrollAnimation>

						<ScrollAnimation>
							<div className="pt-6">
								<h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
									<Lightbulb className="w-5 h-5 text-white" />
									Quick Facts
								</h3>
								<div className="grid sm:grid-cols-2 gap-4">
									{aboutData.quickFacts.map((fact, index) => (
										<div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
											<span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
											<span className="text-gray-300 text-sm">{fact}</span>
										</div>
									))}
								</div>
							</div>
						</ScrollAnimation>

						<ScrollAnimation>
							<div className="flex flex-wrap gap-4 pt-4">
								<a
									href={aboutData.cvUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
								>
									Download CV
								</a>
								<a
									href="#skills"
									className="px-8 py-3 bg-white/10 text-white rounded-full font-bold border border-white/10 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
								>
									View Skills
								</a>
							</div>
						</ScrollAnimation>
					</div>
				</div>

				{/* Achievements Section */}
				<ScrollAnimation>
					<div className="space-y-12">
						<div className="text-center max-w-3xl mx-auto space-y-4">
							<h3 className="text-3xl md:text-4xl font-bold text-white">Milestones & Achievements</h3>
							<p className="text-gray-400">Highlights of my academic and professional journey.</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							{achievements.map((achievement, index) => (
								<motion.div
									key={achievement.title}
									whileHover={{ y: -5 }}
									className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/[0.07] transition-all group"
								>
									<div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
										{iconMap[achievement.key as keyof typeof iconMap]}
									</div>
									<h4 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
										{achievement.title}
									</h4>
									<p className="text-gray-400 leading-relaxed">
										{achievement.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</ScrollAnimation>

				{/* Interests Section */}
				<ScrollAnimation>
					<div className="bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-8 md:p-12 border border-white/10 relative overflow-hidden">
						<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
						<div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

						<div className="relative z-10 space-y-8">
							<h3 className="text-2xl font-bold text-white flex items-center gap-3">
								<Palette className="w-6 h-6 text-white" />
								Areas of Interest
							</h3>

							<div className="flex flex-wrap gap-4">
								{interests.map((interest) => (
									<div
										key={interest}
										className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all cursor-default"
									>
										{interest}
									</div>
								))}
							</div>
						</div>
					</div>
				</ScrollAnimation>

			</div>
		</section>
	);
};

export default About;