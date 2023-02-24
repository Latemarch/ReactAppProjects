import { useDispatch, useSelector } from 'react-redux'
import { updateFilter } from '../fiatures/toDoSlice'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
const Button = styled.button`
  border: none;
  color: ${(p) => (p.activeFilter === p.filter ? 'tomato' : 'white')};
  font-size: 1rem;
  margin: 0 10px;
  background-color: transparent;
  &:hover {
    color: tomato;
  }
`
export default function Header() {
  const filter = useSelector((state) => state.toDoReducer.filter)
  const dispatch = useDispatch()

  const filters = ['All', 'Active', 'Completed']

  return (
    <Container>
      {filters.map((f, index) => (
        <Button
          key={index}
          onClick={() => dispatch(updateFilter(f))}
          filter={f}
          activeFilter={filter}
        >
          {f}
        </Button>
      ))}
    </Container>
  )
}
