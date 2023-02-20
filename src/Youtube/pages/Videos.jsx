import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../Components/VideoCard";

export default function Videos() {
	const { keyward } = useParams();
	const {
		isLoading,
		error,
		data: videos,
	} = useQuery(
		["videos", keyward],
		async () => {
			return await axios
				.get(`/videos/${keyward ? "search" : "popular"}.json`)
				.then((res) => res.data.items);
		},
		{ staleTime: 1000 }
	);

	return (
		<div>
			{keyward}
			{error && "ERROR"}
			{isLoading
				? "Loading..."
				: videos?.map((video) => <VideoCard video={video} />)}
		</div>
	);
}
