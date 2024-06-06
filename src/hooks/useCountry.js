import { useEffect, useState } from "react";
import GetAllCountriesUseCase from "../Aplication/UseCases/GetAllCountries";

const useCountries =()=> {
    const [country, setCountry] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchData = async()=> {
          try {
            const tokenAuth =  "1009|SLff0Kn57xw9ufSeb1FHZY07k6XeRvhKPEbHwLlh"
            const headers = {"Authorization": `Bearer ${tokenAuth}`}
            const response = await GetAllCountriesUseCase.execute(headers);
            setCountry(response)
          } catch (error) {
            console.log('error fetch')
          } finally{
            setLoading(false)
          }
        }
    
        fetchData()

    }, [])
    return {country, loading}
}
export default useCountries