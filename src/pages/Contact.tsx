'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Clock, Send, Play } from 'lucide-react';
import { useState } from 'react';
import { aboutData } from '@/data/portfolio';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			const response = await fetch("https://formsubmit.co/ajax/k.s.kameshraja@gmail.com", {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					subject: formData.subject,
					message: formData.message
				})
			});

			if (response.ok) {
				setSubmitStatus('success');
				setFormData({ name: '', email: '', subject: '', message: '' });
			} else {
				setSubmitStatus('error');
			}
		} catch (error) {
			console.error('Submission error:', error);
			setSubmitStatus('error');
		}

		setIsSubmitting(false);
	};

	const contactInfo = [
		{
			icon: <Mail className="w-5 h-5 text-white" />,
			label: 'Email',
			value: 'k.s.kameshraja@gmail.com',
			link: 'mailto:k.s.kameshraja@gmail.com'
		},
		{
			icon: <Phone className="w-5 h-5 text-white" />,
			label: 'Phone',
			value: '+91 9585459935',
			link: 'tel:+919585459935'
		},
		{
			icon: <MapPin className="w-5 h-5 text-white" />,
			label: 'Location',
			value: 'Villupuram, Tamilnadu, India'
		},
		{
			icon: <Clock className="w-5 h-5 text-white" />,
			label: 'Time Zone',
			value: 'IST (UTC+5:30)'
		}
	];

	return (
		<section className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 pb-20">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
						Get in Touch
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Have a project in mind or just want to chat? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-5 gap-12 items-start">
					{/* Left Column: Contact Info (2 cols wide) */}
					<div className="lg:col-span-2 space-y-8">
						{/* Contact Cards */}
						<div className="grid gap-4">
							{contactInfo.map((info, index) => (
								<motion.div
									key={info.label}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
								>
									{info.link ? (
										<a
											href={info.link}
											className="flex items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all group"
										>
											<div className="p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors mr-4">
												{info.icon}
											</div>
											<div>
												<p className="text-sm text-gray-400 mb-1">{info.label}</p>
												<p className="font-medium text-white group-hover:text-gray-200 transition-colors">
													{info.value}
												</p>
											</div>
										</a>
									) : (
										<div className="flex items-center p-4 rounded-2xl bg-white/5 border border-white/10">
											<div className="p-3 rounded-xl bg-white/5 mr-4">
												{info.icon}
											</div>
											<div>
												<p className="text-sm text-gray-400 mb-1">{info.label}</p>
												<p className="font-medium text-white">
													{info.value}
												</p>
											</div>
										</div>
									)}
								</motion.div>
							))}
						</div>

						{/* Social Links */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="bg-white/5 rounded-2xl p-6 border border-white/10"
						>
							<h3 className="text-lg font-semibold text-white mb-4">Connect with me</h3>
							<div className="flex gap-4">
								<a
									href={aboutData.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 bg-black/20 rounded-xl hover:bg-white hover:text-black text-gray-400 transition-all"
								>
									<Github className="w-5 h-5" />
								</a>
								<a
									href={aboutData.linkedinUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 bg-black/20 rounded-xl hover:bg-white hover:text-black text-gray-400 transition-all"
								>
									<Linkedin className="w-5 h-5" />
								</a>
								<a
									href={`https://wa.me/+919585459935`}
									target="_blank"
									rel="noopener noreferrer"
									className="p-3 bg-black/20 rounded-xl hover:bg-white hover:text-black text-gray-400 transition-all"
								>
									<MessageCircle className="w-5 h-5" />
								</a>
							</div>
						</motion.div>
					</div>

					{/* Right Column: Form (3 cols wide) */}
					<div className="lg:col-span-3">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
						>
							<h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div className="space-y-2">
										<label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
										<input
											type="text"
											id="name"
											required
											className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all text-white placeholder-gray-500"
											placeholder="John Doe"
											value={formData.name}
											onChange={(e) => setFormData({ ...formData, name: e.target.value })}
										/>
									</div>
									<div className="space-y-2">
										<label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
										<input
											type="email"
											id="email"
											required
											className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all text-white placeholder-gray-500"
											placeholder="john@example.com"
											value={formData.email}
											onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										/>
									</div>
								</div>

								<div className="space-y-2">
									<label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">Subject</label>
									<input
										type="text"
										id="subject"
										required
										className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all text-white placeholder-gray-500"
										placeholder="Project Inquiry"
										value={formData.subject}
										onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
									/>
								</div>

								<div className="space-y-2">
									<label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
									<textarea
										id="message"
										rows={6}
										required
										className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-white focus:ring-1 focus:ring-white outline-none transition-all text-white placeholder-gray-500 resize-none"
										placeholder="Tell me about your project..."
										value={formData.message}
										onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									></textarea>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full py-4 bg-white hover:bg-gray-200 text-black rounded-xl font-bold text-lg shadow-lg shadow-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{isSubmitting ? 'Sending...' : (
										<>
											Send Message
											<Send className="w-5 h-5" />
										</>
									)}
								</button>

								{submitStatus === 'success' && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center"
									>
										Message sent successfully! I'll get back to you soon.
									</motion.div>
								)}
								{submitStatus === 'error' && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center"
									>
										Something went wrong. Please try again or email me directly.
									</motion.div>
								)}
							</form>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;