import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { searchByKeyward } from '../apis/youtubeApi'
import VideoCard from '../Components/VideoCard'

export default function Videos() {
  const { keyward } = useParams()
  const { isLoading, error, data: videos } = useQuery(
    ['videos', keyward],
    () => searchByKeyward(keyward),
    {
      staleTime: 1000,
    },
  )

  return (
    <ul className="bg-bgColor grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
      {error && 'ERROR'}
      {isLoading
        ? 'Loading...'
        : videos?.map((video) => (
            <VideoCard key={`${video.snippet.publishedAt}`} video={video} />
          ))}
    </ul>
  )
}
