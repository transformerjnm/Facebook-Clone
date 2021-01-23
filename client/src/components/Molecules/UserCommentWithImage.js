import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { Input, Paper }from '@material-ui/core/';

/**
 * Summary:
 * A comment that has the users profile picture, username, and comment.
 * 
 * Props: 
 * Image
 * Name
 * AuthorComment
 * 
 */

// Material UI Styling below


// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		'& > *': {
// 			margin: theme.spacing(1),
// 			width: '300px',
// 			height: '18px',
// 			color: "secondary",
// 			fontSize: "calc(.8rem + 1vmin)"
// 		},
// 	},
// }));
export default props => {
	// const classes = useStyles()
	return (
		<div>
			<Paper>
			<form className={createMuiTheme} noValidate autoComplete="off">
			<Input placeholder="Write a comment..." color="secondary" inputProps={{ 'aria-label': 'description' }} />
			</form>
			</Paper>
		</div>
	);
}