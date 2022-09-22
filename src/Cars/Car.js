import css from '../Css/components.module.css';
import {carService} from "../Services/Car.service";

const Car = ({car, setCars,setCarForUpdate}) => {
    const {id, model, price, year} = car;
    const deleteCar = async () => {
        await carService.deleteById(id);
        setCars(cars => {
            const index = cars.findIndex(value => value.id === id);
            cars.splice(index, 1)
            return [...cars]
        })
    }
    return (
        <div className={css.card}>
            <div>
                <h1>model: {model}</h1>
                <h2>price: {price}</h2>
                <h2>year: {year}</h2>
            </div>
            <div className={css.buttons}>
                <button onClick={()=>setCarForUpdate(car)}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>
        </div>
    );
};

export {Car};