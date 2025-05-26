import { FaCog, FaSignOutAlt, FaUser, FaQuestionCircle } from 'react-icons/fa';
import { SidebarContainer, Overlay, SidebarContent, CloseButton, UserInfo, Option } from './SidebarPerfil.styles';

type SidebarPerfilProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SidebarPerfil = ({ isOpen, onClose }: SidebarPerfilProps) => {
  const nomeUsuario = "Usuario";

  return (
    <>
      {isOpen && <Overlay onClick={onClose} />}
      <SidebarContainer isOpen={isOpen}>
        <SidebarContent>
          <CloseButton onClick={onClose}>X</CloseButton>
          <UserInfo>
            <FaUser size={50} />
            <h3>{nomeUsuario}</h3>
            <p>Usuario@email.com</p>
          </UserInfo>
          <Option>
            <FaCog /> Configurações
          </Option>
          <Option>
            <FaQuestionCircle /> Ajuda e Suporte
          </Option>
          <Option>
            <FaSignOutAlt /> Sair
          </Option>
        </SidebarContent>
      </SidebarContainer>
    </>
  );
};

export default SidebarPerfil;
