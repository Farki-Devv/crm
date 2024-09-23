import { Badge } from '@/components/ui/badge'
import { IUser } from '@/types'

function UserCard(user: IUser) {
	return (
		<div className='bg-[#F4F9FD] px-7 py-3.5 rounded-3xl cursor-pointer'>
			<div className='flex flex-col gap-3 items-center'>
				<div className='flex flex-col items-center gap-4'>
					<img
						src={user.photo}
						alt=''
						className='size-15 border-2 rounded-full border-[#3F8CFF]'
					/>
					<div className='flex flex-col gap-0.5 items-center'>
						<span className='font-bold text-base'>{user.name}</span>
						<span className='font-normal text-sm'>{user.job}</span>
					</div>
				</div>
				<Badge variant={'outline'}>{user.level}</Badge>
			</div>
		</div>
	)
}

export default UserCard
