'use client'
import { motion } from 'framer-motion'

type SkillCardProps = {
	icon: string
	title: string
	skills: string[]
	bgGradient: string
	borderColor: string
	textColor: string
	delay: number
}

const SkillCard = ({ icon, title, skills, bgGradient, borderColor, textColor, delay }: SkillCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay }}
			viewport={{ once: true }}
			className={`${bgGradient} p-6 rounded-lg border ${borderColor}`}
		>
			<div className="text-3xl mb-4 text-center">{icon}</div>
			<h3 className={`text-xl font-bold mb-4 text-center ${textColor}`}>{title}</h3>
			<div className="space-y-2">
				{skills.map((skill, index) => (
					<motion.div
						key={skill}
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.1 }}
						viewport={{ once: true }}
						className={`${bgGradient.replace('to-', 'to-').replace('/10', '/20')} ${textColor.replace('400', '300')} px-3 py-1 rounded-full text-sm`}
					>
						{skill}
					</motion.div>
				))}
			</div>
		</motion.div>
	)
}

export default SkillCard