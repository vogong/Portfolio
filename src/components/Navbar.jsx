import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ResumeModal from './ResumeModal'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    
    <Nav scrolled={scrolled}>
      <Logo>VG</Logo>
      <NavLinks>
        <DesktopNav>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#portfolio">Work</NavLink>
        </DesktopNav>
        <NavButton href="#contact" onClick={() => setIsModalOpen(true)}>Contact</NavButton>
      </NavLinks>
      <ResumeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: ${(props) => (props.scrolled ? "var(--bg-dark)" : "transparent")};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px)" : "none")};
  transition: all 0.3s ease;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: var(--light);
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;
const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavButton = styled.a`
  padding: 0.8rem 1.5rem;
  background: var(--gradient);
  border-radius: 25px;
  color: var(--lighttext);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export default Navbar;
