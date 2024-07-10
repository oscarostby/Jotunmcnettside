import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components';
import { FaSun, FaMoon, FaEnvelope, FaDiscord, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
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
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 8rem 2rem 12rem;
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    opacity: 0.1;
    animation: ${float} 6s infinite ease-in-out;
  }

  &::before {
    background-color: ${props => props.theme.secondary};
    top: -100px;
    left: -100px;
  }

  &::after {
    background-color: ${props => props.theme.accent};
    bottom: -100px;
    right: -100px;
    animation-delay: -3s;
  }

  @media (max-width: 768px) {
    padding: 6rem 1rem 10rem;
  }
`;

const TopContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TopTextContent = styled.div`
  flex: 1;
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
    margin-bottom: 2rem;
  }
`;

const TopImage = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  animation: ${float} 6s infinite ease-in-out;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    font-size: 3rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: -4rem auto 4rem;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: -2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  background-color: ${props => props.theme.card};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out forwards;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.primary};
  font-size: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.accent};
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;

  svg {
    margin-right: 0.5rem;
    color: ${props => props.theme.accent};
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-bottom: 2px solid ${props => props.theme.primary};
  background-color: transparent;
  color: ${props => props.theme.text};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.accent};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-bottom: 2px solid ${props => props.theme.primary};
  background-color: transparent;
  color: ${props => props.theme.text};
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.accent};
  }
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${props => props.theme.secondary};
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
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
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;

const SubmitMessage = styled.p`
  margin-top: 1rem;
  color: ${props => props.isError ? props.theme.accent : props.theme.secondary};
  font-weight: 600;
`;

const Contact = () => {
  const [theme, setTheme] = useState('dark');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1260714619513864272/9mBITzUp_s3yW6banriVLTV2kqLqhGmdmi7yI5nebPy4Py6I9RHUkbMjXAAjYEuEfRsX';

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsError(false);
    
    const message = {
      content: 'Ny kontaktskjema-innsending!',
      embeds: [{
        title: 'Kontaktskjema Detaljer',
        fields: [
          { name: 'Navn', value: formData.name },
          { name: 'E-post', value: formData.email },
          { name: 'Emne', value: formData.subject },
          { name: 'Melding', value: formData.message }
        ],
        color: 3447003, // En blå farge
      }]
    };

    try {
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      const responseText = await response.text();
      console.log('Discord API Response:', response.status, responseText);

      if (response.ok) {
        setSubmitMessage('Melding sendt! Vi vil kontakte deg snart.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(`Failed to send message: ${response.status} ${responseText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('Det oppstod en feil. Vennligst prøv igjen senere.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <TopTextContent>
              <TopTitle>Kontakt Oss</TopTitle>
              <TopSubtitle>Vi er her for å hjelpe deg med alle dine spørsmål</TopSubtitle>
            </TopTextContent>
            <TopImage>
              <FaEnvelope />
            </TopImage>
          </TopContent>
        </TopSection>

        <ContentContainer>
          <ContactGrid>
            <Section>
              <SectionTitle><FaEnvelope /> Kontaktinformasjon</SectionTitle>
              <ContactInfo>
                <ContactMethod>
                  <FaEnvelope />
                  <span>support@jotunmc.no</span>
                </ContactMethod>
                <ContactMethod>
                  <FaDiscord />
                  <span>Jotunheim MC Discord</span>
                </ContactMethod>
                <ContactMethod>
                  <FaMapMarkerAlt />
                  <span>Minecraft Server: spill.jotunmc.no</span>
                </ContactMethod>
              </ContactInfo>
            </Section>

            <Section>
              <SectionTitle><FaPaperPlane /> Send oss en melding</SectionTitle>
              <ContactForm onSubmit={handleSubmit}>
                <Input 
                  type="text" 
                  name="name"
                  placeholder="Ditt navn" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Din e-postadresse" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                />
                                <Input 
                  type="text" 
                  name="subject"
                  placeholder="Emne" 
                  required 
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                <TextArea 
                  name="message"
                  placeholder="Din melding" 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <SubmitButton type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sender...' : 'Send Melding'} <FaPaperPlane />
                </SubmitButton>
                {submitMessage && <SubmitMessage isError={isError}>{submitMessage}</SubmitMessage>}
              </ContactForm>
            </Section>
          </ContactGrid>
        </ContentContainer>

        <Footer />
      </PageContainer>
    </ThemeProvider>
  );
};

export default Contact;

