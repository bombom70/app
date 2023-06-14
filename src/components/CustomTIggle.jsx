import { useState } from 'react'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { getCommentsFetch } from '../store/slices/commentsSlice';

export const CustomToggle = ({ children, eventKey, id }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    if (!isOpen) {
      dispatch(getCommentsFetch(id))
      setIsOpen(!isOpen)
    } else {
      setIsOpen(!isOpen)
    }
  });

  return (
    <Button
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}