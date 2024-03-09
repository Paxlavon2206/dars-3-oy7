import React from 'react'


export const Card2 = ({firstname, lastname,id}) => {
  return (
    <div>
      <h1>{firstname}</h1>
      <h1>{lastname}</h1>
      <button>Delete</button>
    </div>
  )
}
