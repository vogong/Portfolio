import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import FloatingBackButton from '../components/shared/FloatingBackButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TermsOfService = () => {
    
    const handleBack = () => {
        navigate('/')
      }

      
  return (
    <PageWrapper>
      <SEO 
        title="Terms of Service - Vaughn Gavin"
        description="Terms of Service for Vaughn Gavin's portfolio website"
      />
      <Container>
        <BackLink to="/">← Back to Home</BackLink>
        <Content>
          <PageTitle>Terms of Service</PageTitle>
          <LastUpdated>Last updated: {new Date().toLocaleDateString()}</LastUpdated>
          
          <Section>
            <SectionTitle>1. Agreement to Terms</SectionTitle>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and 
              provisions of this agreement. If you do not agree to abide by these terms, please do not 
              use this website.
            </p>
          </Section>

          <Section>
            <SectionTitle>2. Intellectual Property Rights</SectionTitle>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, 
              and software, is the property of Vaughn Gavin and is protected by intellectual property laws.
            </p>
            <List>
              <li>You may not use any content without express written permission</li>
              <li>You may not distribute or reproduce content for commercial purposes</li>
              <li>All trademarks and logos are property of their respective owners</li>
            </List>
          </Section>

          <Section>
            <SectionTitle>3. Resume Request Service</SectionTitle>
            <p>
              When using the resume request service, you agree to:
            </p>
            <List>
              <li>Provide accurate and truthful information</li>
              <li>Use the service for legitimate business or recruitment purposes only</li>
              <li>Not share received information with third parties</li>
              <li>Not use the information for spam or harassment purposes</li>
            </List>
          </Section>

          <Section>
            <SectionTitle>4. User Responsibilities</SectionTitle>
            <p>
              When using this website, you agree to:
            </p>
            <List>
              <li>Not attempt to gain unauthorized access to any portion of the website</li>
              <li>Not interfere with or disrupt the website's operation</li>
              <li>Not engage in any activity that could harm the website or its users</li>
              <li>Comply with all applicable laws and regulations</li>
            </List>
          </Section>

          <Section>
            <SectionTitle>5. Disclaimer</SectionTitle>
            <p>
              This website is provided "as is" without any representations or warranties, express or implied. 
              Vaughn Gavin makes no representations or warranties regarding the accuracy or completeness of 
              the information provided.
            </p>
          </Section>

          <Section>
            <SectionTitle>6. Limitation of Liability</SectionTitle>
            <p>
              In no event shall Vaughn Gavin be liable for any indirect, incidental, special, consequential, 
              or punitive damages arising out of or relating to your use of the website.
            </p>
          </Section>

          <Section>
            <SectionTitle>7. Changes to Terms</SectionTitle>
            <p>
              We reserve the right to modify these terms at any time. We will notify users of any material 
              changes by posting the new terms on this website. Continued use of the website after such 
              changes constitutes acceptance of the new terms.
            </p>
          </Section>

          <Section>
            <SectionTitle>8. Contact Information</SectionTitle>
            <p>
              If you have any questions about these Terms of Service, please contact us at:<br />
              Email: legal@vaughngavin.com
            </p>
          </Section>
          <FloatingBackButton onClick={handleBack}>
            <FontAwesomeIcon icon="arrow-left" />
            <span>Back to Home</span>
          </FloatingBackButton>
        </Content>
      </Container>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  min-height: 100vh;
  background: var(--dark);
  padding: 80px 0;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
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

const Content = styled.div`
  background: var(--card);
  padding: 2rem;
  border-radius: 12px;
`

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: var(--light);
  margin-bottom: 1rem;
`

const LastUpdated = styled.p`
  color: var(--gray);
  font-size: 0.9rem;
  margin-bottom: 2rem;
`

const Section = styled.section`
  margin-bottom: 2rem;

  p {
    color: var(--gray);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`

const SectionTitle = styled.h2`
  color: var(--light);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const List = styled.ul`
  color: var(--gray);
  margin-left: 1.5rem;
  margin-bottom: 1rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`

export default TermsOfService
