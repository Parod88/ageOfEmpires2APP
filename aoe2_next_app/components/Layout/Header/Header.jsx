import Image from 'next/Image'
import AoE2 from '../../../staticResources/AoE2DE_header.jpg'

function Header() {
    return (
        <div>
        <Image src={AoE2} width='max' height='291'/>
        </div>
    )
}

export default Header