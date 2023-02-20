import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { searchByKeyward } from "../apis/youtubeApi";
import VideoCard from "../Components/VideoCard";

export default function Videos() {
	const { keyward } = useParams();
	const {
		isLoading,
		error,
		data: videos,
	} = useQuery(["videos", keyward], () => searchByKeyward(keyward), {
		staleTime: 1000,
	});

	return (
		<div>
			{keyward}
			{error && "ERROR"}
			{isLoading
				? "Loading..."
				: videos?.map((video) => (
						<VideoCard key={`${video.snippet.publishedAt}`} video={video} />
				  ))}
		</div>
	);
}
