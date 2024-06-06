import CountryDetailView from './view'
import {useParams} from 'react-router-dom'
const Index =()=>{
    const { id } = useParams();
    return(
        <CountryDetailView id={id} />
    )
}
export default Index