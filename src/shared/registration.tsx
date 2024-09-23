import React, { useState } from 'react'
import {
	createUserWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
} from 'firebase/auth'
import { auth } from '../../firebase' 
import { useEffect } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Github } from 'lucide-react'
import { IconBrandGoogleFilled } from '@tabler/icons-react'

const Registration = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)
	const [user, setUser] = useState<User | null>(null)
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
			setIsDialogOpen(currentUser === null) // User mavjud emas bo'lsa, dialogni oching
		})

		return () => unsubscribe() // Clean up the listener on component unmount
	}, [])

	const handleRegistration = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			await createUserWithEmailAndPassword(auth, email, password)
			// Successful registration, you can redirect or show a success message
			console.log('User registered successfully!')
		} catch (error: any) {
			setError(error.message)
		}
	}

	const handleGoogleSignIn = async () => {
		const provider = new GoogleAuthProvider()
		try {
			const result = await signInWithPopup(auth, provider)
			console.log(result.user)
		} catch (error: any) {
			setError(error.message)
		}
	}
	const handleGithubSignIn = async () => {
		const provider = new GithubAuthProvider()
		try {
			const result = await signInWithPopup(auth, provider)
			console.log(result.user)
		} catch (error: any) {
			setError(error.message)
		}
	}

	return (
		<div>
			<div>
				{user ? (
					<div></div>
				) : (
					<Dialog open={isDialogOpen}>
						<DialogContent>
							<DialogHeader className='gap-4'>
								<DialogTitle>Sign up to log in</DialogTitle>
								<div className='flex flex-col gap-4'>
									<div>
										<span>Email adress</span>
										<Input
											placeholder='Email adress'
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</div>
									<div>
										<span>Password</span>
										<Input
											placeholder='Your password'
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</div>
									<Button className='bg-blue-600' onClick={handleRegistration}>
										Submit
									</Button>
									<Button onClick={handleGoogleSignIn} className='felx gap-2'>
										<IconBrandGoogleFilled className='size-4' />
										Sign in with Google
									</Button>
									<Button onClick={handleGithubSignIn} className='flex gap-2'>
										<Github className='size-4' /> Sign in with Github
									</Button>
								</div>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				)}
			</div>
		</div>
	)
}

export default Registration
