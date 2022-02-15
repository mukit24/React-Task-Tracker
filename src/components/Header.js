import Button from "./Button"

const Header = (props) => {

    const onClick = () => console.log('clicked');

    return (
        <header className="py-5 d-flex justify-content-between">
            <h2>{props.title}</h2>
            <Button color='btn-success' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header