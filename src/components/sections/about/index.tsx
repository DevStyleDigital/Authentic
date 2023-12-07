import Vector from 'assets/svg/Vector';
import { AboutStyle } from './style';
import LogoEscrito from 'assets/svg/logo-escrito';

const About = () => {
  return (
    <AboutStyle>
      <Vector />
      <div className="texts">
        <div className="velasco">
          <LogoEscrito />
          <h4>
            Com uma proposta exclusiva de lifestyle,{' '}
            <strong>15 anos de atuação e 1500 lares entregues,</strong> a Construtora Ag
            Velasco investe em soluções que promovam saúde, conforto e bem-estar,
            apostando em entregas diferenciadas.
          </h4>
        </div>
        <div className="respeito">
          <h1>
            Respeito <br />
            em Construir
          </h1>
          <h4>Planejamento nos mínimos detalhes e pensado para cada cliente</h4>
        </div>
      </div>
    </AboutStyle>
  );
};

export default About;
