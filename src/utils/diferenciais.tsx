import AquecimentoSvg from 'assets/svg/aquecimento';
import AtenuacaoSvg from 'assets/svg/atenuacao';
import InfraSvg from 'assets/svg/infra';
import InteligenteSvg from 'assets/svg/inteligente';
import JanelasSvg from 'assets/svg/janelas';
import PorcelanatoSvg from 'assets/svg/porcelanato';
import PortaSvg from 'assets/svg/portas';
import UsbSvg from 'assets/svg/usb';
import { iDiferenciais } from 'types/iDiferenciais';

export const DiferenciasArray: iDiferenciais[] = [
  {
    id: 1,
    text: 'Aquecimento a gás nos WCs e cozinha',
    icon: <AquecimentoSvg />,
  },
  {
    id: 2,
    text: 'Apartamento inteligente (preparação para automação)',
    icon: <InteligenteSvg />,
  },
  {
    id: 3,
    text: 'Atenuação de ruído no piso',
    icon: <AtenuacaoSvg />,
  },
  {
    id: 4,
    text: 'Tomadas USB (Suítes, living, cozinha e área gourmet)',
    icon: <UsbSvg />,
  },
  {
    id: 5,
    text: 'Porta de entrada pivotante com fechadura digital',
    icon: <PortaSvg />,
  },
  {
    id: 6,
    text: 'Infraestrutura completa para ar condicionado (3 suítes e living)',
    icon: <InfraSvg />,
  },
  {
    id: 7,
    text: 'Porcelanato (Portinari 0,60x1,20m Calacata clássico HD)',
    icon: <PorcelanatoSvg />,
  },

  {
    id: 8,
    text: 'Portas e janelas com venezianas automatizadas',
    icon: <JanelasSvg />,
  },
];
