import Events from '@/shared/events'
import Worklad from '@/shared/worklad'

function Dashboard() {
	return (
		<div className='flex flex-col'>
			<div className='flex flex-col gap-4'>
				<span className='font-extralight text-gray-400'>
					Welcome back, Farrukh
				</span>
				<span className='text-3xl font-bold'>Dashboard</span>
				<div className='flex gap-10'>
					<Worklad />
					<Events />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
