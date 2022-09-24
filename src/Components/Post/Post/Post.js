import css from "../../CSS/components.module.css"

export default function Post(props) {


    const {id, title, body} = props



    return (
        <div className={css.element}>
            <h4>{id} title:{title}</h4>
            <p>{body}</p>
        </div>)

}

