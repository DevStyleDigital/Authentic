import React, { useEffect, useRef, useState } from 'react';

import { Container, Fade } from './style';

import { useLayoutContext } from '@contexts/Layout/useLayoutContext';
import { LinksHeader } from '@utils/linksHeader';
import Link from 'next/link';

interface props {
  toggle: boolean;
}

const Navibar = ({ toggle }: props) => {
  const { setHamburguer } = useLayoutContext();
  const NaviRef = useRef<HTMLDivElement>(null);
  const FadeNavi = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);

  useEffect(() => {
    FadeNavi.current?.addEventListener('touchstart', (ev) => {
      setTouchStart(ev.changedTouches[0].clientX);
    });
    FadeNavi.current?.addEventListener('touchmove', (ev) => {
      const { clientX } = ev.changedTouches[0];
      if (clientX > touchStart) {
        setHamburguer(false);
      }
    });
  }, []);

  useEffect(() => {
    if (NaviRef.current && FadeNavi.current) {
      if (toggle) {
        NaviRef.current.style.right = '0';
        FadeNavi.current.style.opacity = '1';
        FadeNavi.current.style.visibility = 'visible';
      } else {
        NaviRef.current.style.right = '-500px';
        FadeNavi.current.style.opacity = '0';
        FadeNavi.current.style.visibility = 'hidden';
      }
    }
  }, [toggle]);

  return (
    <>
      <Fade ref={FadeNavi} onClick={() => setHamburguer(false)} />
      <Container ref={NaviRef}>
        <ul>
          {LinksHeader.map((item) => (
            <li key={item.id}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Navibar;
