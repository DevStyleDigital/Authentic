import Form from '@components/form';
import { VisiteStyle } from './style';
import EnderecoSVG from 'assets/svg/endereco';
import WhatsappSVG from 'assets/svg/whatsapp';

const Visite = () => {
  return (
    <VisiteStyle id="visite">
      <div className="content">
        <div className="form">
          <Form />
        </div>
        <div className="endereco">
          <h1>
            <EnderecoSVG /> Visite Decorado
          </h1>
          <span>Av. Dr. Eugênio Salerno, 387</span>
          <span>
            <WhatsappSVG />
            15 98102-8310
          </span>
        </div>
      </div>
    </VisiteStyle>
  );
};

export default Visite;
