import { useEffect, useState } from "react";
import GetAllCountriesUseCase from "../Aplication/UseCases/GetAllCountries";

const useCountries =()=> {
    const [country, setCountry] = useState([])
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);


    useEffect(()=> {
        const fetchData = async()=> {
          try {
            const tokenAuth =  "1009|SLff0Kn57xw9ufSeb1FHZY07k6XeRvhKPEbHwLlh"
            const headers = {"Authorization": `Bearer ${tokenAuth}`}
            const response = await GetAllCountriesUseCase.execute(headers);
            if (response && response.length > 0) {
              setCountry(response)
              setErrors(null)
            } else {
              setErrors('Data is not available');

            }
          } catch (error) {
            console.log('error fetch')
            setErrors('Data is sleeping');
          } finally{
            setLoading(false)
          }
        }
    
        fetchData()

    }, [])
    return {country, loading, errors}
}
export default useCountries