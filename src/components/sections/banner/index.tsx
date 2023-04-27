import Image from "next/image"
import { BannerStyle } from "./style"
import BannerImg from '../../../assets/img/banner.png'

const Banner = () => {
    return (
        <BannerStyle>
            <Image alt="banner" src={BannerImg} width={1920} height={788} />
            <div className="button">
                <a href="/">Fale com um Especialista</a>
            </div>
        </BannerStyle>
    )
}

export default Banner 