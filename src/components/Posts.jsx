import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPostsFetch } from '../store/slices/postsSlice'
import { Post } from './Post'

export const Posts = () => {
  // const [limit, setLimit] = useState(10);
  // const [page, setPage] = useState(1);
  const posts = useSelector((state) => state.posts.posts)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getPostsFetch())
  }, [dispatch])

  return (
    <>
      {posts.map(({id, title, body}) => <Post key={id} id={id} title={title} body={body} />)}
    </>
  )
}
