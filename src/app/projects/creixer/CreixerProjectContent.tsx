'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

type Language = 'es' | 'ca' | 'en'

const translations = {
	es: {
		back: 'Volver a Proyectos',
		title: 'Rediseño Web & Optimización',
		subtitle: 'Mejora de UX/UI y Performance para Créixer Quiropràctic',
		challenge: 'El Reto',
		challengeText: 'Sitio web desactualizado con pobre experiencia en dispositivos móviles y métricas de rendimiento bajas. La web no reflejaba la calidad del servicio profesional de quiropráctica y dificultaba la conversión de visitantes.',
		solution: 'La Solución',
		solutionItems: [
			'Rediseño completo con enfoque mobile-first',
			'Optimización de velocidad de carga y performance',
			'Mejora de UX/UI para mayor conversión',
			'Implementación de mejores prácticas de accesibilidad y SEO'
		],
		results: 'Resultados - Antes vs Después',
		before: 'ANTES',
		after: 'DESPUÉS',
		impact: 'Impacto de Negocio',
		impactItems: [
			{
				title: 'Mayor Alcance Móvil',
				desc: 'Diseño 100% responsive optimizado para todos los dispositivos'
			},
			{
				title: 'Mejor Posicionamiento SEO',
				desc: 'Scores perfectos mejoran la visibilidad en buscadores'
			},
			{
				title: 'Mayor Conversión',
				desc: 'UX mejorada facilita que visitantes se conviertan en clientes'
			},
			{
				title: 'Imagen Profesional',
				desc: 'Diseño moderno que refleja la calidad del servicio'
			}
		],
		viewLive: 'Ver Web en Vivo'
	},
	ca: {
		back: 'Tornar a Projectes',
		title: 'Redisseny Web & Optimització',
		subtitle: 'Millora de UX/UI i Rendiment per Créixer Quiropràctic',
		challenge: 'El Repte',
		challengeText: 'Lloc web desactualitzat amb pobra experiència en dispositius mòbils i mètriques de rendiment baixes. La web no reflectia la qualitat del servei professional de quiropràctica i dificultava la conversió de visitants.',
		solution: 'La Solució',
		solutionItems: [
			'Redisseny complet amb enfocament mobile-first',
			'Optimització de velocitat de càrrega i rendiment',
			'Millora de UX/UI per major conversió',
			'Implementació de millors pràctiques d\'accessibilitat i SEO'
		],
		results: 'Resultats - Abans vs Després',
		before: 'ABANS',
		after: 'DESPRÉS',
		impact: 'Impacte de Negoci',
		impactItems: [
			{
				title: 'Major Abast Mòbil',
				desc: 'Disseny 100% responsive optimitzat per tots els dispositius'
			},
			{
				title: 'Millor Posicionament SEO',
				desc: 'Scores perfectes milloren la visibilitat en cercadors'
			},
			{
				title: 'Major Conversió',
				desc: 'UX millorada facilita que visitants es converteixin en clients'
			},
			{
				title: 'Imatge Professional',
				desc: 'Disseny modern que reflecteix la qualitat del servei'
			}
		],
		viewLive: 'Veure Web en Viu'
	},
	en: {
		back: 'Back to Projects',
		title: 'Web Redesign & Optimization',
		subtitle: 'UX/UI and Performance Improvement for Créixer Chiropractic',
		challenge: 'The Challenge',
		challengeText: 'Outdated website with poor mobile experience and low performance metrics. The website did not reflect the quality of professional chiropractic service and hindered visitor conversion.',
		solution: 'The Solution',
		solutionItems: [
			'Complete redesign with mobile-first approach',
			'Loading speed and performance optimization',
			'UX/UI improvement for higher conversion',
			'Implementation of accessibility and SEO best practices'
		],
		results: 'Results - Before vs After',
		before: 'BEFORE',
		after: 'AFTER',
		impact: 'Business Impact',
		impactItems: [
			{
				title: 'Greater Mobile Reach',
				desc: '100% responsive design optimized for all devices'
			},
			{
				title: 'Better SEO Positioning',
				desc: 'Perfect scores improve search engine visibility'
			},
			{
				title: 'Higher Conversion',
				desc: 'Improved UX helps visitors become clients'
			},
			{
				title: 'Professional Image',
				desc: 'Modern design reflecting service quality'
			}
		],
		viewLive: 'View Live Website'
	}
}

