import { ChevronRight } from 'lucide-react'
import EventCard from './event-card'
import { events } from '@/constants'

function Events() {
	return (
		<div className='bg-white flex flex-col p-6 gap-4 rounded-2xl'>
			<div className='flex justify-between'>
				<span className='text-xl font-medium'>Nearest Events</span>
				<span className='text-blue-600 flex gap-1 items-center cursor-pointer'>
					View all <ChevronRight className='size-4' />
				</span>
			</div>
			{events.map(item => (
				<EventCard key={item.title} {...item} />
			))}
		</div>
	)
}

export default Events
