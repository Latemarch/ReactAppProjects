import React from 'react'
import axios from 'axios'

export async function searchByKeyward(keyward = '') {
  return await axios
    .get(`/videos/${keyward ? 'search' : 'popular'}.json`)
    .then((res) => res.data.items)
}
