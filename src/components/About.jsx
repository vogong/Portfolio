import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutGrid>
        <AboutContent>
          <AboutText>
             As a CTO and Senior Software Engineer, I combine technical expertise with strategic leadership to drive innovation and operational excellence. With over 20 years of experience, I specialize in architecting scalable applications and steering high-performing engineering teams. My diverse portfolio includes telephony call center solutions, engineering facilitation, sports technology, large-scale agricultural monitoring systems, and, most recently, advancements in e-commerce and closed-loop financial services.
          </AboutText>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard 
                key={index}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SkillIcon className={skill.icon}></SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>
        </AboutContent>
        <StatsContainer>
          {stats.map((stat, index) => (
            <StatCard key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsContainer>
      </AboutGrid>
    </AboutSection>
  )
}

const skills = [
  {
    icon: 'fas fa-code',
    title: 'Full Stack Development',
    description: 'Building end-to-end applications with modern technologies'
  },
  {
    icon: 'fas fa-cloud',
    title: 'Cloud Architecture',
    description: 'Designing scalable cloud infrastructure, microservices and serverless applications'
  },
  {
    icon: 'fas fa-users',
    title: 'Team Leadership',
    description: 'Leading and mentoring engineering teams, support engineers and QA staff'
  },
  {
    icon: 'fas fa-cogs',
    title: 'System Design',
    description: 'Creating robust and scalable architectures, for thelephony, engineering and demanding web applications'
  },
  {
    icon: 'fas fa-code',
    title: 'Embedded Systems',
    description: 'Building embeddeded systems for IoT devices, health monitoring and more'
  },

]

const stats = [
  { number: '20+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '3+', label: 'Awards' }
]

const AboutSection = styled.section`
  padding: 100px 5%;
  background: var(--bg-dark);
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`

const AboutContent = styled.div``

const AboutText = styled.p`
  color: var(--gray);
  font-size: 1.1rem;
  margin-bottom: 3rem;
  line-height: 1.8;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const SkillCard = styled.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
`

const SkillIcon = styled.i`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
`

const SkillTitle = styled.h3`
  margin-bottom: 1rem;
  color: var(--light);
`

const SkillDescription = styled.p`
  color: var(--gray);
`

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

const StatCard = styled.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
`

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  color: var(--gray);
`

export default About

