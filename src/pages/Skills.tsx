'use client';

import { motion } from 'framer-motion';
import {
	Code2, Layout, Server, Database, MessageSquare, Lightbulb, Users, Brain,
	Cloud, Terminal, Wrench, Cpu
} from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';
import {
	CppLogo, PythonLogo, JavaScriptLogo, HTML5Logo,
	CSSLogo, ReactLogo, TypeScriptLogo, NodeLogo, MySQLLogo,
	MongoDBLogo, VSCodeLogo, GitLogo, TailwindLogo, ShadCNLogo, NextjsLogo,
	VirtualBoxLogo, VercelLogo, FirebaseLogo, SupabaseLogo
} from '@/components/TechLogos';

const skills = [
	{
		category: 'Programming',
		icon: <Code2 className="w-6 h-6 text-white" />,
		items: [
			{ name: 'C', icon: <CppLogo /> },
			{ name: 'Python', icon: <PythonLogo /> },
			{ name: 'JavaScript', icon: <JavaScriptLogo /> }
		]
	},
	{
		category: 'Full-Stack',
		icon: <Layout className="w-6 h-6 text-white" />,
		items: [
			{ name: 'React.js', icon: <ReactLogo /> },
			{ name: 'Node.js', icon: <NodeLogo /> },
			{ name: 'HTML', icon: <HTML5Logo /> },
			{ name: 'CSS', icon: <CSSLogo /> }
		]
	},
	{
		category: 'Cloud / DevOps',
		icon: <Cloud className="w-6 h-6 text-white" />,
		items: [
			{ name: 'AWS', icon: <Cloud className="w-4 h-4" /> },
			{ name: 'Docker', icon: <Terminal className="w-4 h-4" /> },
			{ name: 'Kubernetes', icon: <Terminal className="w-4 h-4" /> }
		]
	},
	{
		category: 'Databases',
		icon: <Database className="w-6 h-6 text-white" />,
		items: [
			{ name: 'MySQL', icon: <MySQLLogo /> },
			{ name: 'MongoDB', icon: <MongoDBLogo /> },
			{ name: 'Firebase', icon: <FirebaseLogo /> },
			{ name: 'Supabase', icon: <SupabaseLogo /> }
		]
	},
	{
		category: 'Tools',
		icon: <Wrench className="w-6 h-6 text-white" />,
		items: [
			{ name: 'Figma', icon: <VSCodeLogo /> },
			{ name: 'Git', icon: <GitLogo /> },
			{ name: 'GitHub', icon: <GitLogo /> }
		]
	},
	{
		category: 'AI / ML',
		icon: <Brain className="w-6 h-6 text-white" />,
		items: [
			{ name: 'TensorFlow', icon: <PythonLogo /> },
			{ name: 'Scikit-learn', icon: <PythonLogo /> },
			{ name: 'OpenCV', icon: <PythonLogo /> }
		]
	},
	{
		category: 'Soft Skills',
		icon: <Users className="w-6 h-6 text-white" />,
		items: [
			{ name: 'Communication', icon: <Users className="w-4 h-4" /> },
			{ name: 'Problem-Solving', icon: <Lightbulb className="w-4 h-4" /> },
			{ name: 'Teamwork', icon: <Users className="w-4 h-4" /> }
		]
	}
];

const Skills = () => {
	return (
		<section className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
			<div className="max-w-7xl mx-auto">
				<ScrollAnimation>
					<div className="mb-16">
						<h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6 flex items-center gap-4">
							<Cpu className="w-8 h-8 md:w-10 md:h-10 text-white" />
							Technical Skills
						</h2>
						<p className="text-gray-400 text-lg max-w-2xl">
							A comprehensive overview of my technical expertise, tools, and methodologies.
						</p>
					</div>
				</ScrollAnimation>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skills.map((skillGroup, index) => (
						<ScrollAnimation key={skillGroup.category}>
							<motion.div
								className="h-full bg-black/50 p-6 rounded-xl border border-gray-800 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
								whileHover={{ y: -5 }}
							>
								{/* Scanline Effect on Hover */}
								<div className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
									<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px]" />
								</div>

								<div className="relative z-10">
									<div className="flex items-center space-x-4 mb-8">
										<div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/30 transition-colors">
											{skillGroup.icon}
										</div>
										<h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors font-mono tracking-wide">
											{skillGroup.category}
										</h3>
									</div>

									<div className="grid grid-cols-2 gap-3">
										{skillGroup.items.map((skill, skillIndex) => (
											<div
												key={skill.name}
												className="px-3 py-2.5 rounded bg-white/5 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20 group/item"
											>
												<div className="transform scale-90 text-white group-hover/item:scale-110 transition-transform">
													{skill.icon}
												</div>
												<span className="text-gray-300 text-xs font-bold uppercase tracking-wider">
													{skill.name}
												</span>
											</div>
										))}
									</div>
								</div>

								{/* Corner Accents */}
								<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
									<div className="w-2 h-2 border-t border-r border-white" />
								</div>
								<div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
									<div className="w-2 h-2 border-b border-l border-white" />
								</div>
							</motion.div>
						</ScrollAnimation>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;