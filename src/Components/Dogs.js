import {useForm} from "react-hook-form";
import {useState} from "react";

export default function Dogs (){

    const {register,handleSubmit} = useForm();
    const {dogs, setDogs} = useState([])

    const onSubmit = (data) =>{
        console.log(data)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <button>save</button>
            </form>


            <h1>{}</h1>


        </div>)
}