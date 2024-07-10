import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterWrapper = styled.footer`
  background-color: #11192d;
  color: ${props => props.theme.text};
  padding: 3rem 2rem;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  margin: 0 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.theme.primary};
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 1rem;
  }
`;

const Copyright = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  opacity: 0.7;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLink to="/kontakt">Kontakt</FooterLink>
        <FooterLink to="/serverkart">Serverkart</FooterLink>
        <FooterLink to="/vart-team">Vårt team</FooterLink>
        <FooterLink to="/var-historie">Vår historie</FooterLink>
      </FooterContainer>
      <Copyright>
        © {new Date().getFullYear()} Jotunheim MC. Alle rettigheter reservert.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
