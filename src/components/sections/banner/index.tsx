import Image from 'next/image';
import { BannerStyle } from './style';
import BannerImg from '../../../assets/img/banner.png';
import BannerMobileImg from '../../../assets/img/Banner_Mobile.png';

const Banner = () => {
  return (
    <BannerStyle>
      <Image alt="banner" className="banner" src={BannerImg} width={1920} height={788} />
      <Image
        alt="banner"
        className="banner_mobile"
        src={BannerMobileImg}
        width={1920}
        height={788}
      />
      <div className="button">
        <a href="#visite">Fale com um Corretor</a>
      </div>
    </BannerStyle>
  );
};

export default Banner;
