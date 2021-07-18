import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "./track-card.scss";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
		},
		details: {
			display: "flex",
			flexDirection: "column",
		},
		content: {
			flex: "1 0 auto",
		},
		cover: {
			width: 151,
		},
		controls: {
			display: "flex",
			alignItems: "center",
			paddingLeft: theme.spacing(1),
			paddingBottom: theme.spacing(1),
		},
		playIcon: {
			height: 38,
			width: 38,
		},
	})
);

export const TrackCard = () => {
	const classes = useStyles();

	return (
		<div className="track-card-wrapper">
			<Card className={classes.root}>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component="h5" variant="h5">
							Live From Space
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							Mac Miller
						</Typography>
					</CardContent>
					<div className={classes.controls}>
						<IconButton aria-label="play/pause">
							<PlayArrowIcon className={classes.playIcon} />
						</IconButton>
					</div>
				</div>
				<CardMedia
					className={classes.cover}
					image="/static/images/cards/live-from-space.jpg"
					title="Live from space album cover"
				/>
			</Card>
		</div>
	);
};
