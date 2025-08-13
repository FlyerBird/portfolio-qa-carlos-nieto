'use client'
import { motion } from 'framer-motion'

type AboutSectionProps = {
	translations: {
		aboutTitle: string
		aboutText: string
	}
}

const AboutSection = ({ translations: t }: AboutSectionProps) => {
	return (
		<section id="about" className="py-20 bg-black/10">
			<div className="container mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl font-bold text-center mb-8"
				>
					{t.aboutTitle}
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-lg text-center text-gray-300 max-w-2xl mx-auto"
				>
					{t.aboutText}
				</motion.p>
			</div>
		</section>
	)
}

export default AboutSection