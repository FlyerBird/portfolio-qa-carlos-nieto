'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PhotoCard() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, delay: 0.3, ease: "backOut" }}
			className="flex-shrink-0"
		>
			<motion.div
				whileHover={{
					x: 8,
					scale: 1.02,
					filter: "brightness(1.1)",
				}}
				animate={{
					boxShadow: [
						"0 10px 30px rgba(0, 0, 0, 0.3)",
						"0 15px 40px rgba(59, 130, 246, 0.2)",
						"0 10px 30px rgba(0, 0, 0, 0.3)"
					]
				}}
				transition={{
					duration: 0.3,
					ease: "easeOut",
					boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
				}}
				className="relative group cursor-pointer"
			>
				<motion.div
					whileHover={{
						boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)"
					}}
					transition={{ duration: 0.3 }}
					className="overflow-hidden rounded-2xl border-2 border-white/20 group-hover:border-blue-400/40 transition-colors duration-300"
				>
					<Image
						src="/images/profile.jpg"
						alt="Carlos Nieto - QA Engineer"
						width={400}
						height={500}
						className="w-64 h-80 md:w-72 md:h-90 lg:w-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
						priority
					/>
				</motion.div>

				{/* Subtle glow overlay */}
				<motion.div
					initial={{ opacity: 0 }}
					whileHover={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
					className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"
				/>
			</motion.div>
		</motion.div>
	)
}