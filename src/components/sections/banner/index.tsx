import Image from 'next/image';
import { BannerStyle } from './style';
import BannerImg from '../../../assets/img/banner.png';
import BannerMobileImg from '../../../assets/img/Banner_Mobile.png';
import Link from 'next/link';
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
        <Link href="/">Fale com um Corretor</Link>
      </div>
    </BannerStyle>
  );
};

export default Banner;
