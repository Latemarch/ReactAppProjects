import './App.css'
import Header from './components/Header'
import Input from './components/input'
import ToDoList from './components/ToDoList'
import styled from 'styled-components'

import { Provider } from 'react-redux'
import store from './store'

const Container = styled.div`
  margin: 5%;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #35383e;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 8px 9px 5px 2px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: 8px 9px 5px 2px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 8px 9px 5px 2px rgba(0, 0, 0, 0.51);
`

const AppToDoList = () => (
  <Provider store={store}>
    <Container>
      <Header />
      <ToDoList />
      <Input />
    </Container>
  </Provider>
)

export default AppToDoList
