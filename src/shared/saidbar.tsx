import { NavLink } from 'react-router-dom'
import { saidbarLinks } from '../constants'

import { LogOut } from 'lucide-react'

function Saidbar() {
	return (
		<div className='fixed h-[94vh] px-4 bg-white rounded-3xl'>
			<div className='flex flex-col justify-between h-full'>
				<div className='flex flex-col gap-12 mt-14'>
					<div>
						<img src='/logo.png' alt='Logo' />
					</div>
					<div className='flex flex-col space-y-3'>
						{saidbarLinks.map(item => (
							<NavLink
								to={item.path}
								className={({ isActive, isPending }) =>
									isPending
										? ''
										: isActive
										? 'text-white font-bold px-2 bg-blue-400 py-2 rounded-md'
										: 'text-[#7D8592] font-bold px-2 py-2'
								}
							>
								<span className='flex gap-4 items-center'>
									<item.icon size={'20'} />
									{item.name}
								</span>
							</NavLink>
						))}
					</div>
				</div>
				<div className='flex flex-col items-center gap-12'>
					<img src='/Support.png' alt='Support' />
					<span className='flex items-center gap-2 font-bold p-2'>
						<LogOut className='size-4' /> Log Out
					</span>
				</div>
			</div>
		</div>
	)
}

export default Saidbar
