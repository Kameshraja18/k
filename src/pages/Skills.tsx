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
								className="h-full bg-white/5 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/[0.07] transition-all duration-300 border border-white/10 hover:border-white/30 group"
								whileHover={{ y: -5 }}
							>
								<div className="flex items-center space-x-4 mb-8">
									<div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:border-white/20 transition-colors">
										{skillGroup.icon}
									</div>
									<h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
										{skillGroup.category}
									</h3>
								</div>

								<div className="grid grid-cols-2 gap-3">
									{skillGroup.items.map((skill, skillIndex) => (
										<div
											key={skill.name}
											className="px-3 py-2.5 rounded-xl bg-white/5 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
										>
											<div className="transform scale-90 text-white">
												{skill.icon}
											</div>
											<span className="text-gray-300 text-sm font-medium">
												{skill.name}
											</span>
										</div>
									))}
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