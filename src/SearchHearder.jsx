import { Link } from 'react-router-dom'
import { projects } from './projects'

export default function SearchHearder() {
  return (
    <header className="w-full h-[50px] bg-white fixed flex text-2xl border-b items-center justify-between ">
      <Link to="/">HOME</Link>
      {projects.map((p, index) => (
        <Link to={`${p.path}`} key={`${index}`}>
          <div className="p-3">{p.path}</div>
        </Link>
      ))}
    </header>
  )
}
