import { Button } from '@/components/ui/button'
import { IEvent } from '@/types'
import { ArrowDown, Clock } from 'lucide-react'
const borderColors = [
	'border-red-400',
	'border-orange-400',
	'border-yellow-400',
	'border-green-400',
	'border-blue-400',
	'border-indigo-400',
	'border-purple-400',
	'border-pink-400',
]
function EventCard(event: IEvent) {
	const randomColor =
		borderColors[Math.floor(Math.random() * borderColors.length)]

	return (
		<div className='flex flex-col gap-4'>
			<div
				className={`w-80 px-2 py-4 flex flex-col gap-5 border-l-4 rounded ${randomColor}`}
			>
				<span className='text-base font-medium flex justify-between'>
					<span className='w-44'>{event.title}</span>
					<event.icon
						className={`${
							event.icon === ArrowDown ? 'text-green-600' : 'text-yellow-400'
						}`}
					/>
				</span>
				<div className='flex justify-between'>
					<span>{event.date}</span>
					<Button
						variant={'ghost'}
						className='rounded-lg bg-[#F4F9FD] text-gray-600 font-semibold flex gap-2'
					>
						<Clock className='size-4' />
						{event.hour}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default EventCard
