import { Grid, Typography } from '@material-ui/core';  
import { lightTheme } from '../../theme';
import { NavLink } from 'react-router-dom'
/**
 * Summary:
 * A comment that has the users profile picture, username, and comment.
 * 
 * Props: 
 * children: CircleImage of the author that is wrapped by this component
 * authorName: the author of the comment
 * authorComment: the comment of the author
 * navLinkDestination: url link that redirects the browser
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
	const commentContainerStyles = {
		width: 'auto',
		backgroundColor: lightTheme.palette.primary.main,
		borderRadius: '15px',
		padding: '.25rem' 
	};
	const navLinkStyles = {
		color: lightTheme.palette.text.primary,
		textDecoration: 'none'
	};
	return (
		<Grid container alignContent="center" spacing={1}>
			<Grid item>
				<Grid container justify="flex-start">
					{props.children}
				</Grid>
			</Grid>
			<Grid item>
				<div style={commentContainerStyles}>
					<Grid container>
						<Grid item xs={12}>
							<NavLink 
								to={props.navLinkDestination}
								style={navLinkStyles}
							>
								<Typography 
									variant="subtitle2"
									style={{fontWeight: 'bold'}}
								>
									{props.name}
								</Typography>
							</NavLink>
						</Grid>
						<Grid item>
							<Typography variant="body2">
								{props.authorComment}
							</Typography>
						</Grid>
					</Grid>
				</div>
				<Grid container>
					<Grid item xs={1}>
						<Grid container>
							<Typography variant="subtitle2">
								Like
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={1}>
						<Grid container>
							<Typography variant="subtitle2">
								Reply
							</Typography>
						</Grid>
					</Grid>
					<Grid item xs={1}>
						<Grid container justify="center">
							<Typography variant="subtitle2">
								{props.timePosted}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}