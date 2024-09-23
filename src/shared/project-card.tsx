import { Separator } from '@/components/ui/separator'
import { IProject } from '@/types'

function ProjectCard(item: IProject) {
	return (
		<div className='p-6 bg-white rounded-2xl flex justify-between gap-24'>
			<div className='flex flex-col gap-5'>
				<div className='flex gap-4'>
					<img src={item.photo} alt='' />
					<div className='flex flex-col gap-0.5'>
						<span className='text-[#91929E] text-sm'>{item.id}</span>
						<span className='text-black text-lg'>{item.title}</span>
					</div>
				</div>
				<div className='flex justify-between'>
					<span className='text-[#91929E] text-sm'>Created {item.created}</span>
					<span
						className={
							item.level === 'Medium' ? 'text-yellow-400' : 'text-green-600'
						}
					>
						{item.level}
					</span>
				</div>
			</div>
			<Separator orientation='vertical' />
			<div className='flex flex-col gap-5'>
				<span className='text-black text-lg'>Project Data</span>
				<div className='flex gap-10'>
					<span className='flex flex-col gap-1.5 text-[#91929E]'>
						All tasks
						<span className='text-black text-base font-bold'>
							{item.allTasks}
						</span>
					</span>
					<span className='flex flex-col gap-1.5 text-[#91929E]'>
						Active tasks
						<span className='text-black text-base font-bold'>
							{item.activeTasks}
						</span>
					</span>
					<span className='flex flex-col gap-1.5 text-[#91929E]'>
						Assignees
						<span className='text-black text-base font-bold'>
							{item.assignees}
						</span>
					</span>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
