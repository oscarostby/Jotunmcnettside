import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components';
import { FaSun, FaMoon, FaBook, FaComments, FaGamepad } from 'react-icons/fa';
import Header from '../components/header';
import Footer from '../components/footer';

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
  background: '#2d3748',
  card: '#2d3748',
  heroGradient: 'linear-gradient(135deg, #2b6cb0 0%, #4299e1 100%)',
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');
  
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
  padding: 10rem 2rem 14rem;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
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

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: -2px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const RulesContainer = styled.div`
  max-width: 1200px;
  margin: -8rem auto 4rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: -6rem;
    padding: 1rem;
  }
`;

const RulesSection = styled.section`
  background-color: ${props => props.theme.card};
  border-radius: 16px;
  padding: 2.5rem;
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

const RulesTitle = styled.h2`
  color: ${props => props.theme.primary};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    font-size: 1.5em;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RulesList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const RuleItem = styled.li`
  margin-bottom: 1.25rem;
  padding-left: 1.75rem;
  position: relative;
  line-height: 1.6;
  font-size: 1.1rem;

  &:before {
    content: "•";
    color: ${props => props.theme.secondary};
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5em;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
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

const StyledHeader = styled(Header)`
  background-color: #202c3c;
`;

const Rules = () => {
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

        <Hero>
          <HeroTitle>Serverregler</HeroTitle>
          <HeroSubtitle>For å sikre en rettferdig og hyggelig spillopplevelse for alle</HeroSubtitle>
        </Hero>

        <RulesContainer>
          <RulesSection>
            <RulesTitle><FaBook /> Generelle Regler</RulesTitle>
            <RulesList>
              <RuleItem>Respekter alle spillere og personalet</RuleItem>
              <RuleItem>Ingen reklame for andre servere</RuleItem>
              <RuleItem>Ikke be om å bli stab</RuleItem>
              <RuleItem>Ikke utgi deg for å være personale</RuleItem>
              <RuleItem>VPN/proxy er forbudt uten tillatelse</RuleItem>
              <RuleItem>Ærlig handel mellom spillere</RuleItem>
              <RuleItem>Følg byggebegrensninger</RuleItem>
            </RulesList>
          </RulesSection>

          <RulesSection>
            <RulesTitle><FaComments /> Chat-regler</RulesTitle>
            <RulesList>
              <RuleItem>Ingen rasisme eller hatefulle ytringer</RuleItem>
              <RuleItem>Unngå caps lock (roping)</RuleItem>
              <RuleItem>Ingen uautoriserte lenker</RuleItem>
              <RuleItem>Behandle alle med respekt</RuleItem>
              <RuleItem>Ingen banning i chat</RuleItem>
              <RuleItem>All chat overvåkes</RuleItem>
              <RuleItem>Unngå spamming</RuleItem>
              <RuleItem>Ingen mobbing eller trakassering</RuleItem>
            </RulesList>
          </RulesSection>

          <RulesSection>
            <RulesTitle><FaGamepad /> Spillregler</RulesTitle>
            <RulesList>
              <RuleItem>Ingen tigging</RuleItem>
              <RuleItem>Griefing er tillatt - beskytt eiendelene dine</RuleItem>
              <RuleItem>Ikke krasj serveren eller bots</RuleItem>
              <RuleItem>Ingen hacking eller cheating</RuleItem>
              <RuleItem>Store redstone-enheter krever godkjenning</RuleItem>
              <RuleItem>Ingen upassende bygg eller skins</RuleItem>
              <RuleItem>Ingen svindel mot andre spillere</RuleItem>
              <RuleItem>Respekter byggegrenser rundt spawn</RuleItem>
              <RuleItem>Ikke utnytt bugs for egen vinning</RuleItem>
            </RulesList>
          </RulesSection>
        </RulesContainer>

        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};

export default Rules;
