import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const MainContent = () => {
  return (
    <MainContainer>
      <Section>
        <SectionTitle>About Me</SectionTitle>
        <AboutText>
          A passionate Senior Software Engineer and CTO with extensive experience in building scalable applications 
          and leading technical teams. Specializing in full-stack development, cloud architecture, and technical strategy.
        </AboutText>
        <Stats>
          <StatItem>
            <StatNumber>10+</StatNumber>
            <StatLabel>Years of Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>100+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50+</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatItem>
        </Stats>
      </Section>

      <Section>
        <SectionTitle>What I Do</SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon src={`https://via.placeholder.com/50x50`} alt={service.title} />
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Section>

      <Section>
        <SectionTitle>Portfolio</SectionTitle>
        <PortfolioGrid>
          {projects.map((project, index) => (
            <PortfolioItem key={index}>
              <PortfolioImage src={`https://via.placeholder.com/400x300`} alt={project.title} />
              <PortfolioOverlay>
                <PortfolioTitle>{project.title}</PortfolioTitle>
                <PortfolioCategory>{project.category}</PortfolioCategory>
              </PortfolioOverlay>
            </PortfolioItem>
          ))}
        </PortfolioGrid>
      </Section>
    </MainContainer>
  )
}

const services = [
  {
    title: "Technical Leadership",
    description: "Strategic technical direction and team leadership"
  },
  {
    title: "Full Stack Development",
    description: "End-to-end application development"
  },
  {
    title: "Cloud Architecture",
    description: "Scalable cloud solutions and infrastructure"
  },
  {
    title: "System Design",
    description: "Robust and scalable system architecture"
  }
]

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development"
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development"
  },
  {
    title: "AI Analytics Dashboard",
    category: "Data Science"
  },
  {
    title: "Cloud Migration",
    category: "DevOps"
  }
]

const MainContainer = styled.main`
  margin-left: 450px;
  padding: 4rem;
  background: var(--dark);

  @media (max-width: 1200px) {
    margin-left: 0;
    padding: 2rem;
  }
`

const Section = styled.section`
  margin-bottom: 6rem;
`

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--light);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background: var(--primary);
  }
`

const AboutText = styled.p`
  color: var(--gray);
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 800px;
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`

const StatItem = styled.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
`

const StatNumber = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const StatLabel = styled.div`
  color: var(--gray);
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`

const ServiceCard = styled.div`
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ServiceIcon = styled.img`
  margin-bottom: 1rem;
`

const ServiceTitle = styled.h3`
  margin-bottom: 1rem;
  color: var(--light);
`

const ServiceDescription = styled.p`
  color: var(--gray);
`

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const PortfolioItem = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    img {
      transform: scale(1.1);
    }
    
    div {
      opacity: 1;
    }
  }
`

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`

const PortfolioOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(247, 80, 35, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`

const PortfolioTitle = styled.h3`
  color: var(--light);
  margin-bottom: 0.5rem;
`

const PortfolioCategory = styled.p`
  color: var(--light);
`

export default MainContent
