import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme } from './theme.js'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import UserCommentWithImage from './components/Molecules/UserCommentWithImage';
import HomePageHeader from './components/Organisms/HomePageHeader';

/**
 * Summary:
 * Root component that loads all the awesome components.
 * 
 * Props: 
 * NA
 */
export default props =>  {
	return (
		<ThemeProvider theme={lightTheme}>
			<BrowserRouter>
				<Switch>
					<Route path='/Home'>
						<HomePage/>
					</Route>
					<Route exact path='/'>
						<p>Go to /Home in the URL</p>
						{/* Login/landing page goes here  */}
						<HomePageHeader />
					</Route> 										                             
					<Redirect to='/'/>
				</Switch>  				
			</BrowserRouter>
		</ThemeProvider>
	);
}