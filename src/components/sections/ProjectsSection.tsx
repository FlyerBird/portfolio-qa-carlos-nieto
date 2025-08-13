'use client'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

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

					{/* Work in Progress Card - Animated */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
						whileHover={{ scale: 1.02, y: -5 }}
						className="bg-white/5 backdrop-blur rounded-lg p-6 border border-white/10 relative overflow-hidden cursor-pointer"
					>
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
						<div className="relative">
							<div className="text-3xl mb-4 opacity-50">🚧</div>
							<h3 className="text-xl font-bold mb-2 opacity-75">
								{language === 'es' && 'Más proyectos próximamente'}
								{language === 'ca' && 'Més projectes aviat'}
								{language === 'en' && 'More projects coming soon'}
							</h3>
							<p className="text-gray-400 text-sm mb-4">
								{language === 'es' && 'Trabajando en nuevos experimentos con IA y automatización'}
								{language === 'ca' && 'Treballant en nous experiments amb IA i automatització'}
								{language === 'en' && 'Working on new experiments with AI and automation'}
							</p>
							<div className="inline-block bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded text-xs">
								Work in Progress
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default ProjectsSection