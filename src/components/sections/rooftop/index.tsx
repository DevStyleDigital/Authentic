import { RoofTopStyle } from './style';
import Woman from '../../../assets/img/woman.png';
import Image from 'next/image';
const RoofTop = () => {
  return (
    <RoofTopStyle>
      <div className="content">
        <div className="image">
          <Image src={Woman} alt="mulher" width={700} height={400} />
        </div>
        <div className="text">
          <h1>ROOFTOP </h1>
          <p>
            Corpo <br /> & Mente
          </p>
          <h4>
            Conecte-se com o seu <br />
            verdadeiro eu
          </h4>
          <span>
            Um espaço inédito, 100% dedicado ao <br/> seu autocuidado diário. <br/>Desenhado para você
            cuidar do corpo<br/> e da mente de um jeito todo seu.
          </span>
        </div>
      </div>
    </RoofTopStyle>
  );
};

export default RoofTop;
