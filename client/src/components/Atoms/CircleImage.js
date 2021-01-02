import { Paper } from '@material-ui/core';  
import { lightTheme } from '../../theme';
/**
 * Summary:
 * Takes in an image and displays it as a circle. All instances and uses of circle images should be the same size. On hover should show pop up with information about the user if passed in.
 * 
 * Props: 
 * src: image url
 * alt: image alt
 * clickAction: option prop that if provided will be ran onClick on image. could be a link to a profile or open messenger.
 * isOnline: boolean if user is online
 * 
 * HoverInformation is being delayed until further notice. Once we get data structure setup and know what its going to display we can create it.
 * hoverInformation: Object of information to display.
 */

export default props => {
	const paperStyle = {
		height: "36px",
		width: "36px",
		borderRadius: "50%",
	}
	const circleImageContainer = {
		position: 'relative',
		width: '36px',
		height: '36px'
	}
	const circleImageStyle= {
		objectFit: "cover",
  		height: "36px",
		width: "36px",
		borderRadius: "50%",
		position: 'absolute',
		bottom: '0'
	}
	const statusCircleStyles = {
		width: '8px',
		height: '8px',
		borderRadius: '50%',
		backgroundColor: lightTheme.palette.success.main,
		transform: 'translate( 50%, 50%)',
		position: 'absolute',
		bottom: '0',
		right: '0',
		margin: '5px',
		border: `2px solid ${lightTheme.palette.primary.light}`
	}

	const showImageOrImageFallback = () => {
		if (props.src) {
			if (!props.alt) {
				console.log("circle image is missing alt for " + props.src);
			}
			return (	
				<div style={circleImageContainer}>		
					<img style={circleImageStyle} src={props.src} alt={props.alt} />	
					{ showOnlineCircle() }
				</div>		
			); 
		} else {
			return <Paper style={paperStyle} />
		}
	}

	const showOnlineCircle = () => {
		if(props.isOnline) {
			return <div style={statusCircleStyles} />
		}
	}
  	return (
    	<> 
			{ showImageOrImageFallback() }	
    	</>
  	);
}