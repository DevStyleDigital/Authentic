import Image from 'next/image';
import { BannerStyle } from './style';
import BannerImg from '../../../assets/img/banner.png';
import BannerMobileImg from '../../../assets/img/Banner_Mobile.png';
import Form from '@components/form';

const Banner = () => {
  return (
    <BannerStyle>
      <Image alt="banner" className="banner" src={BannerImg} width={1920} height={788} />
      <Image
        alt="banner"
        className="banner_mobile"
        src={BannerMobileImg}
        width={600}
        height={400}
      />
      <div className="formulario">
        <div className="container">
          <Form />
        </div>
      </div>
    </BannerStyle>
  );
};

export default Banner;
