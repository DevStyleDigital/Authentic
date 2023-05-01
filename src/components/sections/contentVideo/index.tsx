import Form from '@components/form';
import { ContentVideoStyle } from './style';

const ContentVideo = () => {
  return (
    <ContentVideoStyle>
      <div className="content">
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed/UwBLMQgnSGk"
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
