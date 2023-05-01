import Logo from 'assets/svg/logo';
import { HeaderStyle } from './style';
import { LinksHeader } from '@utils/linksHeader';
import Hamburguer from '@components/hamburguer';
import { useLayoutContext } from '@contexts/Layout/useLayoutContext';
import Link from 'next/link';

const Header = () => {
  const { hamburguer, setHamburguer } = useLayoutContext();
  return (
    <HeaderStyle>
      <Logo />
      <ul className="list">
        {LinksHeader.map((item) => (
          <li key={item.id}>
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <div className="menu">
        <Hamburguer />
      </div>
    </HeaderStyle>
  );
};

export default Header;
