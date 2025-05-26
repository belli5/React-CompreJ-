import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 999;
`;

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-320px')};
  width: 320px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 8px rgba(0,0,0,0.2);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
`;

export const SidebarContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;
  background-color: #0057d9;
  padding: 20px;
  border-radius: 10px;
  color: white;

  svg {
    color: #ffc107; /* Amarelo */
  }

  h3 {
    margin-top: 10px;
    color: white;
  }

  p {
    color: #e0e0e0;
    font-size: 0.9rem;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  cursor: pointer;
  border-radius: 8px;
  color: #333;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    color: #333;
  }
`;
