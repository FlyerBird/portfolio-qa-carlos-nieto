'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Language = 'es' | 'ca' | 'en'

type SkillsSectionProps = {
	language: Language
}

type Tool = {
	name: string
	logo?: string
	url?: string
}

type TestingSubsection = {
	title: {
		es: string
		ca: string
		en: string
	}
	tools: Tool[]
}

type SkillCategory = {
	icon: string
	title: {
		es: string
		ca: string
		en: string
	}
	tools?: Tool[]
	testingSubsections?: TestingSubsection[]
	bgGradient: string
	borderColor: string
	textColor: string
	delay: number
	isTestingCard?: boolean
}

const SkillsSection = ({ language }: SkillsSectionProps) => {
	const skillsData: SkillCategory[] = [
		{
			icon: '🧪',
			title: {
				es: 'Testing',
				ca: 'Testing',
				en: 'Testing'
			},
			testingSubsections: [
				{
					title: {
						es: 'Automatización',
						ca: 'Automatització',
						en: 'Automation'
					},
					tools: [
						{
							name: 'Playwright',
							logo: 'https://playwright.dev/img/playwright-logo.svg',
							url: 'https://playwright.dev/'
						}
					]
				},
				{
					title: {
						es: 'Performance',
						ca: 'Rendiment',
						en: 'Performance'
					},
					tools: [
						{
							name: 'Lighthouse',
							logo: 'https://developers.google.com/web/tools/lighthouse/images/lighthouse-logo.svg',
							url: 'https://developers.google.com/web/tools/lighthouse'
						},
						{
							name: 'k6',
							logo: '/logos/k6-logo.png',
							url: 'https://k6.io/'
						}
					]
				},
				{
					title: {
						es: 'API',
						ca: 'API',
						en: 'API'
					},
					tools: [
						{
							name: 'Postman',
							logo: '/logos/postman.png',
							url: 'https://postman.com/'
						},
						{
							name: 'Curl',
							logo: '/logos/curl.png',
							url: 'https://curl.se/'
						}
					]
				}
			],
			bgGradient: 'bg-gradient-to-br from-green-500/10 to-emerald-600/10',
			borderColor: 'border-green-500/20',
			textColor: 'text-green-400',
			delay: 0.1,
			isTestingCard: true
		},
		{
			icon: '💻',
			title: {
				es: 'Desarrollo',
				ca: 'Desenvolupament',
				en: 'Development'
			},
			tools: [
				{
					name: 'React',
					logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
					url: 'https://react.dev/'
				},
				{
					name: 'Next.js',
					logo: 'https://cdn.worldvectorlogo.com/logos/nextjs-2.svg',
					url: 'https://nextjs.org/'
				},
				{
					name: 'TypeScript',
					logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
					url: 'https://typescriptlang.org/'
				},
				{
					name: 'JavaScript',
					logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
					url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
				},
				{
					name: 'Node.js',
					logo: 'https://nodejs.org/static/images/logo.svg',
					url: 'https://nodejs.org/'
				},
				{
					name: 'Tailwind CSS',
					logo: 'https://tailwindcss.com/favicons/favicon-32x32.png',
					url: 'https://tailwindcss.com/'
				},
				{
					name: 'HTML5',
					logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
					url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
				},
				{
					name: 'MongoDB',
					logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
					url: 'https://mongodb.com/'
				},
				{
					name: 'Git',
					logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
					url: 'https://git-scm.com/'
				},
				{
					name: 'Docker',
					logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
					url: 'https://docker.com/'
				}
			],
			bgGradient: 'bg-gradient-to-br from-purple-500/10 to-pink-600/10',
			borderColor: 'border-purple-500/20',
			textColor: 'text-purple-400',
			delay: 0.2
		},
		{
			icon: '🏃‍♂️',
			title: {
				es: 'Agile & Metodologías',
				ca: 'Agile & Metodologies',
				en: 'Agile & Methodologies'
			},
			tools: [
				{
					name: 'Scrum',
					url: 'https://scrum.org/'
				},
				{
					name: 'Jira',
					logo: 'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
					url: 'https://atlassian.com/software/jira'
				},
				{
					name: 'CI/CD Pipelines',
					logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
					url: 'https://github.com/features/actions'
				},
				{
					name: 'DataDog',
					logo: 'https://cdn.worldvectorlogo.com/logos/datadog.svg',
					url: 'https://datadoghq.com/'
				}
			],
			bgGradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-600/10',
			borderColor: 'border-blue-500/20',
			textColor: 'text-blue-400',
			delay: 0.3
		},
		{
			icon: '🧠',
			title: {
				es: 'Habilidades Blandas',
				ca: 'Habilitats Toves',
				en: 'Soft Skills'
			},
			tools: [
				{
					name: language === 'es' ? '🧠 Aprendizaje Rápido' :
						language === 'ca' ? '🧠 Aprenentatge Ràpid' :
							'🧠 Quick Learner'
				},
				{
					name: language === 'es' ? '🤝 Trabajo en Equipo' :
						language === 'ca' ? '🤝 Treball en Equip' :
							'🤝 Team Player'
				},
				{
					name: language === 'es' ? '🎯 Resolución de Problemas' :
						language === 'ca' ? '🎯 Resolució de Problemes' :
							'🎯 Problem Solving'
				},
				{
					name: language === 'es' ? '💬 Buena Comunicación' :
						language === 'ca' ? '💬 Bona Comunicació' :
							'💬 Good Communication'
				},
				{
					name: language === 'es' ? '🔄 Adaptabilidad' :
						language === 'ca' ? '🔄 Adaptabilitat' :
							'🔄 Adaptability'
				},
				{
					name: language === 'es' ? '🚀 Emprendedor' :
						language === 'ca' ? '🚀 Emprenedor' :
							'🚀 Entrepreneurial'
				}
			],
			bgGradient: 'bg-gradient-to-br from-indigo-500/10 to-purple-600/10',
			borderColor: 'border-indigo-500/20',
			textColor: 'text-indigo-400',
			delay: 0.4
		},
		{
			icon: '🚀',
			title: {
				es: 'Innovación & IA',
				ca: 'Innovació & IA',
				en: 'Innovation & AI'
			},
			tools: [
				{
					name: 'MCP Development',
					logo: '/logos/claude.png',
					url: 'https://docs.anthropic.com/en/docs/build-with-claude/mcp'
				},
				{
					name: 'AI-powered Testing',
					logo: '/logos/ai-sparkle.png',
				},
				{
					name: 'Figma',
					logo: 'https://www.svgrepo.com/show/452202/figma.svg',
					url: 'https://figma.com/'
				},
				{
					name: 'Miro',
					logo: 'https://cdn.worldvectorlogo.com/logos/miro-2.svg',
					url: 'https://miro.com/'
				}
			],
			bgGradient: 'bg-gradient-to-br from-orange-500/10 to-red-600/10',
			borderColor: 'border-orange-500/20',
			textColor: 'text-orange-400',
			delay: 0.5
		}
	]

	return (
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

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{skillsData.map((skillGroup, index) => (
						<SkillCard key={index} {...skillGroup} language={language} />
					))}
				</div>
			</div>
		</section>
	)
}

