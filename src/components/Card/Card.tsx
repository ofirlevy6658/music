import React from "react";
import "./card.scss";

interface Props {
	name: string;
	img: string;
	id: string;
}

export const Card = ({ name, img, id }: Props) => {
	return (
		<div className="card-wrapper">
			<img className="card-img" src={img} alt="Album Cover" />
			{name}
		</div>
	);
};
