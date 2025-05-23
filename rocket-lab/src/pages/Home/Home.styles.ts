import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background-color: #f4f4f4;
`;

export const Section = styled.section`
  margin-bottom: 48px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 24px;
  color: #333;
`;

export const CarouselContainer = styled.div`
  position: relative;
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  min-width: 320px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; 

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const ProductName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 0.9rem;
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
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0041a8;
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  color: white;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0057d9;
  }
`;

export const LeftArrow = styled(ArrowButton)`
  left: -24px;
`;

export const RightArrow = styled(ArrowButton)`
  right: -24px;
`;
