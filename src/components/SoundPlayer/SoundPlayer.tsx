import React, { useEffect } from "react";
import "./soundplayer.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
import ReactPlayer from "react-player";
interface Props {}

export const SoundPlayer = (props: Props) => {
	const next = () => {
		console.log("next");
	};
	const prev = () => {
		console.log("rev");
	};
	return (
		<div className="sound-player-container">
			{/* <div className="sound-player"> */}
			{/* <img
					src="https://i.scdn.co/image/ab67616d0000b273f05e5ac32fdd79d100315a20"
					alt="album-img"
				/>
			</div> */}
			<div className="media-player">
				<div className="song-list">
					s s<h1>s</h1>
					<h1>s</h1>
				</div>
				<div className="sound-player">
					<AudioPlayer
						showSkipControls={true}
						showJumpControls={false}
						onClickNext={next}
						onClickPrevious={prev}
						src="https://p.scdn.co/mp3-preview/a38c14bfaea20ed78a9823dff74740fcd8f89dc4?cid=d6fa2687db"
					/>
				</div>
			</div>
		</div>
	);
};
