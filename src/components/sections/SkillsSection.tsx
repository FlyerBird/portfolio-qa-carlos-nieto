'use client'
import { motion } from 'framer-motion'
import SkillCard from '@/components/ui/SkillCard'

type Language = 'es' | 'ca' | 'en'

type SkillsSectionProps = {
	language: Language
}

const SkillsSection = ({ language }: SkillsSectionProps) => {
	const skillsData = [
		{
			icon: '🧪',
			title: 'Testing & QA',
			skills: ['Playwright', 'Postman', 'Testmo', 'Browser Stack', 'Regression Testing', 'Integration Testing', 'Functional Testing', 'A/B Testing'],
			bgGradient: 'bg-gradient-to-br from-green-500/10 to-emerald-600/10',
			borderColor: 'border-green-500/20',
			textColor: 'text-green-400',
			delay: 0.1
		},
		{
			icon: '⚡',
			title: 'Automation & CI/CD',
			skills: ['Playwright', 'Git', 'CI/CD Pipelines', 'DataDog', 'Jira', 'Amadeus', 'Agile'],
			bgGradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-600/10',
			borderColor: 'border-blue-500/20',
			textColor: 'text-blue-400',
			delay: 0.2
		},
		{
			icon: '💻',
			title: 'Development',
			skills: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6', 'Tailwind CSS', 'HTML5', 'Node.js', 'MongoDB', 'Figma', 'AEM'],
			bgGradient: 'bg-gradient-to-br from-purple-500/10 to-pink-600/10',
			borderColor: 'border-purple-500/20',
			textColor: 'text-purple-400',
			delay: 0.3
		},
		{
			icon: '🚀',
			title: 'Innovation & Mindset',
			skills: ['MCP Development', 'AI-powered Testing', 'Team Player', 'Quick Learner', 'Entrepreneurial', 'Good Communication', 'Miro'],
			bgGradient: 'bg-gradient-to-br from-orange-500/10 to-red-600/10',
			borderColor: 'border-orange-500/20',
			textColor: 'text-orange-400',
			delay: 0.4
		}
	]

	return (
		<section id="skills" className="py-20">
			<div className="container mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl font-bold text-center mb-16"
				>
					{language === 'es' && 'Habilidades & Tecnologías'}
					{language === 'ca' && 'Habilitats & Tecnologies'}
					{language === 'en' && 'Skills & Technologies'}
				</motion.h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{skillsData.map((skillGroup, index) => (
						<SkillCard key={index} {...skillGroup} />
					))}
				</div>
			</div>
		</section>
	)
}

export default SkillsSection