import React, { useEffect, useState } from "react";
import "./soundplayer.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";
interface Props {
	tracks?: { url: string | null; name: string; index: number }[];
}

export const SoundPlayer = ({ tracks }: Props) => {
	const [playing, setPlaying] = useState<string | null>("");
	const [trackIndex, setTrackIndex] = useState(0);
	useEffect(() => {
		if (tracks) {
			setPlaying(tracks[0].url);
		}
	}, [tracks]);

	const next = () => {
		if (!tracks) return;
		if (tracks.length <= trackIndex + 1) return;
		setPlaying(tracks[trackIndex + 1].url);
		setTrackIndex(trackIndex + 1);
	};
	const prev = () => {
		if (!tracks) return;
		if (trackIndex - 1 <= 0) return;
		setPlaying(tracks[trackIndex - 1].url);
		setTrackIndex(trackIndex - 1);
	};

	return (
		<div
			className="sound-player-container"
			// style={{
			// 	opacity: "0.3",
			// 	height: "50vh",
			// 	width: "35vw",
			// 	margin: "0 auto",
			// 	backgroundImage:
			// 		"url(" +
			// 		"https://i.scdn.co/image/ab67616d0000b273f05e5ac32fdd79d100315a20" +
			// 		")",
			// 	backgroundPosition: "center",
			// 	backgroundSize: "cover",
			// 	backgroundRepeat: "no-repeat",
			// }}
		>
			<div className="media-player">
				<div className="song-list">
					{tracks?.map((el, i) => (
						<div
							className={`song-row ${trackIndex === i ? "active" : ""}`}
							key={i}
							onClick={() => {
								setPlaying(tracks[el.index].url);
								setTrackIndex(el.index);
							}}
						>
							{el.name}
						</div>
					))}
				</div>
				<div className="sound-player">
					<AudioPlayer
						showSkipControls={true}
						showJumpControls={false}
						onClickNext={next}
						onClickPrevious={prev}
						src={playing ? playing : undefined}
					/>
				</div>
			</div>
		</div>
	);
};
