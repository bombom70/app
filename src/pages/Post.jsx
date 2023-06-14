import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getPostFetch } from '../store/slices/postSLice';

export const Post = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const post = useSelector((state) => state.post.post)
  useEffect(() => {
    dispatch(getPostFetch(id))
  }, [id])
  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  )
}
