import Tag from "../../Components/Tag"

const CountryDetailView=({id, continent})=> {
    return(
        <div className=" flex items-center justify-center h-[100vh]">
            <div className="rounded-lg max-w-[700px] max-h-[700px] p-5 shadow-lg shadow-ghost flex flex-col items-center">
                <img src="https://pbs.twimg.com/media/FgfRWcSVsAEi6y2?format=jpg&name=small" alt='not found' />
                <p className="text-[30px] font-bold text-fire">{id}</p>
                <Tag continent={continent}/>
            </div>
        </div>
    )
}
export default CountryDetailView