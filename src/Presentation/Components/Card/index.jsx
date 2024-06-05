


const Card =({name, continent, currency, code, flag})=>{
    return(
        <div className={`lg:w-[250px] md:w-[220px] w-[170px] lg:h-[350px] md:h-[350px] h-[300px] rounded-md border-[1px] border-gray-100 p-4 shadow-md shadow-white backdrop-blur-sm ${
            continent === 'Europe' ? 'gradient-water':
            continent === 'Asia' ? 'gradient-elect':
            continent === 'Africa' ? 'gradient-leaf':
            continent === 'Australia' ? 'gradient-ghost' : 'gradient-fairy' }`}>            
            <div className="lg:h-[180px] md:h-[160px] h-[100px] border-b-[1px] border-white flex items-center justify-center">
                <img src={flag} className="object-cover lg:w-[100px] md:w-[80px] w-[80px] lg:h-[100px] md:h-[80px] h-[80px] rounded-full bg-red-600" alt={flag}/>
            </div>
            <div className=" flex flex-col items-center">
                <p className="text-[24px] font-medium text-white">.{name}.</p>
                
                <p className={` py-[2px] px-4 rounded-full font-semibold text-white w-fit  ${
                    continent === 'Europe' ? 'bg-water':
                    continent === 'Asia' ? 'bg-elect':
                    continent === 'Africa' ? 'bg-leaf':
                    continent === 'Australia' ? 'bg-ghost': 'bg-fire' }`}>{continent}</p>
            </div>
            <div className=" flex justify-between px-5 text-white">
                <div className="text-center">
                    <p className="text-sm font-bold">{code}</p>
                    <p className="text-sm font-light">Code</p>
                </div>
                <div className="text-center">
                    <p className="text-sm font-bold">{currency}</p>
                    <p className="text-sm  font-light">Currency</p>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="py-2 px-6 rounded-md bg-gray-900 text-sm text-white">More info</button>
            </div>
        </div>
    )
}

export default Card