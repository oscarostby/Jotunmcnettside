// Modal.js
import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaDiscord, FaTimes } from 'react-icons/fa';

const slideDown = keyframes`
  from { transform: translateY(-150%); }
  to { transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  transition: transform 0.3s ease;
  
  ${props => props.isMobile ? css`
    top: 10px;
    left: 8px;
    right: 8px;
    padding: 12px;
    border-radius: 18px;
    animation: ${slideDown} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    background: rgba(44, 62, 80, 0.85);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1);
    transform: translateX(${props => props.offset}px);
  ` : css`
    bottom: 20px;
    left: 20px;
    width: 320px;
    background: linear-gradient(135deg, #2c3e50, #34495e);
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    animation: ${fadeIn} 0.5s ease-out;
    flex-direction: column;
  `}
`;

const Content = styled.div`
  flex: 1;
  margin-right: ${props => props.isMobile ? '40px' : '0'};
`;

const Title = styled.h3`
  font-size: ${props => props.isMobile ? '0.95rem' : '1.5rem'};
  font-weight: 600;
  margin: 0 0 2px 0;
  color: #ffffff;
  ${props => !props.isMobile && css`
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  `}
`;

const Text = styled.p`
  font-size: ${props => props.isMobile ? '0.85rem' : '1rem'};
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  ${props => !props.isMobile && css`
    line-height: 1.5;
    margin-bottom: 20px;
  `}
`;

const DiscordButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #7289da;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  ${props => props.isMobile ? css`
    padding: 6px 12px;
    border-radius: 13px;
    font-size: 0.8rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
  ` : css`
    padding: 12px 20px;
    border-radius: 30px;
    font-size: 1rem;
    box-shadow: 0 4px 15px rgba(114, 137, 218, 0.3);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(114, 137, 218, 0.4);
      background: #5e77d4;
    }
  `}

  svg {
    margin-right: ${props => props.isMobile ? '4px' : '8px'};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  font-size: ${props => props.isMobile ? '1rem' : '1.2rem'};
  cursor: pointer;
  padding: 4px;
  position: absolute;
  top: ${props => props.isMobile ? '8px' : '12px'};
  right: ${props => props.isMobile ? '8px' : '12px'};
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

const Modal = ({ isOpen, onClose }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    currentX.current = startX.current;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    currentX.current = e.touches[0].clientX;
    const diff = currentX.current - startX.current;
    setOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (Math.abs(offset) > 100) {
      onClose();
    } else {
      setOffset(0);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalWrapper 
      isMobile={isMobile} 
      offset={offset}
      onTouchStart={isMobile ? handleTouchStart : undefined}
      onTouchMove={isMobile ? handleTouchMove : undefined}
      onTouchEnd={isMobile ? handleTouchEnd : undefined}
    >
      <Content isMobile={isMobile}>
        <Title isMobile={isMobile}>Jotunheim MC</Title>
        <Text isMobile={isMobile}>Bli med i vårt episke fellesskap!</Text>
      </Content>
      <DiscordButton 
        href="https://discord.gg/wGSjZGEvHW" 
        target="_blank" 
        rel="noopener noreferrer"
        isMobile={isMobile}
      >
        <FaDiscord /> {isMobile ? 'Join' : 'Join Discord'}
      </DiscordButton>
      <CloseButton onClick={onClose} isMobile={isMobile}>
        <FaTimes />
      </CloseButton>
    </ModalWrapper>
  );
};

export default Modal;