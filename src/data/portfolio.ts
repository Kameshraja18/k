export interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	period: string;
	type: string;
	image: string;
	certificateUrl: string;
	description: string[];
}

export interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	period: string;
	type: string;
	image: string;
	certificateUrl: string;
	description: string[];
}

export const experiences: ExperienceItem[] = [
	{
		title: "Web Development Intern",
		company: "OneYes InfoTech Solution",
		location: "Villupuram / Remote",
		period: "Apr 2025 - May 2025",
		type: "Internship",
		image: "/experience/oneyes_logo.png",
		certificateUrl: "/experience/oneyes Infotech solution.pdf",
		description: [
			"Developed a responsive web platform to monitor and manage municipal waste collection operations.",
			"Implemented real-time waste tracking using Node.js and MongoDB, enabling automated status updates.",
			"Improved waste tracking efficiency and reduced route planning time by 20% through optimized backend algorithms.",
			"Tech Stack: HTML, CSS, JavaScript, Node.js, MongoDB, Git/GitHub"
		]
	},
	{
		title: "Freelance / Projects",
		company: "Aether Projects",
		location: "Villupuram",
		period: "Ongoing",
		type: "Projects",
		image: "/experience/aether_preview.png",
		certificateUrl: "https://aether--projects.vercel.app/",
		description: [
			"Check My Freelance Projects Live on my site Aether Projects.",
			"Participated in Smart India Hackathon 2025, showcasing problem solving and innovation in tech.",
			"Building solutions that create meaningful real-world impact."
		]
	},
	{
		title: "Web Developer",
		company: "Intel Unnati industrial program",
		location: "Remote",
		period: "May 2024 - July 2024",
		type: "Program",
		image: "/experience/intel_logo.png",
		certificateUrl: "/certificates/intel_unnati.png",
		description: [
			"Developed a dynamic web platform that integrates essential public services into a single accessible interface.",
			"Built responsive and user-friendly UI with secure authentication and role-based authorization.",
			"Implemented scalable backend architecture with efficient service access and data management.",
			"Tech Stack: HTML, CSS, JavaScript, Node.js, MongoDB, Git & GitHub"
		]
	},
	{
		title: "Internship Program",
		company: "Thozil",
		location: "Tamilnadu",
		period: "2024",
		type: "Internship",
		image: "/experience/thozil_logo.png",
		certificateUrl: "/experience/thozil intern.pdf",
		description: [
			"Participated in an intensive internship program focused on practical skill development.",
			"Gained hands-on experience in industry-standard technologies and workflows.",
			"Collaborated with peers to solve real-world problems."
		]
	}
];

export interface EducationItem {
	school: string;
	location: string;
	duration: string;
	degree: string;
	grade: string;
	image: string;
	resultUrl: string;
	coursework?: string[];
	subjects?: string[];
	description: string;
}

export const educationData: EducationItem[] = [
	{
		school: "V.R.S College Of Engineering And Technology",
		location: "Villupuram, Tamilnadu",
		duration: "2022 - 2026",
		degree: "Bachelor of Engineering in Computer Science",
		grade: "CGPA: 8.1",
		image: "/education/vrscet_college.png",
		resultUrl: "/files/education_pdf/B Tech.pdf",
		coursework: [
			"DSA",
			"OOPs",
			"DBMS",
			"AI",
			"ML",
			"OS",
			"Networking",
		],
		description: "Passionate CSE student with full-stack, AWS deployment, and AI/ML expertise. Committed to building solutions that create meaningful real-world impact."
	},
	{
		school: "Sri Sarada Vidhyalaya Higher Secondary Matriculation School",
		location: "Ulundurpet, Tamilnadu",
		duration: "2020 - 2022",
		degree: "Higher Secondary School",
		grade: "Higher Secondary", // CGPA not explicitly mentioned for school in text, keeping generic or copying college
		image: "/education/school_new.png",
		resultUrl: "/files/education_pdf/HS MARK SHEET.pdf",
		subjects: [
			"Physics",
			"Chemistry",
			"Mathematics",
			"Biology",
			"Language"
		],
		description: "Completed Higher Secondary education with a focus on Mathematics and Computer Science."
	}
];

export interface AchievementItem {
	key: string;
	title: string;
	description: string;
}

export const achievements: AchievementItem[] = [
	{
		key: "projects",
		title: "AI/ML & Web Projects",
		description: "Pneumonia Classifier, Farm Sage, and more"
	},
	{
		key: "internships",
		title: "Internships",
		description: "OneYes InfoTech, Intel Unnati"
	},
	{
		key: "academics",
		title: "8.1 CGPA",
		description: "Academic excellence"
	}
];

export const interests: string[] = [
	"Full-Stack Development",
	"AI/ML (TensorFlow, OpenCV)",
	"Cloud/DevOps (AWS, Docker)",
	"Problem-Solving",
	"Web Development",
	"Innovation"
];

