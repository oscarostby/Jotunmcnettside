// Modal.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes, FaDiscord } from 'react-icons/fa';

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const ModalWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: #ecf0f1;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 300px;
  animation: ${slideIn} 0.5s ease-out;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const GlowEffect = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(circle, rgba(52, 152, 219, 0.2) 0%, rgba(52, 152, 219, 0) 70%);
  opacity: 0.7;
  pointer-events: none;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #ecf0f1;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: rotate(90deg);
  }
`;

const Title = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #3498db;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 15px;
  color: #bdc3c7;
`;

const DiscordButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #7289da;
  color: white;
  padding: 10px 15px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(114, 137, 218, 0.3);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff);
    z-index: -1;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(114, 137, 218, 0.4);

    &:before {
      opacity: 1;
    }
  }

  svg {
    margin-right: 8px;
  }
`;

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <GlowEffect />
      <CloseButton onClick={onClose}>
        <FaTimes />
      </CloseButton>
      <Title>Jotunheim MC venter!</Title>
      <Text>
        Bli med i vårt episke fellesskap. Eventyr, vennskap og moro venter på deg!
      </Text>
      <DiscordButton href="https://discord.gg/wGSjZGEvHW" target="_blank" rel="noopener noreferrer">
        <FaDiscord /> Join Discord
      </DiscordButton>
    </ModalWrapper>
  );
};

export default Modal;