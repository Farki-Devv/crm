import Events from '@/shared/events'
import Worklad from '@/shared/worklad'
import { getAuth } from 'firebase/auth'

function Dashboard() {
	const auth = getAuth()
	const user = auth.currentUser

	return (
		<div className='flex flex-col'>
			<div className='flex flex-col gap-4'>
				<span className='font-extralight text-gray-400'>
					Welcome back, {user ? user.displayName : 'Guest'}
					{user && user.photoURL && <img src={user.photoURL} />}
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
