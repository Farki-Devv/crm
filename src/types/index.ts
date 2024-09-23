import { LucideProps } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface IUser {
	name: string
	job: string
	level: string
	photo: string
}

export interface IEvent {
	title: string
	date: string
	icon: ForwardRefExoticComponent<
		Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
	>
	hour: string
}
export interface IProject {
  title: string;
  id: string;
  allTasks: number;
  activeTasks: number;
  assignees: number;
  created: string;
  level: string;
	photo: string;
}
