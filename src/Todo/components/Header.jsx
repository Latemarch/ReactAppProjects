import styled from 'styled-components'
const Ul = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
const Btn = styled.button`
  border: none;
  color: ${(p) => (p.filterNow === p.filter ? 'tomato' : 'white')};
  font-size: 1rem;
  margin: 0 10px;
  background-color: transparent;
  &:hover {
    color: tomato;
  }
`
export default function Header({ onFilterChange, filterNow }) {
  return (
    <Ul>
      {['All', 'Active', 'Completed'].map((filter, index) => (
        <Btn
          key={index}
          onClick={() => onFilterChange(filter)}
          filterNow={filterNow}
          filter={filter}
        >
          {filter}
        </Btn>
      ))}
    </Ul>
  )
}
