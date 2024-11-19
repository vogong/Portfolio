import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const ResumeModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    requiresResume: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://n8n.apps.kwika.ca/webhook/e22dd6de-474c-465f-80d6-f5dd53077a3e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
          setFormData({
            companyName: '',
            contactName: '',
            email: '',
            requiresResume: false
          })
        }, 2000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContent
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>×</CloseButton>
            <ModalHeader>
              <h2>Request Resume</h2>
              <p>Please fill out the form below to request my resume.</p>
            </ModalHeader>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="contactName">Contact Name *</Label>
                <Input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <CheckboxLabel>
                  <Checkbox
                    type="checkbox"
                    name="requiresResume"
                    checked={formData.requiresResume}
                    onChange={handleChange}
                  />
                  <span>I would like to receive a copy of the resume</span>
                </CheckboxLabel>
              </FormGroup>

              <SubmitButton 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </SubmitButton>

              {submitStatus === 'success' && (
                <StatusMessage success>
                  Request sent successfully!
                </StatusMessage>
              )}
              
              {submitStatus === 'error' && (
                <StatusMessage>
                  Error sending request. Please try again.
                </StatusMessage>
              )}
            </Form>
          </ModalContent>
        </Overlay>
      )}
    </AnimatePresence>
  )
}

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`

const ModalContent = styled(motion.div)`
  background: rgba(0, 0, 0, 1);
  border-radius: 12px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--gray);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--light);
  }
`

const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    color: var(--light);
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--gray);
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: var(--light);
  font-size: 0.9rem;
`

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--dark);
  color: var(--light);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--gray);
  cursor: pointer;
`

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`

const SubmitButton = styled.button`
  padding: 1rem;
  background: var(--gradient);
  border: none;
  border-radius: 6px;
  color: var(--lighttext);
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

const StatusMessage = styled.div`
  text-align: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${props => props.success ? '#059669' : '#dc2626'};
  color: var(--light);
`

export default ResumeModal
