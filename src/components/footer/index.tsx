import LogoEscrito from 'assets/svg/logo-escrito';
import { FooterStyle } from './style';

const Footer = () => {
  return (
    <FooterStyle>
      <span>
        CRECI 28.530 – Empreendimento denominado “Residencial Authentique”, cujo projeto
        encontra-se aprovado na Prefeitura Municipal de Sorocaba/SP, conforme alvarás de
        licenças de obras números – 576/21. Incorporação registrada sob R-11, na matrícula
        63.147, no 2º Oficial de Registro de Imóveis de Sorocaba / SP, em 30/12/2021.
        Todas as imagens utilizadas neste material são meramente ilustrativas e possíveis
        alterações do projeto serão executadas de acordo com o memorial descritivo do
        empreendimento.
      </span>
      <div className="logo">
        <LogoEscrito />
        <a href="https://coreag.com.br/">Intelligence By Core.Ag</a>
      </div>
    </FooterStyle>
  );
};

export default Footer;
