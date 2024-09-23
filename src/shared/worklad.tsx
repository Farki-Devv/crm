import { users } from '@/constants'

import UserCard from './user-card'
import { ChevronRight } from 'lucide-react'

function Worklad() {
	return (
		<div className='bg-white flex flex-col gap-4 rounded-3xl font-nunito px-4 pb-4 pt-7'>
			<div className='flex justify-between px-3'>
				<span className='font-semibold text-1xl'>Workload</span>
				<span className='text-[#3F8CFF] flex gap-0.5 items-center cursor-pointer text-base'>
					View all <ChevronRight className='size-4' />
				</span>
			</div>
			<div className='grid grid-cols-4 gap-4'>
				{users.map(user => (
					<UserCard key={user.name} {...user} />
				))}
			</div>
		</div>
	)
}

export default Worklad
