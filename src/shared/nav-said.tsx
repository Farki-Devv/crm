import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import Saidbar from './saidbar'

function NavSaid() {
	return (
		<div className='flex'>
			<Navbar />
			<div className='flex p-8'>
				<Saidbar />
				<div className='ml-52 mt-[7.5vh] w-full p-4'>
					<Outlet /> 
				</div>
			</div>
		</div>
	)
}

export default NavSaid
