import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import { Bell } from 'lucide-react'

function Navbar() {
	return (
		<div className='fixed mx-auto inset-x-10 z-50 flex justify-between ml-52 mt-10 px-2 lg:px-4'>
			<Input
				placeholder='Search'
				className='bg-white rounded-xl border-none outline-none placeholder:font-semibold h-12 max-w-2xl'
			/>
			<div className='flex items-center gap-4'>
				<Button variant={'ghost'}>
					<Bell className='text-black' />
				</Button>

				<Select>
					<SelectTrigger className=''>
						<SelectValue placeholder='Select profile' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Profiles</SelectLabel>
							<SelectItem value='Farrukh' className='flex'>
								Farrukh
							</SelectItem>
							<SelectItem value='Sardor'>Sardor</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}

export default Navbar
