import { AppBar, Tabs, Tab } from '@material-ui/core';  

/**
 * Summary:
 * Responsive header for navigating the application. At the current stage in development we want this to be responsive and have dummy links.
 * The mobile menu should work.
 * 
 * Props: 
 * 
 */
export default props => {
  	return (
    	<AppBar title="My App">
				<Tabs>
					<Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
          <Tab label="Item 4" />
				</Tabs>

			</AppBar>
     		
  	);
}