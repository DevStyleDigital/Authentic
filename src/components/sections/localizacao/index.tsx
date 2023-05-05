import Image from 'next/image';
import { LocalizacaoStyle } from './style';
import LocalizacaoImg from '../../../assets/img/localizacao.png';
const Localizacao = () => {
  return (
    <LocalizacaoStyle id="localizacao">
      <div className="content">
        <Image src={LocalizacaoImg} width={1920} height={1080} alt="Localização" />
      </div>
    </LocalizacaoStyle>
  );
};
export default Localizacao;
