import React, { useEffect, useState } from 'react'
import avatar from '../assets/img/avatar.png'
import { Link } from 'react-router-dom'
import { CustomToggle } from './CustomTIggle'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsFetch } from '../store/slices/commentsSlice';

export const Post = ({ id, title, body }) => {
  const comments = useSelector((state) => state.comments.comments)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   console.log('qweqweqwwqe')
  //   dispatch(getCommentsFetch(id))
  // }, [id])

  return (
    <Card border="light">
      <Card.Body>
        <Link to={`/posts/${id}`}>
          <Card.Img variant="left" src={avatar} height="56px"></Card.Img>
        </Link>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      <Accordion>
          <CustomToggle eventKey={id} id={id}>comments</CustomToggle>
          <Accordion.Collapse eventKey={id}>
            <Card.Body>
            {comments.map(c => {
              return (
                <ListGroup key={`${c.postId}${c.id}`}>
                  <ListGroup.Item>{c.email} {c.body}</ListGroup.Item>  
                </ListGroup>
              )
            })}
            </Card.Body>
          </Accordion.Collapse>
      </Accordion>
      </Card.Body>
    </Card>
  )
}
