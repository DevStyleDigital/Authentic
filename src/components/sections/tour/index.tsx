import { TourStyle } from "./style"

const Tour = () => {
    return (
        <TourStyle id="tour">
            <div className="content">
                <h1>Faça uma visita com nosso Tour 360º</h1>
                <div className="tour">
                <iframe style={{width: '100%', height: '100%'}} src="https://construtoraagvelasco.com.br/tour-authentic/"></iframe>
                </div>
                <a href="#visite">Agende uma visita</a>
            </div>
        </TourStyle>
    )
}

export default Tour