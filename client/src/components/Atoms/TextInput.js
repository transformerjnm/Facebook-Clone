import { useState } from 'react';  
import { FilledInput, FormControl, IconButton, Grid } from '@material-ui/core';
import { lightTheme } from '../../theme';  //light secondary main
import SearchIcon from '@material-ui/icons/Search';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import ImageIcon from '@material-ui/icons/Image';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SendIcon from '@material-ui/icons/Send';
import CircleImage from './CircleImage';
/**
 * Summary:
 * Should be full width by default as most of our uses are going to be full width which means the RextInput component must 
 * be wrapped with a container. Needs to be able to be used for comment input, search bar, and messages. Should have at least a 
 * variant for searchbar and a variant for messages. Messages variant should have the option to send emojis and images. 
 * 
 * Props: 
 * variant: search, message, comment (tells us which input to use)
 */
export default props => {

	const [isTyping, setIsTyping] = useState(false);

	let input;

	const searchStyles = {
		padding: '4px',
		borderRadius: '50px',
		minHeight: '24px'
	};

	const messageStyles = {
		padding: '4px',
		borderRadius: '50px',
		minHeight: '25px'
	};

	const commentStyles = {
		padding: '4px',
		borderRadius: '50px',
		minHeight: '25px'
	};

	const checkIfTyping = () => {
		if(isTyping){
			return(
				<IconButton size="small">
					<SendIcon color="secondary" />
				</IconButton>
			);
		}else{
			return(
				<IconButton size="small">
					<ThumbUpIcon color="secondary" />
				</IconButton>
			);
		}
	};

	if(props.variant === "search"){
		input = <FormControl hiddenLabel fullWidth>
					<FilledInput
						style={searchStyles}
						margin="dense" 
						disableUnderline={true}  
						placeholder="Search Facebook" 
						startAdornment={ <SearchIcon color="primary"/> }
					/>
				</FormControl>;
	} else if(props.variant === "message"){
		input = <Grid container alignItems="center">
					<Grid item xs={3} md={2}>
						<Grid container justify="flex-end">
							<IconButton size="small">
								<ImageIcon color="secondary"/>
							</IconButton>
						</Grid>
					</Grid>
					<Grid item xs={7} md={8}>
						<FilledInput 
							style={messageStyles}
							disableUnderline={true} 
							margin="dense" 
							placeholder="Aa" 
							multiline
							fullWidth
							endAdornment={ <IconButton size="small">
												<EmojiEmotionsIcon color="secondary"/>
											</IconButton> }
							onKeyPress={ () => setIsTyping(true) }
						/>
					</Grid>
					<Grid item md={2}>
						<Grid container alignItems="center" justify="flex-start">
							{ checkIfTyping() }
						</Grid>
					</Grid>
				</Grid>;
	}else if(props.variant === "comment"){
		input = <Grid container alignItems="center" justify="flex-end">
					<Grid item xs={2}>
						<Grid container>
							<CircleImage/>
						</Grid>
					</Grid>
					<Grid item xs={10}>
						<FilledInput 
							style={commentStyles}
							disableUnderline={true} 
							margin="dense" 
							placeholder="Write a comment..." 
							multiline
							fullWidth
							endAdornment={ <IconButton size="small">
												<EmojiEmotionsIcon color="secondary"/>
											</IconButton> }
						/>
					</Grid>
				</Grid>;
	}
	
	
  	return (
    	<>
			{input}	 
    	</>
  	);
}