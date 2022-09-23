export default function Todo(props) {

    const {title, completed} = props

    if (completed === true) {
        return (
            <div>
                <h4>title:{title}</h4>
                <p>completed:{' YES'}</p>
            </div>)
    }

    else {

        return (
            <div>
                <h4>title:{title}</h4>
                <p>completed:{' NO'}</p>
            </div>)

    }
}





