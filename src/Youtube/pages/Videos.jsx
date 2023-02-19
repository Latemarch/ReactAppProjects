import axios from 'axios'
import { useState } from 'react'

export default function Videos() {
  const [list, setList] = useState()
  const getVideos = async () => {
    return axios.get('/videos/popular.json').then((res) => res.data.items)
  }
  setList(getVideos)
  console.log('list', list)
  return <div>videos</div>
}
