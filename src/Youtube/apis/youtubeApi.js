import axios from 'axios'
const isLocal = false

const httpClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API },
})

export function convertId(id) {
  return typeof id === 'string' ? id : id.videoId
}

export const Youtube = {
  json: '',
  async search({ keyward = '', id = '', local = isLocal }) {
    if (local) this.json = await this.localSearch({ keyward, id })
    else this.json = await this.apiSearch({ keyward, id })
    return this.json.data.items
  },
  async related({ id, local = isLocal }) {
    if (local) this.json = await this.localSearch({ id })
    else this.json = await this.apiRelated({ id })
    return this.json.data.items
  },

  async localSearch({ keyward = '', id = '' }) {
    if (keyward === '' && id === '')
      return await axios.get('/videos/popular.json')
    else return await axios.get('/videos/search.json')
  },

  async apiSearch({ keyward }) {
    if (keyward === '')
      return httpClient.get('videos', {
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
    else
      return httpClient.get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          q: keyward,
        },
      })
  },
  async apiRelated({ id }) {
    return httpClient.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        relatedToVideoId: id,
      },
    })
  },
}
