

const CountryDetailView=({id, continent})=> {
    return(
        <div className="min-h-screen w-full">
            <div className={`  ${
                    continent === 'Europe' ? 'bg-water':
                    continent === 'Asia' ? 'bg-elect':
                    continent === 'Africa' ? 'bg-leaf':
                    continent === 'Australia' ? 'bg-ghost': 'bg-fire' }`}>
            </div>
            <div className="bg-white">
                <p className="text-[9vw]">CountryDetail{id}</p>
            </div>
        </div>
    )
}
export default CountryDetailView