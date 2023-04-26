import Image from "next/image"
import { BannerStyle } from "./style"
import BannerImg from '../../assets/img/banner.png'

const Banner = () => {
    return (
        <BannerStyle>
            <Image src={BannerImg} width={1920} height={800} />
        </BannerStyle>
    )
}

export default Banner 