const Dog = ({dog, deleteDog})=>{
    return(
        <div>
           <p>{dog.name}</p>
            <button onClick={()=>deleteDog(dog.id)}>delete</button>
        </div>
    )
}

export {Dog};