type SkillCardProps = SkillCategory & {
	language: Language
}

const SkillCard = ({ icon, title, tools, testingSubsections, bgGradient, borderColor, textColor, delay, language, isTestingCard }: SkillCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay }}
			viewport={{ once: true }}
			className={`${bgGradient} p-6 rounded-lg border ${borderColor} hover:border-opacity-40 transition-all duration-300 ${isTestingCard ? 'lg:col-span-2' : ''}`}
		>
			<div className="text-3xl mb-4 text-center">{icon}</div>
			<h3 className={`text-xl font-bold mb-6 text-center ${textColor}`}>
				{title[language]}
			</h3>

			{isTestingCard && testingSubsections ? (
				<div className="space-y-6">
					{testingSubsections.map((subsection, subIndex) => (
						<div key={subIndex} className="space-y-3">
							<h4 className={`text-sm font-semibold ${textColor.replace('400', '300')} flex items-center gap-2`}>
								<span className="text-base">
									{subsection.title.en === 'Automation' && '⚡'}
									{subsection.title.en === 'Performance' && '📊'}
									{subsection.title.en === 'API' && '🔌'}
								</span>
								{subsection.title[language]}
							</h4>
							<div className={`grid gap-3 ${subsection.title.en === 'API' || subsection.title.en === 'Performance' ? 'grid-cols-2' : 'grid-cols-1'}`}>
								{subsection.tools.map((tool, toolIndex) => (
									<ToolItem
										key={`${subIndex}-${toolIndex}`}
										tool={tool}
										bgGradient={bgGradient}
										borderColor={borderColor}
										textColor={textColor}
										delay={delay + 0.1 + subIndex * 0.1 + toolIndex * 0.05}
									/>
								))}
							</div>
						</div>
					))}
				</div>
			) : (
				<div className={title.en === 'Soft Skills' ? 'space-y-4 text-center' : 'grid grid-cols-2 gap-4'}>
					{tools?.map((tool, index) => (
						title.en === 'Soft Skills' ? (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.1 }}
								viewport={{ once: true }}
								className={`${textColor.replace('400', '300')} text-sm font-medium py-1`}
							>
								{tool.name}
							</motion.div>
						) : (
							<ToolItem
								key={index}
								tool={tool}
								bgGradient={bgGradient}
								borderColor={borderColor}
								textColor={textColor}
								delay={delay + 0.1 + index * 0.1}
							/>
						)
					))}
				</div>
			)}
		</motion.div>
	)
}

type ToolItemProps = {
	tool: Tool
	bgGradient: string
	borderColor: string
	textColor: string
	delay: number
}

const ToolItem = ({ tool, bgGradient, borderColor, textColor, delay }: ToolItemProps) => {
	const Component = tool.url ? motion.a : motion.div
	const componentProps = tool.url ? {
		href: tool.url,
		target: "_blank",
		rel: "noopener noreferrer"
	} : {}

	return (
		<Component
			{...componentProps}
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.4, delay }}
			viewport={{ once: true }}
			whileHover={tool.url ? { scale: 1.05, y: -2 } : {}}
			whileTap={tool.url ? { scale: 0.95 } : {}}
			className={`${bgGradient.replace('/10', '/20')} ${borderColor} border rounded-lg p-3 flex flex-col items-center justify-center min-h-[80px] hover:border-opacity-60 transition-all duration-300 ${tool.url ? 'cursor-pointer' : ''} group`}
		>
			{tool.logo ? (
				<>
					<div className="w-8 h-8 mb-2 relative flex items-center justify-center">
						<Image
							src={tool.logo}
							alt={`${tool.name} logo`}
							width={32}
							height={32}
							className="object-contain group-hover:scale-110 transition-transform duration-300"
							onError={(e) => {
								e.currentTarget.style.display = 'none'
							}}
						/>
					</div>
					<span className={`${textColor.replace('400', '300')} text-xs text-center font-medium group-hover:${textColor} transition-colors duration-300`}>
						{tool.name}
					</span>
				</>
			) : (
				<span className={`${textColor.replace('400', '300')} text-sm text-center font-medium group-hover:${textColor} transition-colors duration-300`}>
					{tool.name}
				</span>
			)}
		</Component>
	)
}

export default SkillsSection