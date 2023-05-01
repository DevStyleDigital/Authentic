import Navibar from '@components/navibar';
import { useLayoutContext } from '@contexts/Layout/useLayoutContext';
import Hamburger from 'hamburger-react';

const Hamburguer = () => {
    const { hamburguer, setHamburguer } = useLayoutContext()
    return (
        <>
            <Hamburger 
                toggled={hamburguer}
                toggle={setHamburguer}
                color="black"
            />
            <Navibar toggle={hamburguer} />
        </>
    )
}

export default Hamburguer