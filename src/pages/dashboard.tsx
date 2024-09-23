import Events from '@/shared/events'
import ProjectsDashboard from '@/shared/projects-dashboard'
import Worklad from '@/shared/worklad'

function Dashboard() {
	return (
		<div className='flex flex-col font-nunito px-2'>
			<div className='flex flex-col gap-7'>
				<div className='flex flex-col gap-1 px-2'>
				<span className='font-normal text-[#7D8592] text-base'>Welcome back, Evan!</span>
				<span className='text-4xl font-bold'>Dashboard</span>
				</div>
				<div className='flex items-start gap-8'>
					<Worklad />
					<Events />
				</div>
				<div className='flex gap-10'>
					<ProjectsDashboard />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
