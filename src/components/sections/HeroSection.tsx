'use client'
import { motion } from 'framer-motion'
import PhotoCard from '@/components/ui/PhotoCard'

type HeroSectionProps = {
	translations: {
		title: string
		subtitle: string
	}
}

const HeroSection = ({ translations: t }: HeroSectionProps) => {
	return (
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
						<motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
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

					<PhotoCard />
				</div>
			</div>
		</section>
	)
}

export default HeroSection