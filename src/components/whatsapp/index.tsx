import WhatsappSVG from "assets/svg/whatsapp"
import { ArrowStyle, WhatsappStyle } from "./style"
import { ArrowIcon } from "@stylesComponents/icons"
import { useLayoutContext } from "@contexts/Layout/useLayoutContext";
import { useEffect, useRef } from "react";

 
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
            <ArrowStyle onClick={() => setWhatsapp(prev => !prev)}>
                <ArrowIcon />
            </ArrowStyle>
            <WhatsappStyle ref={ButtonRef}>
                <span>Fale com um<br /> corretor</span>
                <WhatsappSVG />
            </WhatsappStyle>
        </>
    )
}   

export default WhatsappButton