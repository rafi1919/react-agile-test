

const Tag =({continent})=> {
    return(
        <p className={` py-[2px] px-4 rounded-full font-semibold text-white w-fit  ${
            continent === 'Europe' ? 'bg-water':
            continent === 'Asia' ? 'bg-elect':
            continent === 'Africa' ? 'bg-leaf':
            continent === 'Australia' ? 'bg-ghost': 
            continent === 'The Caribean' ? 'bg-fire' : 'bg-fairy'}`}>{continent}</p>
    )
}
export default Tag