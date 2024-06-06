import ICountryRepository from "../../Domain/Repositories/ICountryRepository";
import axiosInstance from "../Api/country.api";
import Country from "../../Domain/Models/Country";


class CountryRepository extends ICountryRepository {
    async getAllCountries(headers) {
       try {
        const response = await axiosInstance.get('/countries',{ headers});
        return response.data.data.map(countryData => new Country({
            name: countryData.name,
            full_name: countryData.full_name,
            capital: countryData.capital,
            iso2: countryData.iso2,
            iso3: countryData.iso3,
            covid19: countryData.covid19,
            current_president: countryData.current_president,
            currency: countryData.currency,
            phone_code: countryData.phone_code,
            continent: countryData.continent,
            description: countryData.description,
            size: countryData.size,
            independence_date: countryData.independence_date,
            population: countryData.population,
            href: countryData.href
        }))
       } catch (error) {
        console.error('error fetching repo', error)
       }
    }
}
export default new CountryRepository()