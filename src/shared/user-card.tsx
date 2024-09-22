import { Badge } from '@/components/ui/badge'
import { IUser } from '@/types'

function UserCard(user: IUser) {
	return (
		<div className='bg-[#F4F9FD] px-10 py-5 rounded-2xl cursor-pointer'>
			<div className='flex flex-col items-center gap-4'>
				<img src={user.photo} alt='' className='size-12' />
				<div className='flex flex-col gap-0.5 items-center'>
					<span className='font-medium'>{user.name}</span>
					<span className='font-normal'>{user.job}</span>
				</div>
				<Badge variant={'outline'}>{user.level}</Badge>
			</div>
		</div>
	)
}

export default UserCard
