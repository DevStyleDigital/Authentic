import { EmpreendimentoStyle } from "./style"
import ImgBanner from '../../../assets/img/empreendimento.jpg'
import RicardoImg from '../../../assets/img/ricardo_bandeira.jpg'
import Image from "next/image"
const Empreendimento = () => {
    return (
        <EmpreendimentoStyle id="empreeendimento">
            <div className="content">
                 <div className="banner">
                    <Image src={ImgBanner} width={1000} height={1000} alt="empreendimento" />
                 </div>
                 <div className="apresent">
                    <div className="firstCol">
                        <h1>Uma obra prima <br /> no coração da cidade</h1>
                        <h4>Um empreendimento que reúne modernidade, conforto e alto padrão para viver bem.<br />
                            <span>Conheça o primeiro empreendimento com rooftop do Santa Terezinha.</span>
                         </h4>
                         <h4>   Ao lado dos principais acessos, cercado pelo conforto e a sofisticação que o entorno oferece. Entre os principais, toda autenticidade que Sorocaba pode fornecer. </h4>
                        <a href="#visite">Fale com um Corretor</a>
                    </div>
                    <div className="secondCol">
                        <span>
                            Projeto assinado<br /> pelo renomado arquiteto
                        </span>
                        <h1>Ricardo Bandeira</h1>
                        <Image src={RicardoImg} width={345} height={240} alt="Ricardo Bandeira"/>
                        <a href="#visite">Fale com um Corretor</a>
                    </div>
                 </div>
            </div>
        </EmpreendimentoStyle>
    )
}

export default Empreendimento