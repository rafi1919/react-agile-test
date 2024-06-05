import { useEffect, useState } from 'react';
import HomeView from './view'
import CountryService from '../../application/Services/CountryService';

const Index =()=>{
    const [country, setCountry] = useState([])
    useEffect(()=>{
        const fetchData = async()=> {
            try {
                const countryService = new CountryService();
                const countriesData = await countryService.getAllCountries();
                setCountry(countriesData);
            } catch (error) {
                
            }
        }
        fetchData()
    })

        console.log(country)
    return(
        <HomeView />
    )
}
export default Index