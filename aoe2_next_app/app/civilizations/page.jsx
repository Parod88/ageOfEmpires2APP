import { getAllCivilizations } from "../../api/services/civilizationsService";
import { ListofCivilizations } from "./ListOfCivilizations";




export default async function CivilizationsPage ({params}) {
    
    // const [civs, setCivs] = useState([])

    // useEffect(() => {
    //     getAllCivilizations().then(setCivs)
    // })
    return (    
        <section>
         <ListofCivilizations /> 
        </section>            
    )
}