import { Suspense } from 'react'
import CreixerProjectContent from './CreixerProjectContent'

export default function CreixerProject() {
	return (
		<Suspense fallback={
			<div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white flex items-center justify-center">
				<div className="text-xl">Loading...</div>
			</div>
		}>
			<CreixerProjectContent />
		</Suspense>
	)
}