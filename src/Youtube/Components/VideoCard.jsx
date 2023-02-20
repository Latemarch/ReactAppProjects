import React from "react";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";

import ko from "javascript-time-ago/locale/ko.json";

TimeAgo.addDefaultLocale(ko);

export default function VideoCard({ video }) {
	return (
		<Link to={`watch/${video.id}`}>
			<img src={video.snippet.thumbnails.default.url} />
			<div>{video.snippet.title}</div>
			<span>
				<ReactTimeAgo date={video.snippet.publishedAt} />
			</span>
		</Link>
	);
}
