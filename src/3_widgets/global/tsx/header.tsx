import { useState } from 'react';
import { NavButton } from '../../../6_shared/nav-button';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';


export const Header: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  const headerLabels = ['Shop','Who we are','Newstand','My Profile','Basket'];
  const headerLinks = ['/shop','/','/notFound','/basket']
  
  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <StyledHeader className="header h-[100px]">
      <Logo >World Peas</Logo>
      <Navbar className="nav">
        <NavButton
          label={headerLabels[0]}
          to={headerLinks[0]}
          isActive={activeTab === '/shop'}
          onClick={() => handleClick('/shop')}
        />
        <NavButton
          label={headerLabels[1]}
          to={headerLinks[1]}
          isActive={activeTab === '/'}
          onClick={() => handleClick('/')}
        />
        <NavButton
          label={headerLabels[3]}
          to={headerLinks[2]}
          isActive={activeTab === headerLinks[2]}
          onClick={() => handleClick(headerLinks[2])}
        />
        <NavButton
          label={headerLabels[4]}
          to={headerLinks[3]}
          isActive={activeTab === '/basket'}
          onClick={() => handleClick('/basket')}
        />
      </Navbar>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem; /* p-4 */
  background-color: #ffffff; /* bg-white */
`;

const Logo = styled.header`
  font-size: 1.875rem; /* text-3xl */
  font-family: serif; /* font-serif */
  color: #2f855a; /* text-green-700 */
`;

const Navbar = styled.header` 
  display: flex;
  gap: 2rem; /* space-x-8 */
  font-size: 1.125rem; /* text-lg */
`;
