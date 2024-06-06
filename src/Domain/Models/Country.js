class Country {
    constructor({
        name,
        full_name,
        capital,
        iso2,
        iso3,
        covid19,
        current_president,
        currency,
        phone_code,
        continent,
        description,
        size,
        independence_date,
        population,
        href
    }) {
        this.name = name;
        this.full_name = full_name;
        this.capital = capital;
        this.iso2 = iso2;
        this.iso3 = iso3;
        this.covid19 = covid19;
        this.current_president = current_president;
        this.currency = currency;
        this.phone_code = phone_code;
        this.continent = continent;
        this.description = description;
        this.size = size;
        this.independence_date = independence_date;
        this.population = population;
        this.href = href;
    }
}

export default Country;
