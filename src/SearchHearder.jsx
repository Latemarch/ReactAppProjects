import { projects } from './index'
import { Link } from 'react-router-dom'

export default function SearchHearder() {
  return (
    <header className="w-full h-[50px] flex text-2xl border-b items-center justify-between ">
      <Link to="/">HOME</Link>
      {projects.map((p, index) => (
        <Link to={`${p.path}`} key={`${index}${p}`}>
          <div className="p-3">{p.path}</div>
        </Link>
      ))}
    </header>
  )
}
