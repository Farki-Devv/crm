import {
	ArrowDown,
	ArrowUp,
	Calendar,
	LayoutDashboard,
	LibraryBig,
	MessageCircleCodeIcon,
	Plane,
	ScanText,
	Users,
} from 'lucide-react'

const saidbarLinks = [
	{
		name: 'Dashboard',
		path: '/',
		icon: LayoutDashboard,
	},
	{
		name: 'Projects',
		path: '/projects',
		icon: ScanText,
	},
	{
		name: 'Calendar',
		path: '/Calendar',
		icon: Calendar,
	},
	{
		name: 'Vacations',
		path: '/vacations',
		icon: Plane,
	},
	{
		name: 'Employees',
		path: '/employees',
		icon: Users,
	},
	{
		name: 'Messenger',
		path: '/messenger',
		icon: MessageCircleCodeIcon,
	},
	{
		name: 'Info Portal',
		path: '/info-portal',
		icon: LibraryBig,
	},
]

const users = [
	{
		name: 'Shawn Stone',
		job: 'UI/UX Designer',
		level: 'Middle',
		photo: '/users/user1.png',
	},
	{
		name: 'Randy Delgado',
		job: 'UI/UX Designer',
		level: 'Junior',
		photo: '/users/user2.png',
	},
	{
		name: 'Emily Tyler',
		job: 'Copywriter',
		level: 'Middle',
		photo: '/users/user3.png',
	},
	{
		name: 'Louis Castro',
		job: 'Copywriter',
		level: 'Senior',
		photo: '/users/user1.png',
	},
	{
		name: 'Blake Silva',
		job: 'IOS Developer',
		level: 'Senior',
		photo: '/users/user2.png',
	},
	{
		name: 'Joel Phillips',
		job: 'UI/UX Designer',
		level: 'Middle',
		photo: '/users/user1.png',
	},
	{
		name: 'Wayne Marsh',
		job: 'Copywriter',
		level: 'Junior',
		photo: '/users/user2.png',
	},
	{
		name: 'Oscar Holloway',
		job: 'UI/UX Designer',
		level: 'Middle',
		photo: '/users/user3.png',
	},
]

const events = [
	{
		title: 'Presentation of the new department',
		date: 'Today | 5:00 PM',
		icon: ArrowUp,
		hour: '4h',
	},
	{
		title: 'Anna’s Birthday',
		date: 'Today | 6:00 PM',
		icon: ArrowDown,
		hour: '4h',
	},
	{
		title: 'Ray’s Birthday',
		date: 'Tomorrow | 2:00 PM',
		icon: ArrowDown,
		hour: '4h',
	},
]

export { saidbarLinks, users, events }
