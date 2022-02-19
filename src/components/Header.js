import Button from "./Button"

const Header = (props) => {

    return (
        <header className="py-5 d-flex justify-content-between">
            <h2>{props.title}</h2>
            <Button color={props.showAdd ? 'btn-danger' : 'btn-success'} text={props.showAdd ? 'Close' : 'Add Task'} onClick={props.onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header