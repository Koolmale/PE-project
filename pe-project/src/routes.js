import StrengthTraining from './pages/strength_training'
import Home from './pages/home'
import About from './pages/about'
import FlagFootball from './pages/flag_football'
import Basketball from './pages/basketball'
import Soccer from './pages/soccer'

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/strength-training',
		component: StrengthTraining,
	},
	{
		path: '/flag-football',
		component: FlagFootball,
	},
	{
		path: '/basketball',
		component: Basketball,
	},
	{
		path: '/soccer',
		component: Soccer,
	},
	{
		path: '/about',
		component: About,
	},
]

export default routes
