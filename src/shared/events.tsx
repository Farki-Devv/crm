import { ChevronRight } from 'lucide-react'
import EventCard from './event-card'
import { events } from '@/constants'

function Events() {
	return (
		<div className='bg-white flex flex-col py-7 pl-6 pr-5 gap-5 rounded-2xl font-nunito'>
			<div className='flex justify-between'>
				<span className='text-xl font-medium'>Nearest Events</span>
				<span className='text-[#3F8CFF] flex gap-0.5 items-center cursor-pointer'>
					View all <ChevronRight className='size-4' />
				</span>
			</div>
		<div className='grid grid-cols-1 gap-5'>
		{events.map(item => (
				<EventCard key={item.title} {...item} />
			))}
		</div>
		</div>
	)
}

export default Events
