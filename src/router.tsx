import {createBrowserRouter} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout/>,
		children: [
			{
				path: '/',
				element: <DashboardPage/>,
			},
		],
	}, {
		path: '/login',
		element: <LoginPage/>,
	},
]);


export default router;
