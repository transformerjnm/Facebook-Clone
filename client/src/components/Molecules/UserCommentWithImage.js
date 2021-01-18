import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
			width: '25ch',
		},
	},
}));
export default props => {
	const classes = useStyles()
	return (
		<div>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField
    		id="filled-secondary"
				label="Filled secondary"
				variant="filled"
				color="secondary"
				/>
			</form>
		</div>
	);
}