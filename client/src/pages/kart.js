import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito', sans-serif;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }
`;

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

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MapContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  height: calc(100vh - 20px);
  overflow: hidden;
  padding-top: 80px;
`;

const StyledHeader = styled(Header)`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 20px;
`;

const StyledFooter = styled(Footer)`
  margin-top: auto;
`;

const MapPage = () => {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <PageContainer>
        <StyledHeader />
        <MapContainer>
          <iframe
            src="http://kart.jotunmc.no:60444/"
            width="100%"
            height="100%"
            frameBorder="0"
          />
        </MapContainer>
        <StyledFooter />
      </PageContainer>
    </ThemeProvider>
  );
};

export default MapPage;