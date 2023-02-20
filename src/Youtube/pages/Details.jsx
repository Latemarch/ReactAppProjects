import { useParams } from 'react-router-dom'
import { searchById } from '../apis/youtubeApi'
import { useQuery } from 'react-query'
import VideoCard from '../Components/VideoCard'

export default function Details() {
  const { id } = useParams()
  const { isLoading, data: videos } = useQuery(
    ['detail', id],
    () => searchById(id),
    { staleTime: 6000 },
  )
  return (
    <>
      <div>
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="360"
          src={`http://www.youtube.com/embed/${id}`}
          frameBorder="0"
        ></iframe>
        {isLoading ? (
          'Loading...'
        ) : (
          <>
            <p>{videos[0].snippet.title}</p>
            <p>{videos[0].snippet.title.description}</p>
          </>
        )}
      </div>
      <section>
        {videos?.map((video) => (
          <VideoCard key={`${video.snippet.publishedAt}`} video={video} />
        ))}
      </section>
    </>
  )
}
