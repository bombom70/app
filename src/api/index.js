import axios from 'axios'

export const getPosts = async (linmit = 10, page = 1) => {
  const { data } = await axios('https://jsonplaceholder.typicode.com/posts', {params: {_linmit: linmit, _page: page}})
  return data
}

export const getPost = async (id) => {
  const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return data
}

export const getComments = async (id) => {
  const { data } = await axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  return data
}
