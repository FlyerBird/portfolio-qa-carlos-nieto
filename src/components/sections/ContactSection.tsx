'use client'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

type Language = 'es' | 'ca' | 'en'

type ContactSectionProps = {
	language: Language
}

const ContactSection = ({ language }: ContactSectionProps) => {
	return (
		<section id="contact" className="py-16">
			<div className="container mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl font-bold text-center mb-12"
				>
					{language === 'es' && 'Contacto'}
					{language === 'ca' && 'Contacte'}
					{language === 'en' && 'Contact'}
				</motion.h2>

				<div className="max-w-2xl mx-auto text-center">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						className="text-lg text-gray-300 mb-8"
					>
						{language === 'es' && '¿Tienes un proyecto interesante? ¡Hablemos!'}
						{language === 'ca' && 'Tens un projecte interessant? Parlem!'}
						{language === 'en' && 'Have an interesting project? Let\'s talk!'}
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						className="flex flex-col sm:flex-row gap-4 justify-center"
					>
						<motion.a
							href="https://www.linkedin.com/in/carlos-nieto00/"
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
							className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2 border border-white/20"
						>
							<Linkedin size={20} /> LinkedIn
						</motion.a>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default ContactSection