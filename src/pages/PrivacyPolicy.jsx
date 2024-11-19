import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PrivacyPolicy = () => {
  
  const handleBack = () => {
    navigate('/')
  }

  return (
    
    <PolicyContainer>
      <BackLink to="/">← Back to Home</BackLink>
      <PolicyHeader>Privacy Policy</PolicyHeader>
      <LastUpdated>Last updated: {new Date().toLocaleDateString()}</LastUpdated>
      
      <PolicySection>
        <SectionTitle>1. Introduction</SectionTitle>
        <SectionContent>
          This Privacy Policy describes how Vaughn Gavin ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website.
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>2. Information We Collect</SectionTitle>
        <SectionContent>
          <ul>
            <li>Contact information (name, email address, phone number)</li>
            <li>Usage data (IP address, browser type, device information)</li>
            <li>Communication preferences</li>
          </ul>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>3. How We Use Your Information</SectionTitle>
        <SectionContent>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To communicate with you about our services</li>
            <li>To improve our website and user experience</li>
            <li>To comply with legal obligations</li>
          </ul>
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>4. Data Security</SectionTitle>
        <SectionContent>
          We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or destruction.
        </SectionContent>
      </PolicySection>

      <PolicySection>
        <SectionTitle>5. Contact Us</SectionTitle>
        <SectionContent>
          If you have any questions about this Privacy Policy, please contact us at:
          <ContactInfo>
            <div>Email: privacy@vaughngavin.com</div>
          </ContactInfo>
        </SectionContent>
      </PolicySection>
    </PolicyContainer>
  )
}

export default PrivacyPolicy

const PolicyContainer = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 0 5%;
  color: var(--gray);
`

const PolicyHeader = styled.h1`
  font-size: 2.5rem;
  color: var(--light);
  margin-bottom: 1rem;
`

const LastUpdated = styled.p`
  color: var(--gray);
  margin-bottom: 3rem;
`

const PolicySection = styled.section`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  color: var(--light);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const SectionContent = styled.div`
  line-height: 1.8;
  
  ul {
    list-style-position: inside;
    margin: 1rem 0;
  }

  li {
    margin-bottom: 0.5rem;
  }
`

const ContactInfo = styled.div`
  margin-top: 1rem;
  
  div {
    margin-bottom: 0.5rem;
  }
`
const BackLink = styled(Link)`
  display: inline-block;
  color: var(--primary);
  margin-bottom: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-light);
  }
`
