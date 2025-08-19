'use client'
import { useState } from 'react'

type Language = 'es' | 'ca' | 'en'

type NavbarProps = {
	language: Language
	setLanguage: (lang: Language) => void
}

const navTranslations = {
	en: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
	es: { about: 'Sobre mí', skills: 'Habilidades', projects: 'Proyectos', contact: 'Contacto' },
	ca: { about: 'Sobre mi', skills: 'Habilitats', projects: 'Projectes', contact: 'Contacte' }
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false)
	const t = navTranslations[language]

	return (
		<nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					{/* Logo/Name - Solo logo CN minimalista */}
					<a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:scale-110 transition-transform duration-300">
						<div className="w-10 h-10">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-full h-full">
								<defs>
									<linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
										<stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
										<stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
									</linearGradient>
								</defs>
								<rect width="32" height="32" fill="url(#bg)" rx="6" />
								<text x="16" y="22" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">CN</text>
								<circle cx="6" cy="6" r="1.5" fill="#60a5fa" opacity="0.8" />
								<circle cx="26" cy="26" r="1.5" fill="#34d399" opacity="0.8" />
							</svg>
						</div>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-6">
						<a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-blue-400 transition-colors">{t.about}</a>
						<a href="#skills" className="hover:text-blue-400 transition-colors">{t.skills}</a>
						<a href="#projects" className="hover:text-blue-400 transition-colors">{t.projects}</a>
						<a href="#contact" className="hover:text-blue-400 transition-colors">{t.contact}</a>
					</div>

					{/* Desktop Language Selector */}
					<div className="hidden md:block">
						<select
							value={language}
							onChange={(e) => setLanguage(e.target.value as Language)}
							className="bg-white/10 border border-white/20 rounded px-3 py-1 text-white backdrop-blur"
						>
							<option value="en" className="text-black">English</option>
							<option value="es" className="text-black">Español</option>
							<option value="ca" className="text-black">Català</option>
						</select>
					</div>

					{/* Mobile menu button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2"
					>
						<div className="w-6 h-6 flex flex-col justify-center space-y-1">
							<span className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
							<span className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
							<span className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
						</div>
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden mt-4 pb-4 border-t border-white/10 relative z-[60]">
						<div className="flex flex-col space-y-2 pt-4">
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
									window.scrollTo({ top: 0, behavior: 'smooth' });
									setIsOpen(false);
								}}
								className="block w-full text-right py-3 px-4 rounded-lg transition-all duration-200 active:bg-white/20 focus:bg-white/10 active:scale-95"
							>
								{t.about}
							</a>
							<a
								href="#skills"
								onClick={() => setIsOpen(false)}
								className="block w-full text-right py-3 px-4 rounded-lg transition-all duration-200 active:bg-white/20 focus:bg-white/10 active:scale-95"
							>
								{t.skills}
							</a>
							<a
								href="#projects"
								onClick={() => setIsOpen(false)}
								className="block w-full text-right py-3 px-4 rounded-lg transition-all duration-200 active:bg-white/20 focus:bg-white/10 active:scale-95"
							>
								{t.projects}
							</a>
							<a
								href="#contact"
								onClick={() => setIsOpen(false)}
								className="block w-full text-right py-3 px-4 rounded-lg transition-all duration-200 active:bg-white/20 focus:bg-white/10 active:scale-95"
							>
								{t.contact}
							</a>

							{/* Mobile Language Selector */}
							<div className="pt-2 flex justify-end gap-2">
								<button
									onClick={() => {
										setLanguage('en')
										setIsOpen(false)
									}}
									className={`px-3 py-2 rounded-lg text-sm transition-all ${language === 'en'
										? 'bg-blue-500/30 text-blue-300 border border-blue-400/50'
										: 'bg-white/10 text-gray-300 border border-white/20'
										}`}
								>
									EN
								</button>
								<button
									onClick={() => {
										setLanguage('es')
										setIsOpen(false)
									}}
									className={`px-3 py-2 rounded-lg text-sm transition-all ${language === 'es'
										? 'bg-blue-500/30 text-blue-300 border border-blue-400/50'
										: 'bg-white/10 text-gray-300 border border-white/20'
										}`}
								>
									🇪ES
								</button>
								<button
									onClick={() => {
										setLanguage('ca')
										setIsOpen(false)
									}}
									className={`px-3 py-2 rounded-lg text-sm transition-all ${language === 'ca'
										? 'bg-blue-500/30 text-blue-300 border border-blue-400/50'
										: 'bg-white/10 text-gray-300 border border-white/20'
										}`}
								>
									CA
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}