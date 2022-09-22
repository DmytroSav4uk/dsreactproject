import {carService} from "../Services/Car.service";
import css from "../Css/components.module.css"

const Car = ({car, setCars,setCarForUpdate}) => {
    const {id, model, price, year} = car;


    const deleteCar = async () => {
        await carService.deleteById(id)
        setCars(cars => {
                const index = cars.findIndex(value => value.id === id);
                if (index !== -1) {
                    cars.splice(index, 1)
                }
                return [...cars]
            }
        )
    }
    return (
        <div className={css.card}>
            <div className={'text'}>
                <h4>model: {model}</h4>
                <h5>price: {price}</h5>
                <p>year: {year}</p>
            </div>

            <div className={css.buttons}>
                <button onClick={()=>setCarForUpdate(car)}>update</button>
                <button onClick={()=>deleteCar}>delete</button>
            </div>
        </div>
    );
};
export {Car};