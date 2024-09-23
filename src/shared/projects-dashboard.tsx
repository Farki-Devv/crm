import { projects } from '@/constants'
import { ChevronRight } from 'lucide-react'
import ProjectCard from './project-card'

function ProjectsDashboard() {
	return (
		<div className='flex flex-col p-4 rounded-2xl gap-5'>
			<div className='flex justify-between'>
				<span className='font-semibold text-2xl'>Projects</span>
				<span className='text-blue-600 flex gap-1 items-center cursor-pointer'>
					View all <ChevronRight className='size-4' />
				</span>
			</div>
			<div className='grid grid-cols-1 gap-5'>
				{projects.map(item => (
					<ProjectCard key={item.title} {...item} />
				))}
			</div>
		</div>
	)
}

export default ProjectsDashboard