export const aboutData = {
	name: "Kameshraja K",
	title: "I design & code",
	profileImage: "/profile/profile.jpeg",
	description: [
		"Passionate CSE student with full-stack, AWS deployment, and AI/ML expertise, committed to building solutions that create meaningful real-world impact.",
		"I have experience in Python, JavaScript, React.js, Node.js, and Cloud technologies like AWS and Docker. I have worked on impactful projects like an AI-Powered Pneumonia Classifier and Farm Sage (AgriTech platform)."
	],
	quickFacts: [
		"Based in Villupuram, Tamilnadu, India",
		"B.E. Computer Science (2022 - 2026)",
		"+91 9585459935",
		"k.s.kameshraja@gmail.com"
	],
	cvUrl: "/files/KAMESHRAJA K Resume Final (1).pdf",
	skillsUrl: "/skills",
	githubUrl: "https://github.com/Kameshraja18",
	linkedinUrl: "https://www.linkedin.com/in/kameshraja/",
	twitterUrl: "#",
};

export interface ProjectItem {
	title: string;
	description: string;
	image: string;
	github: string;
	live: string;
	tags: string[];
}

export const projectsData: ProjectItem[] = [
	{
		title: 'AI-Based Farming Recommendations', // Item 1
		description: 'An intelligent, AI-driven recommendation system designed to assist modern farmers in maximizing crop yield. Analyzes soil parameters, weather forecasts, and historical data to recommend suitable crops, fertilizer usage, and irrigation schedules.',
		image: '/projects_img/agritech.png',
		github: '#',
		live: '#',
		tags: ['AI', 'Machine Learning', 'Agriculture', 'Python']
	},
	{
		title: 'AI-Powered Pneumonia Classification', // Item 2
		description: 'Automates the detection of pneumonia from chest X-rays using Convolutional Neural Networks (CNN). Trained on labeled datasets to distinguish between normal and pneumonia lungs, serving as a reliable second opinion for medical professionals.',
		image: '/projects_img/pneumonia.png',
		github: '#',
		live: '#',
		tags: ['Deep Learning', 'CNN', 'Healthcare', 'Computer Vision']
	},
	{
		title: 'Brain Tumor Detection Using CNN', // Item 3
		description: 'Implements a Deep Learning approach using CNN to detect and classify brain tumors from MRI scans. Preprocesses images to remove noise and identifies tumor presence, aiding radiologists in early detection.',
		image: '/projects_img/brain_tumor.png',
		github: '#',
		live: '#',
		tags: ['Deep Learning', 'CNN', 'Healthcare', 'MRI Analysis']
	},
	{
		title: 'AI-Powered TBI Detection', // Item 4
		description: 'An AI system to detect Traumatic Brain Injury and predict coma progression. Analyzes CT scan images and clinical parameters like the Glasgow Coma Scale to identify patterns indicative of severe brain trauma during the golden hour.',
		image: '/projects_img/tbi_detection.png',
		github: '#',
		live: '#',
		tags: ['AI', 'Healthcare', 'Trauma Detection', 'CT Analysis']
	},
	{
		title: 'AI-Based Cattle Breed Detection', // Item 5
		description: 'Computer vision-based application for automatic cattle breed classification. Uses deep learning to identify breeds based on color, horn shape, and body structure, facilitating automated livestock management.',
		image: '/projects_img/cattle_breed.png',
		github: '#',
		live: '#',
		tags: ['Computer Vision', 'Deep Learning', 'Agriculture', 'Livestock']
	},
	{
		title: 'ASL Detection and Speech Conversion', // Item 7 (User's 7)
		description: 'Real-time American Sign Language (ASL) recognition system. Captures hand gestures via video, translates them to text using CNN, and converts text to audible speech, bridging the communication gap for the hearing-impaired.',
		image: '/projects_img/asl_detection.png',
		github: '#',
		live: '#',
		tags: ['CNN', 'Computer Vision', 'Accessibility', 'NLP']
	},
	{
		title: 'Blockchain-Based Voting System', // Item 8 (User's 8)
		description: 'Decentralized electronic voting system using Ethereum Smart Contracts for immutable, tamper-proof votes. database for non-critical data. Ensures a secure, transparent, and verifiable election process.',
		image: '/projects_img/blockchain_voting.png',
		github: '#',
		live: '#',
		tags: ['Blockchain', 'Ethereum', 'MySQL', 'Smart Contracts']
	},
	{
		title: 'College Management Website', // Item 9 (User's 9)
		description: 'Comprehensive College Management System built with Node.js and MongoDB. Centralized platform for students, faculty, and administrators featuring digital attendance, assignment submission, and fee management.',
		image: '/projects_img/college_management.png',
		github: '#',
		live: '#',
		tags: ['Node.js', 'MongoDB', 'Web Development', 'Management System']
	}
];
