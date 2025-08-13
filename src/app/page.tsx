'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ContactSection from '@/components/sections/ContactSection'

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
	const t = translations[language]

	return (
		<main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
			<Navbar language={language} setLanguage={setLanguage} />
			<HeroSection translations={t} />
			<AboutSection translations={t} />
			<SkillsSection language={language} />
			<ProjectsSection language={language} />
			<ContactSection language={language} />
		</main>
	)
}