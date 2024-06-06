import CountryRepository from "../../Infrastructure/Repositories/CountryRepository";

const CountryService ={
    getAllCountries : async(headers) =>{
        return await CountryRepository.getAllCountries(headers)
    }
}
export default CountryService