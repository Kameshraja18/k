'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import SearchDialog from './SearchDialog';

import { navLinks } from '@/data/navigation';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<motion.nav
			className="fixed top-0 w-full z-50 transition-all duration-300"
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="relative">
				<div className="absolute inset-0 bg-black/70 backdrop-blur-md border-b border-white/5" />

				<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-20 items-center justify-between">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-3 group">
							<div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white text-black font-bold text-lg shadow-lg shadow-white/10 group-hover:scale-105 transition-transform duration-300">
								KR
							</div>
							<span className="text-xl font-bold text-white tracking-tight group-hover:text-gray-200 transition-colors">
								Kameshraja
							</span>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							<SearchDialog />
							{navLinks.map(link => (
								<Link
									key={link.path}
									href={link.path}
									className={`text-sm font-medium transition-all duration-200 hover:text-white ${pathname === link.path
										? 'text-white font-semibold underline underline-offset-4 decoration-white/50'
										: 'text-gray-400'
										}`}
								>
									{link.label}
								</Link>
							))}
						</div>

						{/* Mobile header right section */}
						<div className="flex md:hidden items-center space-x-4">
							<SearchDialog />
							<button
								className="p-2 text-gray-400 hover:text-white transition-colors"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								aria-label="Toggle menu"
							>
								{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<motion.div
						className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10"
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2 }}
					>
						<div className="px-4 pt-2 pb-6 space-y-2">
							{navLinks.map(link => (
								<Link
									key={link.path}
									href={link.path}
									className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${pathname === link.path
										? 'text-white bg-white/10'
										: 'text-gray-400 hover:text-white hover:bg-white/5'
										}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</div>
		</motion.nav>
	);
};

export default Navbar;