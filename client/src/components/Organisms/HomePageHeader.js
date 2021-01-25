import React from 'react';
import { AppBar, InputBase, Toolbar } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook'
// import { AccountCircle, MenuIcon, SearchIcon, MailIcon, NotificationsIcon, MoreIcon  } from '@material-ui/icons'
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
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>
          <FacebookIcon />
          </div>
          <div>
            <SearchIcon />
          </div>
          <div>

            <InputBase placeholder="Search Facebook" />
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
