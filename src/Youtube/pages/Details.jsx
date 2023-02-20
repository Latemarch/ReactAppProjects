import React from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../Components/VideoCard";

export default function Details({ video }) {
	const { id } = useParams();
	return (
		<>
			<iframe
				id="player"
				type="text/html"
				width="640"
				height="360"
				src={`http://www.youtube.com/embed/${id}`}
				frameborder="0"
			></iframe>
		</>
	);
}
