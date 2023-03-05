import { useNavigate } from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'

import ko from 'javascript-time-ago/locale/ko.json'
import { convertId } from '../apis/youtubeApi'

TimeAgo.addDefaultLocale(ko)

export default function VideoCard({ video, type }) {
  const { title, publishedAt, thumbnails, channelTitle } = video.snippet
  const navigate = useNavigate()
  const isList = type === 'list'
  return (
    <li
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() => navigate(`/youtube/watch/${convertId(video.id)}`)}
    >
      <img
        src={thumbnails.medium.url}
        className={isList ? 'w-1/2 mr-2' : 'w-full'}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text">{channelTitle}</p>
        <span>
          <ReactTimeAgo date={new Date(publishedAt)} />
        </span>
      </div>
    </li>
  )
}
