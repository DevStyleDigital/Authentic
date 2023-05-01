import { DiferenciaisStyle } from './style';
import DiferenciaisImg from '../../../assets/img/fundo_diferenciais.jpg';
import Image from 'next/image';
import Link from 'next/link';
const Diferenciais = () => {
  return (
    <DiferenciaisStyle id="lazer">
      <div className="firstCol">
        <div className="content">
          <span>
            Experiência <br /> completa com
          </span>
          <h1>
            <span>
              + de <br /> 29 itens{' '}
            </span>
            <br /> de lazer <br /> e comodidade{' '}
          </h1>
          <span className="line" />
          <Link href="#visite">Fale com um Corretor</Link>
        </div>
        <Image src={DiferenciaisImg} alt="diferenciais" width={560} height={700} />
      </div>
      <div className="secondCol">
        <div className="diferenciais1">
          <span>1. Piscina Adulto</span>
          <span>2. Piscina Infantil</span>
          <span>3. Bangalô</span>
          <span>4. Deck Molhado</span>
          <span>5. Deck Seco</span>
          <span>6. Sauna</span>
          <span>7. SPA</span>
          <span>8. GYM</span>
          <span>9. Pilates</span>
          <span>10. Massagem</span>
          <span>11. Bar da Piscina</span>
          <span>12. Churrasqueira</span>
          <span>13. Quadra Poliesportiva</span>
          <span>14. Fire Place</span>
          <span>15. Salão de Festas</span>
        </div>
        <div className="diferenciais2">
          <span>16. Espaço Gourmet</span>
          <span>17. Playroom</span>
          <span>18. Espaço TikTok</span>
          <span>19. Espaço Beauty</span>
          <span>20. Coworking</span>
          <span>21. Espaço Kids</span>
          <span>22. PlayBaby</span>
          <span>23. Playground</span>
          <span>24. Pet Garden</span>
          <span>25. PitFire</span>
          <span>26. Mini Market</span>
          <span>27. Terraço Gourmet By AG Velasco</span>
          <span>28. Terraço Descoberto</span>
          <span>29. Praça AG Velasco</span>
        </div>
      </div>
    </DiferenciaisStyle>
  );
};

export default Diferenciais;
