const Cat = ({cat, deleteCat}) => {

    return(
        <div>
            <p>{cat.name}</p>
            <button onClick={()=> deleteCat(cat.id)}>Delete</button>
        </div>
    )

}

export {Cat}