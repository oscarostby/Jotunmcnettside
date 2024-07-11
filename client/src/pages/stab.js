import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components';
import { FaSun, FaMoon, FaCrown, FaWrench, FaDiscord } from 'react-icons/fa';
import Header from '../components/header';
import Footer from '../components/footer';

// Importer avatarbildene
import avatarBody2 from '../bilder/avatarBody2.png';
import avatarBody3 from '../bilder/avatarBody3.png';
import avatarBody4 from '../bilder/avatarBody4.png';
import avatarBody5 from '../bilder/avatarBody5.png';
import avatarBody6 from '../bilder/avatarBody6.png';

const lightTheme = {
  body: '#f0f4f8',
  text: '#2d3748',
  primary: '#3b82f6',
  secondary: '#10b981',
  background: '#ffffff',
  card: '#ffffff',
  heroGradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
};

const darkTheme = {
  body: '#1a202c',
  text: '#e2e8f0',
  primary: '#4299e1',
  secondary: '#38b2ac',
  background: '#1e293b',
  card: '#2d3748',
  heroGradient: 'linear-gradient(135deg, #2b6cb0 0%, #4299e1 100%)',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }
  
  * {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div`
  background: ${props => props.theme.heroGradient};
  color: white;
  padding: 8rem 2rem 12rem;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 80%);
    animation: ${float} 15s infinite linear;
  }
  @media (max-width: 768px) {
    padding: 6rem 1rem 10rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  @media (max-width: 968px) {
    margin-bottom: 2rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 0 2rem;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  background-color: white;
  color: ${props => props.theme.primary};
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StaffContainer = styled.div`
  max-width: 1200px;
  margin: -6rem auto 4rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 10;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: -4rem;
    padding: 1rem;
  }
`;

const StaffCard = styled.div`
  background-color: ${props => props.theme.card};
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const StaffImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 4px solid ${props => props.theme.primary};
`;

const StaffName = styled.h2`
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const StaffRole = styled.p`
  color: ${props => props.theme.secondary};
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ThemeToggle = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${props => props.theme.card};
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 13px;
    width: 40px;
    height: 40px;
  }
`;

const staffMembers = [
  { name: "P1ere", role: "Eier", image: avatarBody5, icon: FaCrown, discord: "#" },
  { name: "Drkolore", role: "Eier", image: avatarBody3, icon: FaCrown, discord: "#" },
  { name: "Solbakkenunge", role: "Moderator", image: avatarBody2, icon: FaWrench, discord: "#" },
  { name: "Sttrake", role: "Moderator", image: avatarBody4, icon: FaWrench, discord: "#" },
  { name: "Panqada", role: "Moderator", image: avatarBody6, icon: FaWrench, discord: "#" },
];

const StaffPage = () => {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <PageContainer>
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </ThemeToggle>
        <Header />
        <Hero>
          <HeroContent>
            <HeroText>
              <HeroTitle>Møt Vårt<br />Team</HeroTitle>
              <HeroSubtitle>Dedikerte personer som holder serveren vår i gang og sikrer en fantastisk opplevelse for alle spillere.</HeroSubtitle>
              <HeroButton href="#staff">Se Teamet</HeroButton>
            </HeroText>
            <HeroImage>
              {/* Du kan legge til en illustrasjon eller et bilde her */}
            </HeroImage>
          </HeroContent>
        </Hero>
        <StaffContainer id="staff">
          {staffMembers.map((staff, index) => (
            <StaffCard key={index}>
              <StaffImage src={staff.image} alt={staff.name} />
              <StaffName>{staff.name}</StaffName>
              <StaffRole>
                <staff.icon /> {staff.role}
              </StaffRole>
              <SocialLinks>
                <SocialIcon href={staff.discord} target="_blank" rel="noopener noreferrer">
                  <FaDiscord />
                </SocialIcon>
              </SocialLinks>
            </StaffCard>
          ))}
        </StaffContainer>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};

export default StaffPage;
