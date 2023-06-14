import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inc, dec, asyncInt, fetchUsers2 } from '../store/slices/counterSlice'

export const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const users = useSelector((state) => state.counter.users)
  const dispatch = useDispatch()

  return (
    <>
      <h3>counter: {count}</h3>
      <button onClick={() => dispatch(inc())}>Plus</button>
      <button onClick={() => dispatch(dec())}>Minus</button>
      <button onClick={() => dispatch(asyncInt(count))}>ASYNC</button>
      <button onClick={() => dispatch(fetchUsers2())}>LOAD USERS</button>
      {users && users.map(u => <div key={u.id}>{u.name}</div>)}
    </>
  )
}
