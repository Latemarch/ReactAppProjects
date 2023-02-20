import { useEffect, useState } from 'react'
import { BsSearch, BsYoutube } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function YoutubeHeader() {
  const { keyward } = useParams()
  const [text, setText] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(text)
    setText('')
  }
  useEffect(() => setText(keyward || ''), [keyward])
  return (
    <header className="flex h-16 text-2xl ">
      <Link to={'/youtube'} className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form
        className="flex items-center h-full w-full justify-center "
        onSubmit={handleSubmit}
      >
        <input
          className="flex h-2/3 w-7/12 max-w-lg bg-bgColor rounded-l-full border border-gray focus:outline-none pl-3"
          type="text"
          value={text}
          placeholder={'Search...'}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="flex h-2/3 w-16 items-center justify-center border border-gray rounded-r-full bg-gray">
          <BsSearch className="flex" />
        </button>
      </form>
    </header>
  )
}
