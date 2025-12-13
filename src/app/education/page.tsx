import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education - Kameshraja K',
	description: 'Kameshraja K\'s educational background including B.E. in Computer Science and Engineering from V. R. S. College of Engineering and Technology.',
};

export default function EducationPage() {
	return <Education />;
}