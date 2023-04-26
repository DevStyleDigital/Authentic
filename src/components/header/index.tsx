import Logo from "assets/svg/logo"
import { HeaderStyle } from "./style"
import { LinksHeader } from "@utils/linksHeader"

const Header =  () => {
    return (
        <HeaderStyle>
           <Logo/>
           <ul>
            {LinksHeader.map(item => (
                <li key={item.id}>
                    <a href={item.link}>{item.label}</a>
                </li>
            ))}
           </ul>
        </HeaderStyle>
    )
}

export default Header