import Form from "@components/form"
import { ContentVideoStyle } from "./style"

const ContentVideo = () => {
    return (
        <ContentVideoStyle>
            <div className="content">
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/UwBLMQgnSGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="form">
                    <Form />
                </div>
            </div>
        </ContentVideoStyle>
    )
}

export default ContentVideo