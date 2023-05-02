import { iPlantas } from 'types/iPlantas';
import Planta1 from '../assets/img/plantas/01.png';
import Planta2 from '../assets/img/plantas/02.png';
import Planta3 from '../assets/img/plantas/03.png';
import Planta4 from '../assets/img/plantas/04.png';
import Planta5 from '../assets/img/plantas/05.png';
import Planta6 from '../assets/img/plantas/06.png';
import Planta7 from '../assets/img/plantas/07.png';
import Planta8 from '../assets/img/plantas/08.png';
import Planta9 from '../assets/img/plantas/09.png';
import Planta10 from '../assets/img/plantas/10.png';
import Planta11 from '../assets/img/plantas/11.png';
import Image from 'next/image';

export const PlantasArray: iPlantas[] = [
  {
    id: 1,
    tamanho: 106,
    tipo: '1, 2 ou 3 suites',
    imagem: <Image src={Planta1} alt="planta-1" width={1700} height={1300} />,
  },
  {
    id: 2,
    tamanho: 101,
    tipo: 'Tipo 1',
    descricao: 'Sendo 01 Master com closet',
    suites: '3 suítes',
    imagem: <Image src={Planta2} alt="planta-2" width={1700} height={1300} />,
  },
  {
    id: 3,
    tamanho: 106,
    tipo: 'Tipo 2',
    suites: '3 suítes',
    descricao: 'Sendo 01 Master com closet',
    imagem: <Image src={Planta3} alt="planta-3" width={1700} height={1300} />,
  },
  {
    id: 4,
    tamanho: 106,
    tipo: 'Tipo 3',
    suites: '2 suítes',
    descricao: 'Sendo 01 Master com closet e home office',
    imagem: <Image src={Planta4} alt="planta-4" width={1700} height={1300} />,
  },
  {
    id: 5,
    tamanho: 101,
    tipo: 'Tipo 4',
    suites: '2 suítes',
    descricao: 'Sendo 01 Master com closet e home theater',
    imagem: <Image src={Planta5} alt="planta-5" width={1700} height={1300} />,
  },
  {
    id: 6,
    tamanho: 101,
    tipo: 'Tipo 5',
    suites: '2 suítes',
    descricao: 'Sendo 01 Master com closet e home office',
    imagem: <Image src={Planta6} alt="planta-6" width={1700} height={1300} />,
  },
  {
    id: 7,
    tamanho: 101,
    tipo: 'Tipo 6',
    suites: '2 suítes',
    descricao: 'Sendo 01 Master com closet e home theater',
    imagem: <Image src={Planta7} alt="planta-7" width={1700} height={1300} />,
  },
  {
    id: 8,
    tamanho: 101,
    tipo: 'Tipo 7',
    suites: '2 suítes',
    descricao: 'Sendo 01 Master com closet, home theater e home office',
    imagem: <Image src={Planta8} alt="planta-8" width={1700} height={1300} />,
  },
  {
    id: 9,
    tamanho: 106,
    tipo: 'Tipo 8',
    suites: '2 suítes',
    imagem: <Image src={Planta9} alt="planta-9" width={1700} height={1300} />,
    descricao: 'Sendo 01 Master com closet, home theater e home office',
  },
  {
    id: 10,
    tamanho: 101,
    tipo: 'Tipo 9',
    suites: '1 suítes',
    descricao: 'Com closet, home theater e home office',
    imagem: <Image src={Planta10} alt="planta-10" width={1700} height={1300} />,
  },
  {
    id: 10,
    tamanho: 101,
    tipo: 'Tipo 10',
    suites: '1 suítes',
    descricao: 'Com closet, home theater e home office',
    imagem: <Image src={Planta11} alt="planta-11" width={1700} height={1300} />,
  },
];
