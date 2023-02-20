import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

import ko from "javascript-time-ago/locale/ko.json";

TimeAgo.addDefaultLocale(ko);

export default function VideoCard({ video }) {
	const { title, publishedAt, thumbnails } = video.snippet;
	const navigate = useNavigate();
	return (
		<li onClick={() => navigate(`/youtube/watch/${video.id}`)}>
			<img src={thumbnails.default.url} />
			<div>{title}</div>
			<span>
				<ReactTimeAgo date={publishedAt.toString()} />
			</span>
		</li>
	);
}
