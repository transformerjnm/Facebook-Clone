import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '300px',
			height: '18px',
			color: "secondary",
			fontSize: "calc(.8rem + 1vmin)"
		},
	},
}));
export default props => {
	const classes = useStyles()
	return (
		<div>
			<Paper>
			<form className={classes.root} noValidate autoComplete="off">
			<Input placeholder="Write a comment..." color="secondary" inputProps={{ 'aria-label': 'description' }} />
			</form>
			</Paper>
		</div>
	);
}