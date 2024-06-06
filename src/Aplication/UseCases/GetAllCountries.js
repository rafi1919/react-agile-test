import CountryService from "../Services/CountryService";

const GetAllCountriesUseCase = {
    execute: async (headers) => {
       try {
        return await CountryService.getAllCountries(headers);
       } catch (error) {
        console.error('error usecase')
       }
    }
};

export default GetAllCountriesUseCase