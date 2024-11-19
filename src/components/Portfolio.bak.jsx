import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import allxsImage from '../assets/images/allxs.png'

const Portfolio = () => {
  return (
    <PortfolioSection id="work">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionTag>My Work</SectionTag>
        <SectionTitle className="section-title">Featured Projects</SectionTitle>
        
        <Categories>
          {categories.map(category => (
            <CategoryButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </Categories>

        <ProjectsGrid>
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              as={motion.div}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
                <ProjectOverlay
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectLinks>
                    <ProjectLink href={project.link} target="_blank">
                      <i className="fas fa-external-link-alt"></i>
                    </ProjectLink>
                    <ProjectLink href={`#project-${project.id}`}>
                      <i className="fas fa-info-circle"></i>
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectOverlay>
              </ProjectImage>
              <ProjectContent>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </motion.div>
    </div>
  </PortfolioSection>
  )
}

const projects = [
  {
    title: 'E-Commerce/Fintec Platform',
    category: 'Web Development',
    description: 'A modern multi vendor, multi client e-commerce platform built with Angular and Asp.net core. Managing over 30000 orders per day. with over 150000 active users.',
    image: allxsImage,
    link: '#'
  },
  {
    title: 'Point of Sale',
    category: 'Android Development',
    description: 'A closed loop cashless, cash and credit card POS system with over 500 vendors and thousands of orders per day.',
    image: 'https://via.placeholder.com/600x400',
    link: '#'
  },
  {
    title: 'Agricultural monitoring system',
    category: 'Application',
    description: 'Real-time green roof monitoring with IoT sensors',
    image: 'https://via.placeholder.com/600x400',
    link: '#'
  },
  {
    title: 'Concussion detection sensor',
    category: 'FIrmware/Iot',
    description: 'Api server , android application and device design and firmware for a concussion detection device',
    image: 'https://via.placeholder.com/600x400',
    link: '#'
  },
  {
    title: 'Call center solution',
    category: 'Telephony',
    description: 'System design and implementation of various call center solutions, including IVR, ACD, and Predictive dialing. Deployed in over 1000 seats.',
    image: 'https://via.placeholder.com/600x400',
    link: '#'
  }
]

const PortfolioSection = styled.section`
  padding: 100px 5%;
  background: var(--dark);
`

const SectionTag = styled.div`
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  text-align: center;
`


const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const ProjectCard = styled.div`
  background: var(--card-bg);
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
`

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`

const ProjectContent = styled.div`
  padding: 2rem;
`

const ProjectCategory = styled.div`
  color: var(--primary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

const ProjectTitle = styled.h3`
  color: var(--light);
  margin-bottom: 1rem;
`

const ProjectDescription = styled.p`
  color: var(--gray);
  margin-bottom: 1.5rem;
`

const ProjectLink = styled.a`
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: gap 0.3s ease;

  &:hover {
    gap: 1rem;
  }
`

export default Portfolio
