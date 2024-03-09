import React from 'react'
import { deleteTodo } from '../../redux/reducer/todo-reducer'
import { useDispatch } from 'react-redux'

export const Card2 = ({firstname, lastname,id}) => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{firstname}</h1>
      <h1>{lastname}</h1>
      <button onClick={ () => dispatch(deleteTodo({id}))}>Delete</button>
    </div>
  )
}
