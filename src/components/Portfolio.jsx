import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Import project images
import project1 from '../assets/images/allxs.png'
import project2 from '../assets/images/pos.png'
import project3 from '../assets/images/ginkgo.png'
import project4 from '../assets/images/awarewear.png'
import project5 from '../assets/images/vasoft.png'
import project6 from '../assets/images/saffasell.png'
import project7 from '../assets/images/ai.png'

const projects = [
  {
    id: 1,
    title: 'E-Commerce/Fintec Platform',
    category: 'Web Development',
    image: project1,
    description: 'A modern multi vendor, multi client e-commerce platform built with Angular and Asp.net core. Managing over 30000 orders per day. with over 150000 active users.',
    technologies: ['Angular 18', 'Asp.Net core', 'SQL', 'SSRS', 'MongoDB', 'AWS', 'Kafta', 'RabbitMQ'],
    link: '#'
  },
  {
    id: 2,
    title: 'Point of Sale',
    category: 'Android/Mobile Development',
    image: project2,
    description: 'A closed loop cashless, cash and credit card POS system with over 500 vendors and thousands of orders per day.',
    technologies: ['Java', 'Android', 'NFC', 'RabbitMQ', 'QR Code'],
    link: '#'
  },
  {
    id: 3,
    title: 'Agricultural monitoring system',
    category: 'System Architecture',
    image: project3,
    description: 'Real-time green roof monitoring with IoT sensors.',
    technologies: ['Anguar 12', 'Asp.Net', 'Iot', 'AWS', 'LTE', 'Raspberry Pi'],
    link: '#'
  },
  {
    id: 4,
    title: 'Concussion detection sensor',
    category: 'System Architecture',
    image: project4,
    description: 'Api server , android application and device design and firmware for a concussion detection device.',
    technologies: ['AWS', 'Angular', 'Asp.Net', 'Keil', 'C++', 'Iot'],
    link: '#'
  },
  {
    id: 5,
    title: 'Call center solution',
    category: 'Application/Telephony',
    image: project5,
    description: 'System design and implementation of various call center solutions, including IVR, ACD, and Predictive dialing. Deployed in over 1000 seats.',
    technologies: ['C', 'C++', 'RabbitMQ', 'Asterisk', 'WebRTC'],
    link: '#'
  },
  {
    id: 6,
    title: 'Special Projects',
    category: 'Other',
    image: project6,
    description: 'Various projects including IoT, Node.js, OpenFoam, Paraview, React, Laravel, and more.',
    technologies: ['React', 'Node.js', 'MQTT', 'Postgres', 'Laravel', 'OpenFoam'],
    link: '#'
  },
  {
    id: 7,
    title: 'Artificial Intelligence',
    category: 'AI',
    image: project7,
    description: 'AI Agents, RAG, Vector Search, and more.',
    technologies: ['Pythion', 'Tensorflow', 'RAG', 'Vector Search', 'AI Agents'],
    link: '#'
  }
]

const categories = ['All', 'Web Development', 'Android/Mobile Development', 'System Architecture', 'Application/Telephony', 'Mobile Development', 'Other', 'AI']

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  )

  return (
    <PortfolioSection id="portfolio">
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

const PortfolioSection = styled.section`
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
const SectionTitle = styled.div`
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`

const Categories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0 3rem;
`

const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  color: ${props => props.active ? 'var(--light)' : 'var(--gray)'};
  background: ${props => props.active ? 'var(--primary)' : 'var(--card)'};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? 'var(--primary)' : 'var(--border)'};
    transform: translateY(-2px);
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`

const ProjectCard = styled.div`
  background: var(--card);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ProjectImage = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const ProjectLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectCategory = styled.div`
  color: var(--primary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`

const ProjectTitle = styled.h3`
  color: var(--light);
  margin-bottom: 1rem;
  font-size: 1.2rem;
`

const ProjectDescription = styled.p`
  color: var(--gray);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const TechTag = styled.span`
  padding: 0.3rem 0.8rem;
  background: var(--dark);
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--gray);
`

export default Portfolio
