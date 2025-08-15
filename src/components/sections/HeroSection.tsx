'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

type HeroSectionProps = {
	translations: {
		title: string
		subtitle: string
		aboutTitle: string
		aboutText: string
	}
	language: string
}

// Floating particles component
const FloatingParticle = ({ delay, duration, initialX, initialY }: {
	delay: number;
	duration: number;
	initialX: number;
	initialY: number;
}) => {
	return (
		<motion.div
			className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
			initial={{
				x: initialX,
				y: initialY,
				opacity: 0
			}}
			animate={{
				x: initialX + 100,
				y: initialY + 50,
				opacity: [0, 1, 0]
			}}
			transition={{
				duration,
				delay,
				repeat: Infinity,
				ease: "linear"
			}}
		/>
	)
}

const HeroSection = ({ translations: t, language }: HeroSectionProps) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

	// Scroll progress for the entire hero section
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"]
	})

	// Smooth spring animations
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001
	})

	// Text transforms based on scroll
	const textX = useTransform(smoothProgress, [0, 1], ["0%", "-50%"])
	const textScale = useTransform(smoothProgress, [0, 0.5], [1, 0.8])
	const textOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0])

	// Image transforms
	const imageX = useTransform(smoothProgress, [0, 1], ["100%", "0%"])
	const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 1.1])
	const imageRotateY = useTransform(smoothProgress, [0, 1], [25, 0])

	// Background transforms
	const backgroundScale = useTransform(smoothProgress, [0, 1], [1, 1.2])
	const gradientOpacity = useTransform(smoothProgress, [0, 0.5], [0.3, 0.8])

	// Mouse tracking for magnetic effect
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({
				x: (e.clientX - window.innerWidth / 2) / 50,
				y: (e.clientY - window.innerHeight / 2) / 50
			})
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => window.removeEventListener('mousemove', handleMouseMove)
	}, [])

	// Character animation variants
	const letterVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			rotateX: -90
		},
		visible: {
			opacity: 1,
			y: 0,
			rotateX: 0
		}
	}

	return (
		<section
			ref={containerRef}
			className="relative min-h-[200vh] overflow-hidden"
		>
			{/* Animated background */}
			<motion.div
				className="fixed inset-0 -z-10"
				style={{ scale: backgroundScale }}
			>
				<motion.div
					className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"
					style={{ opacity: gradientOpacity }}
				/>

				{/* Animated gradient overlay */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/20"
					animate={{
						background: [
							"linear-gradient(45deg, rgba(6,182,212,0.2), rgba(59,130,246,0.1), rgba(168,85,247,0.2))",
							"linear-gradient(225deg, rgba(168,85,247,0.2), rgba(6,182,212,0.1), rgba(59,130,246,0.2))",
							"linear-gradient(45deg, rgba(6,182,212,0.2), rgba(59,130,246,0.1), rgba(168,85,247,0.2))"
						]
					}}
					transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
				/>

				{/* Floating particles */}
				{[...Array(20)].map((_, i) => (
					<FloatingParticle
						key={i}
						delay={i * 0.5}
						duration={10 + i % 5}
						initialX={50 + (i * 60) % 1000}
						initialY={50 + (i * 40) % 600}
					/>
				))}
			</motion.div>

			{/* Main content container */}
			<div className="relative z-10">
				{/* Initial centered content */}
				<motion.div
					className="sticky top-0 h-screen flex items-center justify-center"
					style={{
						x: textX,
						scale: textScale,
						opacity: textOpacity
					}}
				>
					<div className="text-center max-w-4xl mx-auto px-4">
						{/* Animated title */}
						<motion.h1
							className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
							style={{
								x: mousePosition.x,
								y: mousePosition.y
							}}
						>
							{t.title.split('').map((char, i) => (
								<motion.span
									key={i}
									variants={letterVariants}
									initial="hidden"
									animate="visible"
									transition={{
										delay: 0.03 * i,
										duration: 0.8,
										ease: [0.2, 0.65, 0.3, 0.9]
									}}
									className="inline-block"
									whileHover={{
										scale: 1.2,
										color: "#60A5FA",
										transition: { duration: 0.2 }
									}}
								>
									{char === ' ' ? '\u00A0' : char}
								</motion.span>
							))}
						</motion.h1>

						{/* Animated subtitle */}
						<motion.p
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.8 }}
							className="text-xl md:text-2xl text-gray-300 mb-8"
							style={{
								x: mousePosition.x * 0.5,
								y: mousePosition.y * 0.5
							}}
						>
							{t.subtitle}
						</motion.p>

						{/* Scroll indicator */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.5, duration: 0.8 }}
							className="flex flex-col items-center"
						>
							<motion.div
								animate={{ y: [0, 10, 0] }}
								transition={{ duration: 2, repeat: Infinity }}
								className="text-blue-400"
							>
								↓
							</motion.div>
							<span className="text-sm text-gray-400 mt-2">
								{language === 'es' && 'Desplázate para descubrir'}
								{language === 'ca' && 'Desplaça per descobrir'}
								{language === 'en' && 'Scroll to discover'}
							</span>
						</motion.div>
					</div>
				</motion.div>

				{/* Second section - Split layout */}
				<div className="relative h-screen flex items-center">
					<div className="container mx-auto px-4">
						<div className="grid md:grid-cols-2 gap-12 items-center">
							{/* Left side - About text */}
							<motion.div
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 1, ease: "easeOut" }}
								viewport={{ once: true }}
								className="space-y-6"
							>
								<motion.h2
									className="text-4xl md:text-5xl font-bold"
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.2 }}
									viewport={{ once: true }}
								>
									<span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
										{t.aboutTitle}
									</span>
								</motion.h2>

								<motion.p
									className="text-lg md:text-xl text-gray-300 leading-relaxed"
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.8, delay: 0.4 }}
									viewport={{ once: true }}
								>
									{t.aboutText}
								</motion.p>
							</motion.div>

							{/* Right side - Image */}
							<motion.div
								style={{
									x: imageX,
									scale: imageScale,
									rotateY: imageRotateY
								}}
								className="relative"
							>
								<motion.div
									initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
									whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
									transition={{ duration: 1.2, ease: "easeOut" }}
									viewport={{ once: true }}
									className="relative group cursor-pointer"
									whileHover={{
										scale: 1.05,
										rotateY: 5,
										transition: { duration: 0.3 }
									}}
								>
									{/* Glowing border effect */}
									<motion.div
										className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-75"
										animate={{
											rotate: [0, 360]
										}}
										transition={{
											duration: 8,
											repeat: Infinity,
											ease: "linear"
										}}
									/>

									{/* Image container */}
									<div className="relative bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-1 border border-white/20">
										<Image
											src="/images/profile.jpg"
											alt="Carlos Nieto - QA Engineer"
											width={400}
											height={500}
											className="w-full h-auto object-cover rounded-xl"
											priority
										/>

										{/* Floating elements around image */}
										<motion.div
											className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/20 rounded-full"
											animate={{
												y: [0, -20, 0],
												opacity: [0.5, 1, 0.5]
											}}
											transition={{
												duration: 3,
												repeat: Infinity,
												ease: "easeInOut"
											}}
										/>
										<motion.div
											className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/20 rounded-full"
											animate={{
												y: [0, 20, 0],
												opacity: [0.5, 1, 0.5]
											}}
											transition={{
												duration: 4,
												repeat: Infinity,
												ease: "easeInOut",
												delay: 1
											}}
										/>
									</div>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection