import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Content>
        <ProfileImage src="https://via.placeholder.com/300x300" alt="Vaughn Gavin" />
        <Name>Vaughn Gavin</Name>
        <Title>Senior Software Engineer & CTO</Title>
        <SocialLinks>
          <SocialLink href="#"><i className="fab fa-github"></i></SocialLink>
          <SocialLink href="#"><i className="fab fa-linkedin"></i></SocialLink>
          <SocialLink href="#"><i className="fab fa-twitter"></i></SocialLink>
        </SocialLinks>
        <Button href="#contact">Hire Me</Button>
      </Content>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.aside`
  background-color: var(--bg-dark);
  padding: 2rem;
  position: fixed;
  width: 450px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: 4rem 2rem;
  }
`

const Content = styled.div`
  text-align: center;
`

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 4px solid var(--primary);
`

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--light);
`

const Title = styled.h2`
  color: var(--gray);
  font-size: 1.2rem;
  margin-bottom: 2rem;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--card-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light);
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary);
    transform: translateY(-3px);
  }
`

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--primary);
  color: var(--light);
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(247, 80, 35, 0.3);
  }
`

export default Sidebar
