import Tag from "../Tag"

const Card =({name, continent, currency, code, flag, onClick})=>{
    return(
        <div className={`lg:w-[250px] md:w-[220px] w-[170px] lg:h-[350px] md:h-[350px] h-[300px] rounded-md border-[1px] hover:scale-105 active:shadow-rose-600 transition-300 border-gray-100 p-4 shadow-md shadow-white backdrop-blur-sm ${
            continent === 'Europe' ? 'gradient-water':
            continent === 'Asia' ? 'gradient-elect':
            continent === 'Africa' ? 'gradient-leaf':
            continent === 'Australia' ? 'gradient-ghost' : 
            continent === 'The Caribean' ? 'gradient-fire': 'gradient-fairy' }`}>             
            <div className="lg:h-[180px] md:h-[160px] h-[100px] border-b-[1px] border-white flex items-center justify-center">
                <img src={flag} className="object-cover lg:w-[100px] md:w-[80px] w-[80px] lg:h-[100px] md:h-[80px] h-[80px] rounded-full bg-red-600" alt={flag}/>
            </div>
            <div className=" flex flex-col items-center">
                <p className="lg:text-[24px] text-[18px] font-medium text-white">.{name}.</p>
                
                <Tag continent={continent} />
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
            <div className="flex justify-center ">
                <button className="py-2 px-6 rounded-md bg-gray-900 text-sm text-white" onClick={onClick}>More info</button>
                {/* <button className="py-2 px-6 rounded-md bg-gray-900 text-sm text-white"><a href={`/country/${name}`} >More info</a></button> */}
            </div>
        </div>
    )
}

export default Card