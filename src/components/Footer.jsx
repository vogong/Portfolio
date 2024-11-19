import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterColumn>
            <FooterLogo>VG</FooterLogo>
            <FooterText>
              Building exceptional digital experiences through innovative
              engineering and strategic leadership.
            </FooterText>
            <SocialLinks>
              <SocialLink
                href="https://github.com/vogong"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/vaughngavin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </SocialLink>
            </SocialLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLinks>
              <FooterLink href="#home">Home</FooterLink>
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#portfolio">Portfolio</FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Legal</FooterTitle>
            <FooterLinks>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms and Conditions</FooterLink>
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Contact</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <i className="fas fa-envelope"></i>
                Contact: <a href="mailto:info@vaughngavin.com">info@vaughngavin.com</a>
              </ContactItem>
              <ContactItem>
                <i className="fas fa-map-marker-alt"></i>
                Dundas, Ontario, Canada
              </ContactItem>
            </ContactInfo>
          </FooterColumn>
        </FooterGrid>

        <FooterDivider />

        <FooterBottom>
          <Copyright>
            © {currentYear} Vaughn Gavin. All rights reserved.
          </Copyright>
          <PrivacyLinks>
            <PrivacyLink href="/privacy">Privacy</PrivacyLink>
            <PrivacyLink href="/terms">Terms</PrivacyLink>
          </PrivacyLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: var(--bg-dark);
  padding: 80px 0 20px;
  color: var(--gray);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--light);
  margin-bottom: 1rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FooterText = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FooterTitle = styled.h3`
  color: var(--light);
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLink = styled.a`
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

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
`;
// const SocialIcon = styled.a`
//   color: var(--gray);
//   font-size: 1.2rem;
//   transition: color 0.3s ease;

//   &:hover {
//     color: var(--primary);
//   }
// `

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: var(--primary);
  }
`;

const FooterDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Copyright = styled.div`
  font-size: 0.9rem;
`;

const PrivacyLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const PrivacyLink = styled.a`
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary);
  }
`;
