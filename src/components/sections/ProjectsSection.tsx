'use client'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import Image from 'next/image'

type Language = 'es' | 'ca' | 'en'

type ProjectsSectionProps = {
	language: Language
}

const ProjectsSection = ({ language }: ProjectsSectionProps) => {
	return (
		<section id="projects" className="py-16 bg-black/20">
			<div className="container mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-4xl font-bold text-center mb-12"
				>
					{language === 'es' && 'Proyectos & Código'}
					{language === 'ca' && 'Projectes & Codi'}
					{language === 'en' && 'Projects & Code'}
				</motion.h2>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{/* GitHub Profile Card - Animated */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.02, y: -5 }}
						className="bg-white/5 backdrop-blur rounded-lg p-6 border border-white/10 cursor-pointer"
					>
						<div className="text-3xl mb-4">💻</div>
						<h3 className="text-xl font-bold mb-2">GitHub Profile</h3>
						<p className="text-gray-300 text-sm mb-6">
							{language === 'es' && 'Explora mi código, contribuciones y proyectos de automatización'}
							{language === 'ca' && 'Explora el meu codi, contribucions i projectes d\'automatització'}
							{language === 'en' && 'Explore my code, contributions and automation projects'}
						</p>

						<a
							href="https://github.com/FlyerBird"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2 border border-white/20"
						>
							<Github size={16} />
							{language === 'es' && 'Ver GitHub'}
							{language === 'ca' && 'Veure GitHub'}
							{language === 'en' && 'View GitHub'}
						</a>
					</motion.div>

					{/* Créixer Project Card - Animated */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.02, y: -5 }}
						className="bg-white/5 backdrop-blur rounded-lg p-6 border border-white/10 cursor-pointer"
					>
						<div className="mb-4">
							<Image
								src="/logos/creixer-logo-blanco.png"
								alt="Créixer Logo"
								width={180}
								height={60}
								className="object-contain"
							/>
						</div>
						<p className="text-gray-300 text-sm mb-6">
							{language === 'es' && 'Rediseño web responsive con optimización de performance y UX/UI'}
							{language === 'ca' && 'Redisseny web responsive amb optimització de rendiment i UX/UI'}
							{language === 'en' && 'Responsive web redesign with performance and UX/UI optimization'}
						</p>

						<a
							href={`/projects/creixer?lang=${language}`}
							className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2 border border-white/20"
						>
							{language === 'es' && 'Ver Proyecto →'}
							{language === 'ca' && 'Veure Projecte →'}
							{language === 'en' && 'View Project →'}
						</a>
					</motion.div>
				</div>
			</div>
		</section >
	)
}

export default ProjectsSection