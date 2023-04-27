import Form from "@components/form"
import { ContentVideoStyle } from "./style"

const ContentVideo = () => {
    return (
        <ContentVideoStyle>
            <div className="content">
                <div className="video"></div>
                <Form />
            </div>
        </ContentVideoStyle>
    )
}

export default ContentVideo