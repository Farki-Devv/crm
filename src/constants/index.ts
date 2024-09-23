import { IconBrandWechat, IconFolderOpen } from '@tabler/icons-react'
import {
	ArrowDown,
	ArrowUp,
	Calendar,
	Layers,
	Plane,
	Users,
} from 'lucide-react'
import { RxDashboard } from 'react-icons/rx'

const saidbarLinks = [
	{
		name: 'Dashboard',
		path: '/',
		icon: RxDashboard,
	},
	{
		name: 'Projects',
		path: '/projects',
		icon: Layers,
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
		icon: IconBrandWechat,
	},
	{
		name: 'Info Portal',
		path: '/info-portal',
		icon: IconFolderOpen,
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
const projects = [
	{
		title: 'Medical App (iOS native)',
		id: 'PN0001265',
		allTasks: 33,
		activeTasks: 13,
		assignees: 3,
		created: 'Sep 12, 2020',
		level: 'Medium',
		photo: '/project/project1.png',
	},
	{
		title: 'Food Delivery Service',
		id: 'PN0001221',
		allTasks: 50,
		activeTasks: 24,
		assignees: 4,
		created: 'Sep 10, 2020',
		level: 'Medium',
		photo: '/project/project2.png',
	},
	{
		title: 'Food Delivery Service',
		id: 'PN0001290',
		allTasks: 23,
		activeTasks: 20,
		assignees: 4,
		created: 'May 28, 2020',
		level: 'Low',
		photo: '/project/project3.png',
	},
]

export { events, projects, saidbarLinks, users }
