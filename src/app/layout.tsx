import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

export const viewport = {
	themeColor: '#000000',
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
};

export const metadata: Metadata = {
	title: 'Kameshraja K - Software Developer',
	description: 'Kameshraja K - Full Stack Developer specializing in AI/ML, React.js, Node.js, and modern web technologies.',
	keywords: 'Kameshraja K, Software Developer, Full Stack Developer, AI/ML, Web Developer, React Developer, Next.js, Python, TensorFlow, OpenCV',
	authors: [{ name: 'Kameshraja K' }],
	creator: 'Kameshraja K',
	manifest: '/manifest.json',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://kameshraja-portfolio.vercel.app/', // Updated placeholder URL
		title: 'Kameshraja K - Full Stack Developer',
		description: 'Full-stack developer specializing in AI/ML, React.js, Node.js, and modern web technologies.',
		siteName: 'Kameshraja K Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Kameshraja K - Full Stack Developer',
		description: 'Full-stack developer specializing in AI/ML, React.js, Node.js, and modern web technologies.',
		creator: '@kameshraja',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	metadataBase: new URL('https://kameshraja-portfolio.vercel.app'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: '/googlea4a36904e14398c1.html',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className} suppressHydrationWarning={true}>
			<head>
				<link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/nextjs.png" />

				<link rel="manifest" href="/manifest.json" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
							if ('serviceWorker' in navigator) {
								navigator.serviceWorker.getRegistrations().then(function(registrations) {
									for(let registration of registrations) {
										registration.unregister();
									}
								});
							}
						`,
					}}
				/>
			</head>
			<body key="kameshraja-portfolio-v3" suppressHydrationWarning={true}>
				<div className="min-h-screen flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow">{children}</main>
					<SpeedInsights />
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}