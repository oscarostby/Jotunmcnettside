import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components';
import { FaSun, FaMoon, FaUsers, FaGamepad, FaTwitch, FaServer } from 'react-icons/fa';
import Header from '../components/header';
import Footer from '../components/footer';

const lightTheme = {
  body: '#f0f4f8',
  text: '#2d3748',
  primary: '#3b82f6',
  secondary: '#10b981',
  background: '#ffffff',
  card: '#ffffff',
  accent: '#f59e0b',
};

const darkTheme = {
  body: '#1a202c',
  text: '#e2e8f0',
  primary: '#4299e1',
  secondary: '#38b2ac',
  background: '#1e293b',
  card: '#2d3748',
  accent: '#fbbf24',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
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

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 8rem 2rem 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    padding: 6rem 1rem 3rem;
  }
`;

const TopContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const TopTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const TopSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0;
  opacity: 0.9;
  animation: ${fadeIn} 0.5s ease-out 0.2s forwards;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: column;
  }
`;

const Section = styled.section`
  width: calc(50% - 1rem);
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: ${props => props.theme.card};
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.primary};
  font-size: 1.8rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.accent};
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0;
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

const StyledHeader = styled(Header)`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const AboutUs = () => {
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
        <StyledHeader />
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </ThemeToggle>

        <TopSection>
          <TopContent>
            <TopTitle>Om Jotunheim MC</TopTitle>
            <TopSubtitle>En unik Minecraft-opplevelse skapt for spillere og streamere</TopSubtitle>
          </TopContent>
        </TopSection>

        <ContentContainer>
          <Section>
            <SectionTitle><FaServer /> Vår Historie</SectionTitle>
            <Paragraph>
              Jotunheim MC er resultatet av et unikt samarbeid mellom skaperne av NSPM og Kysten MC. 
              Vi har forent våre krefter for å skape den ultimate Minecraft-serveren som imøtekommer 
              behovene til både dedikerte spillere og engasjerte streamere.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle><FaGamepad /> For Spillere</SectionTitle>
            <Paragraph>
              Opplev unike, tilpassede plugins, jevnlige events, et balansert økonomisystem, 
              og muligheten til å bygge imponerende baser i vårt vennlige community. Enten du er 
              en erfaren Minecraft-veteran eller ny i spillet, har Jotunheim MC noe for deg.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle><FaTwitch /> For Streamere</SectionTitle>
            <Paragraph>
              Dra nytte av integrert Twitch-støtte, spesielle streamer-events, muligheter for 
              private turneringer, og dedikert support for en sømløs streaming-opplevelse. Vi gir 
              deg verktøyene du trenger for å skape engasjerende innhold for publikummet ditt.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle><FaUsers /> Vårt Community</SectionTitle>
            <Paragraph>
              I hjertet av Jotunheim MC er vårt dedikerte community. Vi er stolte av å ha skapt 
              et inkluderende miljø hvor kreativitet blomstrer, vennskap dannes, og episke eventyr 
              utfolder seg. Bli med oss og bli en del av noe større!
            </Paragraph>
          </Section>
        </ContentContainer>

        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};

export default AboutUs;
