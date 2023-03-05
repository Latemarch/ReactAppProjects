import { useParams } from 'react-router-dom'
import { convertId, Youtube } from '../apis/youtubeApi'
import { useQuery } from 'react-query'
import VideoCard from '../Components/VideoCard'

export default function Details() {
  const { id } = useParams()
  const { isLoading, data: videos } = useQuery(
    ['detail', id],
    () => Youtube.related({ id }),
    { staleTime: 6000 },
  )
  return (
    <article className="flex flex-col lg:flex-row">
      <div className="basis-4/6">
        {isLoading ? (
          'Loading...'
        ) : (
          <iframe
            title={videos[0].snippet.title}
            id="player"
            type="text/html"
            width="100%"
            height="640"
            src={`http://www.youtube.com/embed/${convertId(id)}`}
            frameBorder="0"
          ></iframe>
        )}
        {isLoading ? (
          'Loading...'
        ) : (
          <div className="p-4">
            <h2 className="text-xl font-bold">{videos[0].snippet.title}</h2>
            <p className="whitespace-pre-wrap">
              {videos[0].snippet.description}
            </p>
          </div>
        )}
      </div>
      <section className="basis-2/6">
        {videos?.map((video) => (
          <VideoCard
            key={`${video.snippet.publishedAt}`}
            video={video}
            type="list"
          />
        ))}
      </section>
    </article>
  )
}
