import {useEffect, useState} from "react";
import {CarForm} from "./CarForm";
import {Car} from "./Car"

import {carService} from "../Services/Car.service";
import css from "../Css/components.module.css"


const Cars = () => {
    let [cars, setCars] = useState([]);
    let [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            <div className={css.inputs}>
                <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            </div>
            <div className={css.cards}>
                {cars.map(car => <Car key={car.id} car={car} setCars={setCars} setCarForUpdate={setCarForUpdate}
                />)}
            </div>
        </div>)
};

export {Cars};