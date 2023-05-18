import { GridStyle } from "./style"
import RoofTop1 from '../../../assets/img/Rooftop2-1.png'
import RoofTop2 from '../../../assets/img/Rooftop2-2.png'
import RoofTop3 from '../../../assets/img/Rooftop2-3.png'
import RoofTop4 from '../../../assets/img/Rooftop2-4.png'
import RoofTop5 from '../../../assets/img/Rooftop2-5.png'
import RoofTop6 from '../../../assets/img/Rooftop2-6.png'
import Image from "next/image"

const Grid = () => {
    return ( 
        <GridStyle>
            <div className="content">
                <div className="block">
                    <Image src={RoofTop1} alt="rooftop" width={500} height={300} />
                </div>
                <div className="block">
                    <Image src={RoofTop2} alt="rooftop" width={500} height={300} />
                </div>
                <div className="block">
                    <Image src={RoofTop3} alt="rooftop" width={500} height={300} />
                </div>
                <div className="block">
                     <Image src={RoofTop4} alt="rooftop" width={500} height={300} />
                </div>
                <div className="block">
                     <Image src={RoofTop5} alt="rooftop" width={500} height={300} />
                </div>
                <div className="block">
                     <Image src={RoofTop6} alt="rooftop" width={500} height={300} />
                </div>
            </div>
        </GridStyle>
    )
}

export default Grid