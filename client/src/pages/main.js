import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes, ThemeProvider } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaDiscord, FaStore, FaUsers, FaNewspaper, FaSun, FaMoon } from 'react-icons/fa';
import Header from '../components/header';
import Footer from '../components/footer';
import Modal from '../components/modal';


const lightTheme = {
  body: '#f0f4f8',
  text: '#333333',
  primary: '#3b82f6',
  secondary: '#10b981',
  background: '#ffffff',
  card: '#ffffff',
  heroGradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
  modal: {
    background: '#e0e0e0',
    text: '#333333',
  },
};

const darkTheme = {
  body: '#0f172a',
  text: '#e2e8f0',
  primary: '#3b82f6',
  secondary: '#10b981',
  background: '#1e293b',
  card: '#334155',
  heroGradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
  modal: {
    background: '#1a1a2e',
    text: '#ffffff',
  },
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
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

  @media (max-width: 768px) {
    body {
      padding-top: 23px;
    }
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  padding: 6rem 0;
  animation: ${fadeIn} 1s ease-out;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Hero = styled(Section)`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
              url('https://i.ibb.co/HpLM9wC/image-2024-07-10-192428207.png') no-repeat center center;
  background-size: cover;
  text-align: center;
  padding: 0;
  position: relative;
  overflow: hidden;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem;
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #e2e8f0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? props.theme.primary : props.theme.secondary};
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ServerInfo = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  margin-top: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ServerAddress = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  margin-right: 1rem;
  color: #ffffff;
`;

const Features = styled(Section)`
  background-color: ${props => props.theme.background};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme.card};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const FeatureIcon = styled.span`
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
  color: ${props => props.theme.primary};
`;

const Store = styled(Section)`
  background-color: ${props => props.theme.body};
  padding: 6rem 0;
`;

const StoreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoreItem = styled.div`
  background-color: ${props => props.theme.card};
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const StoreItemImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  ${StoreItem}:hover & img {
    transform: scale(1.05);
  }
`;

const StoreItemContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const StoreItemTitle = styled.h3`
  margin-top: 0;
  font-size: 1.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const StoreItemDescription = styled.p`
  margin-bottom: 1.5rem;
  flex-grow: 1;
  font-size: 0.95rem;
  line-height: 1.6;
  color: ${props => props.theme.text}cc;
`;

const StoreItemButton = styled(Button)`
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Newsletter = styled(Section)`
  background-color: ${props => props.theme.background};
`;

const NewsletterForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 2rem auto 0;
`;

const NewsletterInput = styled.input`
  flex-grow: 1;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.primary};
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  border-radius: 50px 0 0 50px;
  font-size: 1rem;

  &::placeholder {
    color: ${props => props.theme.text}80;
  }
`;

const NewsletterButton = styled(Button)`
  border-radius: 0 50px 50px 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.text};
`;

const PlayerCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  color: #e2e8f0;
  font-size: 1.2rem;
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const MobileSpacing = styled.div`
  @media (max-width: 768px) {
    height: 40px;
  }
`;

const App = () => {
  const [copied, setCopied] = useState(false);
  const [playerCount, setPlayerCount] = useState(0);
  const [email, setEmail] = useState('');
  const [theme, setTheme] = useState('dark');
  const [showModal, setShowModal] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerCount(Math.floor(Math.random() * 100));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Abonnert:', email);
    setEmail('');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <MobileSpacing />
      <StyledHeader />
      <ThemeToggle onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </ThemeToggle>

      <Hero>
        <Container>
          <HeroContent>
            <HeroTitle>Velkommen til Jotunheim MC</HeroTitle>
            <HeroSubtitle>Begiv deg ut på et episk norrønt eventyr</HeroSubtitle>
            <ButtonGroup>
              <Button primary>
                <FaDiscord /> Bli med på Discord
              </Button>
              <Button>
                <FaStore /> Besøk butikken
              </Button>
            </ButtonGroup>
            <ServerInfo>
              <ServerAddress>spill.jotunmc.no</ServerAddress>
              <CopyToClipboard text="spill.jotunmc.no" onCopy={handleCopy}>
                <Button>{copied ? 'Kopiert!' : 'Kopier'}</Button>
              </CopyToClipboard>
            </ServerInfo>
            <PlayerCount>
              <FaUsers style={{ marginRight: '0.5rem' }} /> Spillere pålogget: {playerCount}
            </PlayerCount>
          </HeroContent>
        </Container>
      </Hero>

      <Features>
        <Container>
          <SectionTitle>Nøkkelfunksjoner</SectionTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>🏰</FeatureIcon>
              <h3>Massive norrøn-inspirerte byggverk</h3>
              <p>Utforsk intrikate strukturer inspirert av norrøn mytologi.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>⚔️</FeatureIcon>
              <h3>Episke PvP-kamper</h3>
              <p>Delta i spennende kamper med andre spillere.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🌳</FeatureIcon>
              <h3>Tilpassede nordiske biomer</h3>
              <p>Oppdag unike landskap fylt med nordisk flora og fauna.</p>
            </FeatureCard>
            <FeatureCard>
              <FeatureIcon>🛡️</FeatureIcon>
              <h3>Unike oppdrag og utfordringer</h3>
              <p>Begiv deg ut på episke oppdrag og møt utfordrende prøvelser.</p>
            </FeatureCard>
          </FeatureGrid>
        </Container>
      </Features>

      <Store>
        <Container>
          <SectionTitle>Serverbutikk</SectionTitle>
          <StoreGrid>
            <StoreItem>
              <StoreItemImage>
                <img src="https://i.ibb.co/MgFM3GD/49929125-47aa-4347-95e4-54c516629149.jpg" alt="VIP Rang" />
              </StoreItemImage>
              <StoreItemContent>
                <div>
                  <StoreItemTitle>VIP Rang</StoreItemTitle>
                  <StoreItemDescription>Få eksklusive fordeler og goder som VIP-spiller. Inkluderer spesielle kosmetiske effekter, prioritert servertilgang og mer!</StoreItemDescription>
                </div>
                <StoreItemButton>Kjøp nå</StoreItemButton>
              </StoreItemContent>
            </StoreItem>
            <StoreItem>
              <StoreItemImage>
                <img src="https://via.placeholder.com/400x400?text=Kosmetisk+Pakke" alt="Kosmetisk Pakke" />
              </StoreItemImage>
              <StoreItemContent>
                <div>
                  <StoreItemTitle>Kosmetisk Pakke</StoreItemTitle>
                  <StoreItemDescription>Lås opp unike skins og emotes for å skille deg ut på serveren. Inneholder eksklusive norrøn-inspirerte kosmetiske elementer.</StoreItemDescription>
                </div>
                <StoreItemButton>Kjøp nå</StoreItemButton>
              </StoreItemContent>
            </StoreItem>
            <StoreItem>
              <StoreItemImage>
                <img src="https://via.placeholder.com/400x400?text=Ressursbundle" alt="Ressursbundle" />
              </StoreItemImage>
              <StoreItemContent>
                <div>
                  <StoreItemTitle>Ressursbundle</StoreItemTitle>
                  <StoreItemDescription>Boost spillopplevelsen din med ekstra ressurser. Denne pakken inneholder sjeldne materialer og verktøy for å gi deg en flying start.</StoreItemDescription>
                </div>
                <StoreItemButton>Kjøp nå</StoreItemButton>
              </StoreItemContent>
            </StoreItem>
          </StoreGrid>
        </Container>
      </Store>

      <Newsletter>
        <Container>
          <SectionTitle>Hold deg oppdatert</SectionTitle>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput 
              type="email" 
              placeholder="Din e-postadresse" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <NewsletterButton type="submit">Abonner</NewsletterButton>
          </NewsletterForm>
        </Container>
      </Newsletter>
      <Footer />

      <Modal isOpen={showModal} onClose={closeModal} />
    </ThemeProvider>
  );
};

export default App;
