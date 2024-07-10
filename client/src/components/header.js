import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaDiscord } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.background};
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  @media (max-width: 968px) {
    padding: 2rem 2rem; // Increased padding for thicker navbar on mobile
  }
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  @media (max-width: 968px) {
    display: none; // Hide logo on mobile
  }
`;

const LogoImage = styled.img`
  height: 50px;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 968px) {
    position: fixed;
    top: 0;
    left: ${props => (props.isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.background};
    flex-direction: column;
    justify-content: center;
    transition: left 0.3s ease;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.primary};
  }

  @media (max-width: 968px) {
    font-size: 1.3rem;
    margin: 1rem 0;
  }
`;

const DiscordButton = styled.a`
  background-color: #7289da;
  color: white;
  padding: 0.7rem 1.2rem;
  border-radius: 4px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    background-color: #5f73bc;
  }

  @media (max-width: 968px) {
    margin-top: 1rem;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  @media (max-width: 968px) {
    display: block;
    position: absolute;
    left: 2rem;
    top: 2rem; // Moved 2px lower
  }
`;

const HamburgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${props => props.theme.text};
  transition: all 0.3s ease;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }

  &::before {
    transform: translateY(-10px);
  }

  &::after {
    transform: translateY(10px);
  }

  ${props => props.isOpen && `
    background-color: transparent;

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  `}
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HamburgerButton onClick={toggleMenu}>
          <HamburgerIcon isOpen={isMenuOpen} />
        </HamburgerButton>
        <Logo to="/">
          <LogoImage src="https://i.ibb.co/8XVyTh3/IMG-0129-removebg-preview.png" alt="Jotunheim MC Logo" />
        </Logo>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/" onClick={toggleMenu}>Hjem</NavLink>
          <NavLink to="/om-oss" onClick={toggleMenu}>Om oss</NavLink>
          <NavLink to="/regler" onClick={toggleMenu}>Regler</NavLink>
          <NavLink to="/stab" onClick={toggleMenu}>Stab</NavLink>
          <NavLink to="/kontakt" onClick={toggleMenu}>Kontakt</NavLink>
          <DiscordButton href="https://discord.gg/your-discord-invite" target="_blank" rel="noopener noreferrer">
            <FaDiscord /> Discord
          </DiscordButton>
        </NavLinks>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
