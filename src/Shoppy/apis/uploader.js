export async function uploadImage(file, callback) {
  const data = new FormData()
  data.append('file', file)
  data.append('upload_preset', process.env.REACT_APP_SHOPPY_CLOUDINARY_PRESET)

  return fetch(process.env.REACT_APP_SHOPPY_CLOUDINARY_URL, {
    method: 'POST',
    body: data,
  }).then((res) => res.url)
}
