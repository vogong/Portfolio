import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const FloatingBackButton = () => {
  const navigate = useNavigate()

  return (
    <ButtonWrapper
      as={motion.button}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      whileHover={{ y: -5 }}
      onClick={() => navigate('/')}
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>Back to Home</span>
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--gradient);
  color: var(--light);
  padding: 1rem 1.5rem;
  border-radius: 50px;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;

    span {
      display: none;
    }
  }
`

export default FloatingBackButton
