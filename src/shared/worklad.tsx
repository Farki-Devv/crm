import { users } from '@/constants'

import UserCard from './user-card'
import { ChevronRight } from 'lucide-react'

function Worklad() {
	return (
		<div className='bg-white flex flex-col gap-5 p-4 rounded-2xl'>
			<div className='flex justify-between'>
				<span className='font-semibold text-2xl'>Worklad</span>
				<span className='text-blue-600 flex gap-1 items-center cursor-pointer'>
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
