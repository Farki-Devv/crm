import { Button } from '@/components/ui/button'
import { IEvent } from '@/types'
import { ArrowUp, Clock } from 'lucide-react'
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
		<div
			className={`flex flex-col justify-between font-nunito border-l-4 ${randomColor} h-[104px] py-3 px-4 rounded`}
		>
			<div className='flex justify-between gap-14'>
				<span className='text-base font-semibold max-w-48'>{event.title}</span>
				<span
					className={`${
						event.icon === ArrowUp ? 'text-yellow-400' : 'text-green-400'
					}`}
				>
					<event.icon />
				</span>
			</div>
			<div className='flex justify-between'>
				<span className='text-[#91929E] text-sm'>{event.date}</span>
				<Button className='h-9 w-16 flex gap-1 bg-[#F4F9FD] text-[#7D8592]'>
					<Clock className='size-6'/>
					{event.hour}
				</Button>
			</div>
		</div>
	)
}

export default EventCard
