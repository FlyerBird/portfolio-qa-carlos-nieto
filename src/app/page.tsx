'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Github } from 'lucide-react'
import Navbar from '@/components/Navbar'

type Language = 'es' | 'ca' | 'en'

const translations = {
	en: {
		title: 'Carlos Nieto',
		subtitle: 'QA Engineer who loves Automation, UX UI & AI',
		aboutTitle: 'About me',
		aboutText: 'I\'m a QA Engineer passionate about automation and artificial intelligence. I love creating innovative solutions to improve software quality.'
	},
	es: {
		title: 'Carlos Nieto',
		subtitle: 'QA Engineer al que le encanta la Automatización, la Experiencia de Usuario y la IA',
		aboutTitle: 'Sobre mí',
		aboutText: 'Soy un QA Engineer apasionado por la automatización y la inteligencia artificial. Me encanta crear soluciones innovadoras para mejorar la calidad del software.'
	},
	ca: {
		title: 'Carlos Nieto',
		subtitle: 'QA Engineer apassionat per l\'Automatització, la Experiència d\'Usuari i la IA',
		aboutTitle: 'Sobre mi',
		aboutText: 'Sóc un QA Engineer apassionat per l\'automatització i la intel·ligència artificial. M\'encanta crear solucions innovadores per millorar la qualitat del programari.'
	}
}

export default function Home() {
	const [language, setLanguage] = useState<Language>('en')
	const [showSecondPhoto, setShowSecondPhoto] = useState(false)
	const t = translations[language]

	return (
		<main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
			<Navbar language={language} setLanguage={setLanguage} />

			{/* Hero Section - Animated */}
			<section id="home" className="pt-20 pb-20">
				<div className="container mx-auto px-4 py-16">
					<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
						{/* Texto animado */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
							className="text-center md:text-left"
						>
							<motion.h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
								{t.title.split('').map((char, index) => (
									<motion.span
										key={index}
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.5,
											delay: 0.2 + index * 0.05,
											ease: "easeOut"
										}}
										className="inline-block"
										style={{
											fontFamily: 'var(--font-jetbrains-mono)',
											fontWeight: 'bold'
										}}
									>
										{char === ' ' ? '\u00A0' : char}
									</motion.span>
								))}
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
								className="text-xl text-gray-300"
							>
								{t.subtitle}
							</motion.p>
						</motion.div>

						{/* Foto animada con flip mágico */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
							className="flex-shrink-0 relative cursor-pointer"
							onMouseEnter={() => setShowSecondPhoto(true)}
							onMouseLeave={() => setShowSecondPhoto(false)}
							onClick={() => setShowSecondPhoto(!showSecondPhoto)}
						>
							{/* Contenedor de flip 3D */}
							<motion.div
								className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
								style={{ perspective: 1000 }}
							>
								{/* Foto principal */}
								<motion.div
									className="absolute inset-0"
									animate={{
										rotateY: showSecondPhoto ? 180 : 0,
										opacity: showSecondPhoto ? 0 : 1
									}}
									transition={{ duration: 0.6, ease: "easeInOut" }}
									style={{ backfaceVisibility: 'hidden' }}
								>
									<Image
										src="/images/profile.jpg"
										alt="Carlos Nieto - QA Engineer"
										width={400}
										height={400}
										className="rounded-full border-4 border-white/20 shadow-2xl w-full h-full object-cover"
										priority
									/>
								</motion.div>

								{/* Foto secundaria */}
								<motion.div
									className="absolute inset-0"
									animate={{
										rotateY: showSecondPhoto ? 0 : -180,
										opacity: showSecondPhoto ? 1 : 0
									}}
									transition={{ duration: 0.6, ease: "easeInOut" }}
									style={{ backfaceVisibility: 'hidden' }}
								>
									<Image
										src="/images/profile-2.jpg"
										alt="Carlos Nieto - Alternative Photo"
										width={400}
										height={400}
										className="rounded-full border-4 border-blue-400/40 shadow-2xl w-full h-full object-cover"
									/>
								</motion.div>

							</motion.div>

							{/* Indicador sutil para mobile */}
							<motion.div
								className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 md:hidden"
								animate={{ opacity: [0.5, 1, 0.5] }}
								transition={{ duration: 2, repeat: Infinity }}
							>
								<span className="text-xs text-blue-400">✨ Tap me</span>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* About Section - Animated */}
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

			{/* Skills Section - Animated */}
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
						{/* Testing & QA */}
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.1 }}
							viewport={{ once: true }}
							className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-6 rounded-lg border border-green-500/20"
						>
							<div className="text-3xl mb-4 text-center">🧪</div>
							<h3 className="text-xl font-bold mb-4 text-center text-green-400">Testing & QA</h3>
							<div className="space-y-2">
								{['Playwright', 'Postman', 'Testmo', 'Browser Stack', 'Regression Testing', 'Integration Testing', 'Functional Testing', 'A/B Testing'].map((skill, index) => (
									<motion.div
										key={skill}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
										viewport={{ once: true }}
										className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"
									>
										{skill}
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Automation & CI/CD */}
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							viewport={{ once: true }}
							className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20"
						>
							<div className="text-3xl mb-4 text-center">⚡</div>
							<h3 className="text-xl font-bold mb-4 text-center text-blue-400">Automation & CI/CD</h3>
							<div className="space-y-2">
								{['Playwright', 'Git', 'CI/CD Pipelines', 'DataDog', 'Jira', 'Amadeus', 'Agile'].map((skill, index) => (
									<motion.div
										key={skill}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
										viewport={{ once: true }}
										className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
									>
										{skill}
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Development */}
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}
							className="bg-gradient-to-br from-purple-500/10 to-pink-600/10 p-6 rounded-lg border border-purple-500/20"
						>
							<div className="text-3xl mb-4 text-center">💻</div>
							<h3 className="text-xl font-bold mb-4 text-center text-purple-400">Development</h3>
							<div className="space-y-2">
								{['React', 'Next.js', 'TypeScript', 'JavaScript ES6', 'Tailwind CSS', 'HTML5', 'Node.js', 'MongoDB', 'Figma', 'AEM'].map((skill, index) => (
									<motion.div
										key={skill}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
										viewport={{ once: true }}
										className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
									>
										{skill}
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Innovation & Soft Skills */}
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							viewport={{ once: true }}
							className="bg-gradient-to-br from-orange-500/10 to-red-600/10 p-6 rounded-lg border border-orange-500/20"
						>
							<div className="text-3xl mb-4 text-center">🚀</div>
							<h3 className="text-xl font-bold mb-4 text-center text-orange-400">Innovation & Mindset</h3>
							<div className="space-y-2">
								{['MCP Development', 'AI-powered Testing', 'Team Player', 'Quick Learner', 'Entrepreneurial', 'Good Communication', 'Miro'].map((skill, index) => (
									<motion.div
										key={skill}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
										viewport={{ once: true }}
										className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm"
									>
										{skill}
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Projects Section - Animated */}
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

			{/* Contact Section - Animated */}
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
		</main>
	)
}