import Form from '@components/form';
import { ContentVideoStyle } from './style';

const ContentVideo = () => {
  return (
    <ContentVideoStyle>
      <div className="content">
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/vPMoI9K8Bo0?si=xAfQ4jS06OW78Rz5"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </ContentVideoStyle>
  );
};

export default ContentVideo;
