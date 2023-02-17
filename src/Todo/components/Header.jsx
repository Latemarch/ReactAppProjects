export default function Header({ onFilterChange }) {
  return (
    <ul>
      {['All', 'Active', 'Completed'].map((filter, index) => (
        <button key={index} onClick={() => onFilterChange(filter)}>
          {filter}
        </button>
      ))}
    </ul>
  )
}
