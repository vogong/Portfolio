import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import heroImage from '../assets/images/hero.png'
import ResumeModal from './ResumeModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <HeroSection id="home">
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ProfileImageWrapper>
            <ProfileImage src={heroImage} alt="Vaughn Gavin" />
          </ProfileImageWrapper>
          <HeroTitle>
            Vaughn Gavin
            <GradientSpan>Senior Software Engineer & CTO</GradientSpan>
          </HeroTitle>
          <HeroText>
            Building exceptional digital experiences through innovative engineering and strategic leadership
          </HeroText>
          <HeroButtons>
            <PrimaryButton href="#portfolio">View Work</PrimaryButton>
            <SecondaryButton href="#contact"  onClick={() => setIsModalOpen(true)}>Get in Touch</SecondaryButton>
          </HeroButtons>
          <SocialLinks>
            <SocialLink href="https://github.com/vogong" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/vaughngavin" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
          </SocialLinks>
        </motion.div>
      </HeroContent>
      <ScrollIndicator>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </ScrollIndicator>
      <ResumeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </HeroSection>
  )
}

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;
  position: relative;
  background: var(--bg-dark);
`

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`

const ProfileImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  padding: 3px;
  background: var(--gradientlight);
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--bg-dark);
`

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const GradientSpan = styled.span`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const HeroText = styled.p`
  color: var(--gray);
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  margin-bottom: 2rem;
`

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

const PrimaryButton = styled.a`
  padding: 1rem 2rem;
  background: var(--gradient);
  border-radius: 30px;
  color: var(--lighttext);
  font-weight: 500;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`

const SecondaryButton = styled.a`
  padding: 1rem 2rem;
  border: 2px solid var(--primary);
  border-radius: 30px;
  color: var(--light);
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary);
    transform: translateY(-3px);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`

const SocialIcon = styled.a`
  color: var(--gray);
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }
`

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  color: var(--gray);
  font-size: 1.5rem;
`
const SocialLink = styled.a`
  color: var(--gray);
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }
`

export default Hero
