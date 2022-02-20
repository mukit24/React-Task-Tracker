import Button from "./Button"
import {useLocation} from 'react-router-dom'

const Header = (props) => {
    const location = useLocation()
    return (
        <header className="py-5 d-flex justify-content-between">
            <h2>{props.title}</h2>
            {location.pathname === '/' && <Button color={props.showAdd ? 'btn-danger' : 'btn-success'} text={props.showAdd ? 'Close' : 'Add Task'} onClick={props.onAdd} />}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header