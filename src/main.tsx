import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Dashboard from './pages/dashboard'
import NavSaid from './shared/nav-said'
import Projects from './pages/projects'
import Calendar from './pages/calendar'
import Vacations from './pages/vacations'
import Employees from './pages/employees'
import Messenger from './pages/messenger'
import InfoPortal from './pages/info-portal'
import Registration from './shared/registration'
const router = createBrowserRouter([
	{
		path: '/',
		element: <NavSaid />,
		children: [
			{
				path: '',
				element: <Dashboard />,
			},
			{
				path: '/projects',
				element: <Projects />,
			},
			{
				path: '/calendar',
				element: <Calendar />,
			},
			{
				path: '/vacations',
				element: <Vacations />,
			},
			{
				path: '/Employees',
				element: <Employees />,
			},
			{
				path: '/Messenger',
				element: <Messenger />,
			},
			{
				path: '/info-portal',
				element: <InfoPortal />,
			},
		],
	},
])
createRoot(document.getElementById('root')!).render(
	<>
		<RouterProvider router={router} />
		<Registration/>
	</>
)
