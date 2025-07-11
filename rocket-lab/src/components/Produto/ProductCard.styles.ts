// src/components/ProductCard/ProductCard.styles.ts
import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  margin-bottom: 12px;
  color: #555;
`;

export const Price = styled.div`
  font-weight: bold;
  color: #0057d9;
  margin-bottom: 12px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background-color: #0057d9;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0041a8;
  }
`;
