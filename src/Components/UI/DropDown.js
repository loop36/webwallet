const DropDown = (props) => {
    return (
        <div className={props.classes}>
            <select placeholder="select an option" className="p-1/2 w-40 bg-indigo-400 text-gray-50 font-bold capitalize">               
             {props.values.map( val =>{
                   return <option value={val}> {val}</option>
                })}
            </select>
        </div>
    )
}

export default DropDown
