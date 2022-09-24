

export default function Post(props) {


    const {id, title, body} = props



    return (
        <div>
            <h4>{id} title:{title}</h4>
            <p>{body}</p>
        </div>)

}