export default function CreixerProjectContent() {
	const searchParams = useSearchParams()
	const langParam = searchParams.get('lang') as Language | null
	const language: Language = langParam && ['es', 'ca', 'en'].includes(langParam) ? langParam : 'es'
	const t = translations[language]

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
			{/* Header con botón volver */}
			<div className="container mx-auto px-4 py-8">
				<Link
					href={`/?lang=${language}#projects`}
					className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
				>
					<ArrowLeft size={20} />
					<span>{t.back}</span>
				</Link>
			</div>

			{/* Contenido principal */}
			<div className="container mx-auto px-4 py-12 max-w-5xl">
				{/* Logo y título */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<div className="flex justify-center mb-6">
						<Image
							src="/logos/creixer-logo-blanco.png"
							alt="Créixer Logo"
							width={250}
							height={80}
							className="object-contain"
						/>
					</div>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">
						{t.title}
					</h1>
					<p className="text-xl text-gray-300">
						{t.subtitle}
					</p>
				</motion.div>

				{/* El Reto */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mb-16"
				>
					<h2 className="text-3xl font-bold mb-6 text-blue-400">📊 {t.challenge}</h2>
					<div className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10">
						<p className="text-lg text-gray-300 leading-relaxed">
							{t.challengeText}
						</p>
					</div>
				</motion.section>

				{/* La Solución */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mb-16"
				>
					<h2 className="text-3xl font-bold mb-6 text-green-400">🎯 {t.solution}</h2>
					<div className="bg-white/5 backdrop-blur rounded-xl p-8 border border-white/10">
						<ul className="space-y-4 text-lg text-gray-300">
							{t.solutionItems.map((item, index) => (
								<li key={index} className="flex items-start gap-3">
									<span className="text-2xl">✓</span>
									<span>{item}</span>
								</li>
							))}
						</ul>
					</div>
				</motion.section>

				{/* Resultados - Antes y Después */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mb-16"
				>
					<h2 className="text-3xl font-bold mb-8 text-purple-400">📈 {t.results}</h2>

					<div className="grid md:grid-cols-2 gap-8">
						{/* ANTES */}
						<div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
							<h3 className="text-xl font-bold mb-4 text-red-400">❌ {t.before}</h3>
							<div className="mb-4 rounded-lg overflow-hidden border border-white/20">
								<Image
									src="/images/old-creixer-web.png"
									alt="Créixer - Before redesign"
									width={600}
									height={400}
									className="w-full h-auto"
								/>
							</div>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-gray-400">Performance:</span>
									<span className="font-bold">97</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-400">Accessibility:</span>
									<span className="font-bold">87</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-400">Best Practices:</span>
									<span className="font-bold text-red-400">78</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-400">SEO:</span>
									<span className="font-bold">92</span>
								</div>
							</div>
						</div>

						{/* DESPUÉS */}
						<div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
							<h3 className="text-xl font-bold mb-4 text-green-400">✅ {t.after}</h3>
							<div className="mb-4 rounded-lg overflow-hidden border border-white/20">
								<Image
									src="/images/new-creixer-web.png"
									alt="Créixer - After redesign"
									width={600}
									height={400}
									className="w-full h-auto"
								/>
							</div>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-gray-400">Performance:</span>
									<span className="font-bold text-green-400">100 ✓</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-400">Accessibility:</span>
									<span className="font-bold text-green-400">90 ✓</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-400">Best Practices:</span>
									<span className="font-bold text-green-400">100 ✓</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-400">SEO:</span>
									<span className="font-bold text-green-400">100 ✓</span>
								</div>
							</div>
						</div>
					</div>
				</motion.section>

				{/* Impacto de Negocio */}
				<motion.section
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="mb-16"
				>
					<h2 className="text-3xl font-bold mb-6 text-yellow-400">💼 {t.impact}</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{t.impactItems.map((item, index) => (
							<div key={index} className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
								<div className="text-3xl mb-3">
									{index === 0 ? '📱' : index === 1 ? '🔍' : index === 2 ? '💰' : '🎨'}
								</div>
								<h3 className="text-lg font-bold mb-2">{item.title}</h3>
								<p className="text-gray-300">{item.desc}</p>
							</div>
						))}
					</div>
				</motion.section>

				{/* Link a la web */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="text-center"
				>
					<a
						href="https://www.creixerquiropractic.com/ca"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl transition-all transform hover:scale-105 font-bold text-lg"
					>
						<span>{t.viewLive}</span>
						<ExternalLink size={20} />
					</a>
				</motion.div>
			</div>
		</div >
	)
}