import Projects from '@/pages/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects - Kameshraja K',
	description: 'View Kameshraja K\'s portfolio of projects including AI-Powered Pneumonia Classifier, AgriTech Platform, and Municipal Waste Tracking.',
};

export default function ProjectsPage() {
	return <Projects />;
}