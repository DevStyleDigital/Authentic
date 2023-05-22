import { useEffect, useRef } from 'react';
import WhatsappSVG from 'assets/svg/whatsapp';
import { ArrowStyle, WhatsappStyle } from './style';
import { ArrowIcon } from '@stylesComponents/icons';
import { useLayoutContext } from '@contexts/Layout/useLayoutContext';

const WhatsappButton = () => {
  const { whatsapp, setWhatsapp } = useLayoutContext();
  const ButtonRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ButtonRef.current) {
      if (whatsapp) {
        ButtonRef.current.style.right = '0';
      } else {
        ButtonRef.current.style.right = '-500px';
      }
    }
  }, [whatsapp]);
  return (
    <>
      <ArrowStyle onClick={() => setWhatsapp((prev) => !prev)}>
        <ArrowIcon />
        <span>Whatsapp</span>
      </ArrowStyle>
      <WhatsappStyle ref={ButtonRef}>
        <a target='blank' href='https://api.whatsapp.com/send?phone=5515981337175&text=Ol%C3%A1%2C%20estava%20acessando%20o%20site%20da%20AG%20Velasco%20e%20quero%20falar%20com%20um%20corretor'>
          <span>
            Fale com um
            <br /> corretor
          </span>
        <WhatsappSVG />
        </a>
      </WhatsappStyle>
    </>
  );
};

export default WhatsappButton;
