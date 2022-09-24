import css from "../../CSS/components.module.css"

export default function Album (props){
    const {id ,title} = props


    return(

        <div className={css.element}>
            <h4>{id} {title}</h4>
        </div>)}