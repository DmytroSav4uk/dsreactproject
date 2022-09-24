import css from "../../CSS/components.module.css"

export default function Todo(props) {

    const {title, completed} = props

    if (completed === true) {
        return (
            <div className={css.element}>
                <h4>title:{title}</h4>
                <p>completed:{' YES'}</p>
            </div>)
    }

    else {

        return (
            <div className={css.element}>
                <h4>title:{title}</h4>
                <p>completed:{' NO'}</p>
            </div>)

    }
}





